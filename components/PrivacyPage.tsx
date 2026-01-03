/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack, onNavigate }) => {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Navigation */}
        <div className="mb-12 flex justify-between items-center border-b border-black pb-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Front Page
          </button>
          <span className="font-serif text-xs italic text-gray-400">Privacy</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="font-serif text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        {/* Privacy Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-50 border border-green-200 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-headline text-sm font-bold mb-1 text-black">No Tracking</h3>
            <p className="font-serif text-xs text-gray-600">We don't track your behavior</p>
          </div>
          <div className="bg-green-50 border border-green-200 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-headline text-sm font-bold mb-1 text-black">No Accounts</h3>
            <p className="font-serif text-xs text-gray-600">No registration required</p>
          </div>
          <div className="bg-green-50 border border-green-200 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-headline text-sm font-bold mb-1 text-black">Local Storage</h3>
            <p className="font-serif text-xs text-gray-600">Data stays on your device</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-[#f5f5f0] border-l-4 border-black p-6 mb-8">
            <p className="font-serif text-base text-gray-700 m-0">
              Your privacy is fundamental to our mission. The Design Times is designed to respect your privacy by default. We've built a platform that gives you full control over your data.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Our Privacy Philosophy</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              Unlike most websites, The Design Times doesn't require you to create an account, provide personal information, or consent to tracking. We believe you should be able to read about design and architecture without surrendering your privacy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Information We Don't Collect</h2>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li>Personal identification information (name, email, phone)</li>
              <li>Browsing history or reading habits</li>
              <li>Device fingerprints or unique identifiers</li>
              <li>Location data</li>
              <li>Third-party cookies or tracking pixels</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Local Data Storage</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              To provide a personalized experience, we use your browser's localStorage feature. This data is stored only on your device and is never transmitted to our servers. Local storage is used for:
            </p>
            <div className="bg-white border border-gray-200 p-6 space-y-4">
              <div>
                <h4 className="font-sans-accent text-sm font-bold text-black mb-1">Reading List</h4>
                <p className="font-serif text-sm text-gray-600">Articles you save are stored locally so you can access them later.</p>
              </div>
              <div>
                <h4 className="font-sans-accent text-sm font-bold text-black mb-1">Upvotes</h4>
                <p className="font-serif text-sm text-gray-600">Your upvote history is stored to prevent duplicate voting and show your preferences.</p>
              </div>
              <div>
                <h4 className="font-sans-accent text-sm font-bold text-black mb-1">Newsletter Preference</h4>
                <p className="font-serif text-sm text-gray-600">If you subscribe to our newsletter, your subscription status is stored locally.</p>
              </div>
              <div>
                <h4 className="font-sans-accent text-sm font-bold text-black mb-1">User Submissions</h4>
                <p className="font-serif text-sm text-gray-600">Projects you submit are stored locally and displayed in the feed.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Managing Your Data</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              You have complete control over your locally stored data:
            </p>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li><strong>View:</strong> Access your reading list through the "Saved" button</li>
              <li><strong>Export:</strong> Download your reading list as a BibTeX file for citations</li>
              <li><strong>Delete:</strong> Clear your browser's localStorage to remove all data, or use your browser's developer tools to selectively remove items</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Third-Party Services</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              We use minimal third-party services:
            </p>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li><strong>Google Fonts:</strong> We load fonts from Google Fonts for typography. Google may collect standard web log data.</li>
              <li><strong>Unsplash:</strong> Article images are loaded from Unsplash. Their privacy policy applies to image loading.</li>
              <li><strong>Tailwind CSS CDN:</strong> Styling is loaded from a CDN. No personal data is transmitted.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">AI Assistant</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              If you use the AI Assistant feature (when available), your questions are sent to Google's Gemini API for processing. These queries are not stored by The Design Times. Please refer to Google's AI privacy policy for information about how they handle queries.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Children's Privacy</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              The Design Times does not knowingly collect any personal information from children. Since we don't require accounts or collect personal data, this is not typically a concern. The content is generally suitable for all ages interested in design and architecture.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Changes to This Policy</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Since we don't collect email addresses, we cannot notify you of changes directly. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Contact Us</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please{' '}
              <button
                onClick={() => onNavigate('contact')}
                className="text-black underline hover:text-[#a85226] transition-colors"
              >
                contact us
              </button>.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="font-serif text-sm text-gray-500 text-center">
              © 2025 The Design Times. Your privacy matters.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPage;
