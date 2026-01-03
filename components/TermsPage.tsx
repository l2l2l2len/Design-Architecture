/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface TermsPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack, onNavigate }) => {
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
          <span className="font-serif text-xs italic text-gray-400">Legal</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-black mb-4">Terms of Service</h1>
          <p className="font-serif text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-[#f5f5f0] border-l-4 border-black p-6 mb-8">
            <p className="font-serif text-base text-gray-700 m-0">
              Welcome to The Design Times. By using our platform, you agree to these terms. Please read them carefully. If you don't agree with these terms, please do not use our service.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">1. Acceptance of Terms</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              By accessing and using The Design Times ("the Service"), you accept and agree to be bound by these Terms of Service. The Service is provided free of charge and is intended for personal, non-commercial use.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">2. Description of Service</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              The Design Times is a free, open platform that aggregates and curates design and architecture news. Our service includes:
            </p>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li>Access to curated design and architecture articles</li>
              <li>Personal reading list functionality (stored locally in your browser)</li>
              <li>Upvoting and community engagement features</li>
              <li>Project submission capabilities</li>
              <li>Search and filtering tools</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">3. No Account Required</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              The Design Times does not require user registration or account creation. All personalization features (reading lists, upvotes) are stored locally in your browser using localStorage technology. This means your data remains on your device and is not transmitted to our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">4. User Conduct</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              When using our Service, you agree to:
            </p>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt the Service</li>
              <li>Not attempt to access data not intended for you</li>
              <li>Respect intellectual property rights of content creators</li>
              <li>Submit only accurate information when using the project submission feature</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">5. Content and Intellectual Property</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              The Design Times aggregates content from various sources. Article content, images, and associated materials remain the intellectual property of their respective publishers (Dezeen, ArchDaily, Wallpaper*, etc.). We provide links and summaries for informational purposes.
            </p>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              User-submitted projects remain the intellectual property of the submitter. By submitting a project, you grant The Design Times a non-exclusive license to display and feature your submission on our platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">6. Local Data Storage</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed mb-4">
              The Service uses your browser's localStorage to save:
            </p>
            <ul className="font-serif text-base text-gray-700 space-y-2 list-disc pl-6">
              <li>Your reading list/saved articles</li>
              <li>Your upvote history</li>
              <li>Newsletter subscription status</li>
            </ul>
            <p className="font-serif text-base text-gray-700 leading-relaxed mt-4">
              This data is stored only on your device. Clearing your browser data will remove this information. We recommend exporting your reading list periodically if you wish to preserve it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">7. Disclaimer of Warranties</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              The Service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free. We are not responsible for the accuracy, completeness, or reliability of any content accessed through the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">8. Limitation of Liability</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, The Design Times shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service, including but not limited to loss of data stored in localStorage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">9. Changes to Terms</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">10. Contact</h2>
            <p className="font-serif text-base text-gray-700 leading-relaxed">
              If you have questions about these Terms, please contact us through our{' '}
              <button
                onClick={() => onNavigate('contact')}
                className="text-black underline hover:text-[#a85226] transition-colors"
              >
                Contact page
              </button>.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="font-serif text-sm text-gray-500 text-center">
              © 2025 The Design Times. All rights reserved.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TermsPage;
