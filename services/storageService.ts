/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Storage keys used by the application
export const STORAGE_KEYS = {
  PAPERS: 'thedesigntimes_v1',
  UPVOTES: 'userUpvotes',
  LIBRARY: 'libraryItems',
  NEWSLETTER: 'newsletter_subscribers',
  NEWSLETTER_SUBSCRIBED: 'newsletter_subscribed',
  CONTACT_MESSAGES: 'contactMessages'
} as const;

// Maximum storage size estimate (5MB typical localStorage limit)
const MAX_STORAGE_SIZE = 5 * 1024 * 1024;

// Check if localStorage is available
export const isLocalStorageAvailable = (): boolean => {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

// Get current storage usage in bytes
export const getStorageUsage = (): number => {
  let total = 0;
  try {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage.getItem(key)?.length || 0;
      }
    }
  } catch {
    // Unable to calculate
  }
  return total * 2; // UTF-16 characters are 2 bytes each
};

// Get remaining storage space (approximate)
export const getRemainingStorage = (): number => {
  return MAX_STORAGE_SIZE - getStorageUsage();
};

// Check if we're near the storage limit
export const isStorageNearLimit = (): boolean => {
  return getRemainingStorage() < 100 * 1024; // Less than 100KB remaining
};

// Safe JSON parse with fallback
export const safeJSONParse = <T>(value: string | null, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    console.warn('Failed to parse JSON from localStorage');
    return fallback;
  }
};

// Safe storage get with type
export const getFromStorage = <T>(key: string, fallback: T): T => {
  if (!isLocalStorageAvailable()) return fallback;
  try {
    const item = localStorage.getItem(key);
    return safeJSONParse(item, fallback);
  } catch (error) {
    console.warn(`Failed to get ${key} from localStorage:`, error);
    return fallback;
  }
};

// Safe storage set with quota handling
export const setToStorage = <T>(key: string, value: T): boolean => {
  if (!isLocalStorageAvailable()) return false;

  try {
    const serialized = JSON.stringify(value);

    // Check if the new data would exceed storage limit
    const currentSize = localStorage.getItem(key)?.length || 0;
    const newSize = serialized.length;
    const additionalSize = (newSize - currentSize) * 2;

    if (additionalSize > getRemainingStorage()) {
      console.warn('Storage quota would be exceeded. Attempting cleanup...');
      cleanupOldData();

      // Try again after cleanup
      if (additionalSize > getRemainingStorage()) {
        console.error('Storage quota exceeded even after cleanup');
        return false;
      }
    }

    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.error('Storage quota exceeded');
      cleanupOldData();
      // Try one more time
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    }
    console.error(`Failed to set ${key} in localStorage:`, error);
    return false;
  }
};

// Remove item from storage
export const removeFromStorage = (key: string): boolean => {
  if (!isLocalStorageAvailable()) return false;
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

// Cleanup old/unnecessary data to free space
const cleanupOldData = (): void => {
  try {
    // Remove old contact messages (keep only last 10)
    const messages = getFromStorage<Array<{ id: string; timestamp: number }>>(STORAGE_KEYS.CONTACT_MESSAGES, []);
    if (messages.length > 10) {
      const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp);
      setToStorage(STORAGE_KEYS.CONTACT_MESSAGES, sortedMessages.slice(0, 10));
    }

    // If papers data is very large, we could potentially trim it
    // For now, we keep all papers as they're important

  } catch (error) {
    console.warn('Cleanup failed:', error);
  }
};

// Export library to file (backup functionality)
export const exportLibrary = (): void => {
  const library = getFromStorage(STORAGE_KEYS.LIBRARY, []);
  const upvotes = getFromStorage(STORAGE_KEYS.UPVOTES, []);

  const exportData = {
    version: 1,
    exportDate: new Date().toISOString(),
    library,
    upvotes
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `thedesigntimes-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Import library from file
export const importLibrary = (file: File): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

        if (!data.version || !data.library || !data.upvotes) {
          resolve({ success: false, message: 'Invalid backup file format' });
          return;
        }

        // Merge with existing data
        const existingLibrary = getFromStorage(STORAGE_KEYS.LIBRARY, []);
        const existingUpvotes = getFromStorage(STORAGE_KEYS.UPVOTES, []);

        const mergedLibrary = [...existingLibrary, ...data.library.filter(
          (item: { id: string }) => !existingLibrary.some((existing: { id: string }) => existing.id === item.id)
        )];

        const mergedUpvotes = [...new Set([...existingUpvotes, ...data.upvotes])];

        setToStorage(STORAGE_KEYS.LIBRARY, mergedLibrary);
        setToStorage(STORAGE_KEYS.UPVOTES, mergedUpvotes);

        resolve({ success: true, message: `Imported ${data.library.length} articles and ${data.upvotes.length} upvotes` });
      } catch {
        resolve({ success: false, message: 'Failed to parse backup file' });
      }
    };

    reader.onerror = () => {
      resolve({ success: false, message: 'Failed to read file' });
    };

    reader.readAsText(file);
  });
};

// Get storage info for display
export const getStorageInfo = (): { used: string; remaining: string; percentUsed: number } => {
  const used = getStorageUsage();
  const remaining = getRemainingStorage();
  const percentUsed = Math.round((used / MAX_STORAGE_SIZE) * 100);

  const formatBytes = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return {
    used: formatBytes(used),
    remaining: formatBytes(remaining),
    percentUsed
  };
};

// Clear all app data (for reset functionality)
export const clearAllAppData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    removeFromStorage(key);
  });
};
