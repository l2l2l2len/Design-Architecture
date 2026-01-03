/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface FAQPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC<FAQPageProps> = ({ onBack, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is The Design Times?',
      answer: 'The Design Times is a free, open platform that curates the most significant news and stories from the world of architecture, interior design, product innovation, and creative culture. We aggregate content from leading publications like Dezeen, ArchDaily, Wallpaper*, and more, presenting it in a beautifully designed, newspaper-inspired reading experience.'
    },
    {
      category: 'General',
      question: 'Is The Design Times free to use?',
      answer: 'Yes, completely free! We believe design knowledge should be accessible to everyone. There are no subscriptions, paywalls, or premium tiers. All features are available to all users without cost.'
    },
    {
      category: 'General',
      question: 'Do I need to create an account?',
      answer: 'No account is required. The Design Times is designed as a plug-and-play solution. You can start reading, saving articles, and upvoting immediately without any registration. Your preferences and reading list are stored locally in your browser.'
    },
    {
      category: 'Features',
      question: 'How do I save articles to read later?',
      answer: 'Click the bookmark icon on any article card or article page to save it to your reading list. Access your saved articles by clicking "Saved" in the navigation bar. Your reading list is stored in your browser\'s local storage.'
    },
    {
      category: 'Features',
      question: 'What does upvoting do?',
      answer: 'Upvoting helps surface the most interesting and relevant stories for the community. Articles with more upvotes appear higher in the feed. Your upvotes are stored locally and help personalize the content ranking.'
    },
    {
      category: 'Features',
      question: 'Can I export my reading list?',
      answer: 'Yes! Open your reading list by clicking "Saved" and then click "Export BibTeX" to download your saved articles as a BibTeX file. This is useful for academic citations or keeping a backup of your curated collection.'
    },
    {
      category: 'Features',
      question: 'How does the search work?',
      answer: 'The search bar filters articles by title, publisher, content, and category. Type any keyword and results update instantly. You can also filter by year using the timeframe selector.'
    },
    {
      category: 'Features',
      question: 'What are the article categories?',
      answer: 'Articles are organized into seven categories: Front Page (featured stories), Architecture, Interiors, Objects (product design), Tech, Green (sustainability), and Culture. Use the navigation bar to browse by category.'
    },
    {
      category: 'Submissions',
      question: 'Can I submit my own project?',
      answer: 'Yes! If you\'re an architect or designer, click "Submit Project" in the navigation bar. Fill out the form with your project details including name, description, images link, and category. Submissions appear in the feed after completion.'
    },
    {
      category: 'Submissions',
      question: 'What are the submission guidelines?',
      answer: 'Submissions should include: a clear project name, your studio/designer name, a link to high-quality images or portfolio, the completion year, relevant category, and a description of at least 50 characters explaining the concept, materials, and significance of the work.'
    },
    {
      category: 'Data & Privacy',
      question: 'Where is my data stored?',
      answer: 'All your personal data (reading list, upvotes, preferences) is stored locally in your browser using localStorage. This means your data never leaves your device and is not sent to our servers. We prioritize your privacy.'
    },
    {
      category: 'Data & Privacy',
      question: 'What happens if I clear my browser data?',
      answer: 'Clearing your browser data will remove your locally stored reading list, upvotes, and preferences. We recommend periodically exporting your reading list as a BibTeX file if you want to preserve your saved articles.'
    },
    {
      category: 'Data & Privacy',
      question: 'Do you track my browsing behavior?',
      answer: 'No. We do not use analytics, tracking pixels, or third-party cookies to monitor your behavior. Your reading habits are private. See our Privacy Policy for full details.'
    },
    {
      category: 'Technical',
      question: 'What is the AI Assistant?',
      answer: 'The AI Assistant (Nexus) is an optional feature that uses Google\'s Gemini AI to answer questions about design, architecture, and the articles in our feed. When available, click the "Ai" button in the bottom-right corner to access it.'
    },
    {
      category: 'Technical',
      question: 'The AI Assistant isn\'t working. Why?',
      answer: 'The AI Assistant requires an API key to function. If you\'re using the public version of The Design Times, this feature may not be available. You can still use all other features of the platform without it.'
    },
    {
      category: 'Technical',
      question: 'Which browsers are supported?',
      answer: 'The Design Times works on all modern browsers including Chrome, Firefox, Safari, Edge, and their mobile versions. We recommend using the latest browser version for the best experience.'
    },
    {
      category: 'Technical',
      question: 'Is there a mobile app?',
      answer: 'Currently, The Design Times is a web application optimized for mobile browsers. You can add it to your home screen on iOS or Android for an app-like experience. A dedicated mobile app may be developed in the future.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

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
          <span className="font-serif text-xs italic text-gray-400">Help</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans-accent text-xs font-bold uppercase tracking-widest text-[#a85226] mb-4 block">Help Center</span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h1>
          <p className="font-serif text-lg text-gray-600 max-w-lg mx-auto">
            Find answers to common questions about using The Design Times.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-sans-accent text-xs font-bold uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <span className="font-sans-accent text-[10px] font-bold uppercase tracking-widest text-[#a85226] block mb-1">
                    {faq.category}
                  </span>
                  <h3 className="font-headline text-lg font-bold text-black pr-4">{faq.question}</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="font-serif text-base text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center bg-[#f5f5f0] p-12 border border-gray-200">
          <h2 className="font-headline text-2xl font-bold text-black mb-4">Still Have Questions?</h2>
          <p className="font-serif text-gray-600 mb-6">
            Can't find what you're looking for? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="px-8 py-4 border border-black text-black font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
