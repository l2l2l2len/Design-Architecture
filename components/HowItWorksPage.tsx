/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HowItWorksPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack, onNavigate }) => {
  const steps = [
    {
      number: '01',
      title: 'Browse & Discover',
      description: 'Explore curated design and architecture news from the world\'s leading publications. Use categories to filter by Architecture, Interiors, Objects, Tech, Green, or Culture.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Search & Filter',
      description: 'Use the search bar to find specific topics, architects, or projects. Filter by year to explore historical or recent developments in design.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Save to Your Library',
      description: 'Click the bookmark icon to save articles to your personal reading list. Your library is stored locally in your browser—no account needed.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Upvote & Engage',
      description: 'Support stories you find valuable by upvoting. Higher-voted articles rise to the top, helping the community discover the best content.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Export & Share',
      description: 'Export your reading list as a BibTeX file for citations. Share articles with colleagues using the share button on any article page.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Submit Your Work',
      description: 'Are you an architect or designer? Submit your projects for consideration. Share your work with a global community of design enthusiasts.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )
    }
  ];

  const features = [
    {
      title: 'No Account Required',
      description: 'Start using immediately without registration or login.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Completely Free',
      description: 'All features are free with no subscriptions or paywalls.',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Privacy First',
      description: 'Your data stays on your device. No tracking or analytics.',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Works Offline',
      description: 'Your reading list is stored locally and accessible anytime.',
      color: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">

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
          <span className="font-serif text-xs italic text-gray-400">Guide</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans-accent text-xs font-bold uppercase tracking-widest text-[#a85226] mb-4 block">Getting Started</span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-black mb-6">How It Works</h1>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Design Times is built for simplicity. Start reading in seconds with no setup required.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {features.map((feature, index) => (
            <div key={index} className={`p-6 border ${feature.color} text-center`}>
              <h3 className="font-headline text-sm font-bold text-black mb-2">{feature.title}</h3>
              <p className="font-serif text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 py-12 ${
                index !== steps.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {/* Number */}
              <div className="md:w-24 flex-shrink-0">
                <span className="font-headline text-6xl font-bold text-gray-200">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h2 className="font-headline text-2xl font-bold text-black mb-3">{step.title}</h2>
                    <p className="font-serif text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Storage Info */}
        <div className="mt-20 bg-[#f5f5f0] p-8 md:p-12 border border-gray-200">
          <h2 className="font-headline text-2xl font-bold text-black mb-6 text-center">Understanding Local Storage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-sans-accent text-sm font-bold uppercase tracking-widest text-black mb-3">What Gets Saved</h3>
              <ul className="font-serif text-base text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Your saved articles (reading list)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Your upvote history</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Newsletter subscription status</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Projects you've submitted</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans-accent text-sm font-bold uppercase tracking-widest text-black mb-3">Important Notes</h3>
              <ul className="font-serif text-base text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span>Clearing browser data removes your saved items</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span>Data is specific to each browser/device</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <span>Export BibTeX regularly to backup your list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="font-headline text-2xl font-bold text-black mb-4">Ready to Explore?</h2>
          <p className="font-serif text-gray-600 mb-8">
            Start discovering the best in architecture and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBack}
              className="px-8 py-4 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Start Reading
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="px-8 py-4 border border-black text-black font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
