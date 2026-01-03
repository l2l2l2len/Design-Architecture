/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AboutPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[900px] mx-auto px-6">

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
          <span className="font-serif text-xs italic text-gray-400">About Us</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans-accent text-xs font-bold uppercase tracking-widest text-[#a85226] mb-4 block">Est. 2025</span>
          <h1 className="font-masthead text-5xl md:text-7xl text-black mb-6">The Design Times</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="font-headline text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            The Global Authority on Architecture, Design & Creative Culture
          </p>
        </div>

        {/* Mission */}
        <article className="prose prose-lg max-w-none mb-16">
          <div className="bg-[#f5f5f0] border-l-4 border-black p-8 mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="font-serif text-lg leading-relaxed text-gray-800">
              The Design Times is a free, open platform dedicated to curating and celebrating the most significant developments in architecture, interior design, product innovation, and creative culture. We believe that great design should be accessible to everyone—that's why we've built a completely free tool with no registration required.
            </p>
          </div>

          <h3 className="font-headline text-xl font-bold mb-4 text-black">What We Do</h3>
          <p className="font-serif text-base leading-relaxed text-gray-700 mb-6">
            We aggregate, curate, and present design news from the world's most respected publications—Dezeen, ArchDaily, Wallpaper*, Domus, and more—in a single, beautifully designed reading experience inspired by the great newspapers of the past.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="border border-gray-200 p-6 bg-white">
              <h4 className="font-headline text-lg font-bold mb-3 text-black">Curated Coverage</h4>
              <p className="font-serif text-sm text-gray-600 leading-relaxed">
                Our editorial team hand-selects stories that matter—from groundbreaking architectural projects to emerging design trends, sustainable innovations, and cultural commentary.
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h4 className="font-headline text-lg font-bold mb-3 text-black">Personal Library</h4>
              <p className="font-serif text-sm text-gray-600 leading-relaxed">
                Save articles to your personal reading list, organized and accessible anytime. Your library is stored locally in your browser—no account needed.
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h4 className="font-headline text-lg font-bold mb-3 text-black">Community Voice</h4>
              <p className="font-serif text-sm text-gray-600 leading-relaxed">
                Upvote stories that resonate with you and help surface the most impactful design news for the community.
              </p>
            </div>
            <div className="border border-gray-200 p-6 bg-white">
              <h4 className="font-headline text-lg font-bold mb-3 text-black">Submit Your Work</h4>
              <p className="font-serif text-sm text-gray-600 leading-relaxed">
                Architects and designers can submit projects for consideration. Share your work with a global audience of design enthusiasts.
              </p>
            </div>
          </div>

          <h3 className="font-headline text-xl font-bold mb-4 text-black">Our Philosophy</h3>
          <p className="font-serif text-base leading-relaxed text-gray-700 mb-6">
            We believe in the democratization of design knowledge. Great architecture and thoughtful design have the power to improve lives, inspire communities, and shape a more sustainable future. By making design journalism accessible and free, we aim to foster a more design-literate society.
          </p>

          <blockquote className="border-l-4 border-[#a85226] pl-6 my-8 italic font-serif text-xl text-gray-700">
            "Design is not just what it looks like and feels like. Design is how it works."
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Steve Jobs</footer>
          </blockquote>

          <h3 className="font-headline text-xl font-bold mb-4 text-black">Why Free & Open?</h3>
          <p className="font-serif text-base leading-relaxed text-gray-700 mb-6">
            We've intentionally designed The Design Times as a plug-and-play solution. No logins, no paywalls, no tracking. Your reading list and preferences are stored locally on your device. We respect your privacy and believe that access to design knowledge shouldn't come with barriers.
          </p>
        </article>

        {/* Team Section */}
        <div className="border-t border-black pt-12 mb-12">
          <h3 className="font-headline text-2xl font-bold mb-8 text-center text-black">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h4 className="font-headline text-lg font-bold mb-2">Accessibility</h4>
              <p className="font-serif text-sm text-gray-600">Design knowledge for everyone, everywhere, always free.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h4 className="font-headline text-lg font-bold mb-2">Curation</h4>
              <p className="font-serif text-sm text-gray-600">Quality over quantity. Every story is selected with care.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h4 className="font-headline text-lg font-bold mb-2">Privacy</h4>
              <p className="font-serif text-sm text-gray-600">Your data stays on your device. No tracking, no accounts.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-gray-200 pt-12">
          <p className="font-serif text-gray-600 mb-6">Questions? Want to contribute?</p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
