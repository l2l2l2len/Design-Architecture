/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { PAPERS } from '../constants';

const getSystemInstruction = () => {
  const paperContext = PAPERS.map(p =>
    `- "${p.title}" (${p.publicationDate}). Section: ${p.category}. Lead: ${p.abstractPreview}`
  ).join('\n');

  return `You are the Executive Editor for "The Design Times", a prestigious publication covering architecture, interiors, and product design.
  Your tone is knowledgeable, discerning, and concise (like Dezeen, Wallpaper*, or ArchDaily editors).

  Here is our current story wire:
  ${paperContext}

  Answer user questions about these stories, design trends, architects, or materials.
  If asked about topics not in the wire, provide general design expertise with a focus on aesthetics and function.
  Keep answers brief (under 3-4 sentences) and sophisticated.`;
};

// Check if API key is available
export const isAIAvailable = (): boolean => {
  return !!(process.env.API_KEY || process.env.GEMINI_API_KEY);
};

// Local fallback responses based on keywords
const getLocalResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Search our articles for relevant content
  const relevantArticles = PAPERS.filter(p =>
    p.title.toLowerCase().includes(lowerMessage) ||
    p.abstractPreview.toLowerCase().includes(lowerMessage) ||
    p.category.toLowerCase().includes(lowerMessage) ||
    p.publisher.toLowerCase().includes(lowerMessage)
  );

  if (relevantArticles.length > 0) {
    const article = relevantArticles[0];
    return `Regarding "${article.title}": ${article.abstractPreview} This ${article.category.toLowerCase()} story was reported by ${article.publisher}. ${article.whyMatters || ''}`;
  }

  // Category-specific responses
  if (lowerMessage.includes('architecture') || lowerMessage.includes('building')) {
    return "Our architecture coverage focuses on groundbreaking projects from firms like Zaha Hadid Architects, BIG, and OMA. Key trends include adaptive reuse, mass timber construction, and biophilic design. Browse our Architecture section for the latest stories.";
  }

  if (lowerMessage.includes('interior') || lowerMessage.includes('design')) {
    return "Interior design is moving away from minimalism toward 'Maximalist Warmth'—layered textures, deep colors, and historical eclecticism. Materials like 3D-printed clay and bio-materials are reshaping how we think about interior fit-outs.";
  }

  if (lowerMessage.includes('sustainable') || lowerMessage.includes('green') || lowerMessage.includes('eco')) {
    return "Sustainability is at the forefront of design discourse. From self-healing concrete to urban rewilding projects, the industry is rethinking its environmental impact. Our Green section covers these developments in depth.";
  }

  if (lowerMessage.includes('tech') || lowerMessage.includes('ai') || lowerMessage.includes('digital')) {
    return "Technology is reshaping the built environment through generative AI in urban planning, AR on construction sites, and smart building systems. The integration of digital tools with physical spaces is accelerating.";
  }

  if (lowerMessage.includes('product') || lowerMessage.includes('object') || lowerMessage.includes('furniture')) {
    return "Product design continues to blend innovation with timeless aesthetics. From Braun's reissued Dieter Rams speakers to aerogel furniture, material innovation drives form. Browse our Objects section for more.";
  }

  if (lowerMessage.includes('milan') || lowerMessage.includes('salone')) {
    return "Milan Design Week remains the bellwether for global aesthetic trends. This year's highlights include immersive installations, a return to brutalism aesthetics, and a focus on tactile, physical experiences in a digital age.";
  }

  if (lowerMessage.includes('pritzker')) {
    return "The Pritzker Prize, architecture's highest honor, has recently shifted focus toward social responsibility—recognizing work in adaptive reuse and affordable housing over signature 'starchitecture'.";
  }

  if (lowerMessage.includes('brutalism') || lowerMessage.includes('brutalist')) {
    return "Brutalism is experiencing a renaissance. Once derided as cold and oppressive, brutalist structures are now celebrated for their honesty and muscularity. Architects like David Chipperfield are 'finding the soul in the stone.'";
  }

  // Help and navigation
  if (lowerMessage.includes('help') || lowerMessage.includes('what can you')) {
    return "I can help you explore our design archives. Ask about specific topics like architecture, interiors, sustainability, technology, or product design. I can also provide context on stories in our current edition.";
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Welcome to The Design Times. I'm here to help you navigate our coverage of architecture, design, and creative culture. What would you like to explore today?";
  }

  // Default response
  return "That's an interesting question. While I don't have specific coverage on that topic in our current edition, I'd recommend browsing our sections—Architecture, Interiors, Objects, Tech, and Green—for related stories. You can also use the search feature to find specific topics.";
};

// Main function to send message - uses API if available, otherwise local fallback
export const sendMessageToGemini = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

    // If no API key, use local fallback
    if (!apiKey) {
      // Simulate a brief delay for natural feel
      await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 400));
      return getLocalResponse(newMessage);
    }

    // Use AI API
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    return response.text || "The editorial board is unable to comment at this time.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback to local responses on error
    return getLocalResponse(newMessage);
  }
};
