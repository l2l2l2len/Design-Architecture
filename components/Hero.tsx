/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface HeroProps {
  onCategoryClick?: (category: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onCategoryClick }) => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNewsletter = () => {
    // Scroll to footer newsletter section
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBriefClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
    // Scroll to products section
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        const headerOffset = 180;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleQuickSubscribe = () => {
    if (!subscribeEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribeEmail)) {
      return;
    }

    setSubscribeStatus('loading');

    try {
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(subscribeEmail.toLowerCase())) {
        subscribers.push(subscribeEmail.toLowerCase());
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        localStorage.setItem('newsletter_subscribed', 'true');
      }
      setTimeout(() => {
        setSubscribeStatus('success');
        setSubscribeEmail('');
      }, 600);
    } catch {
      setSubscribeStatus('error');
    }
  };

  // Design briefs data
  const briefs = [
    {
      category: 'Interiors',
      title: "Pantone announces 'Muted Clay' as 2026 Color of the Year.",
      description: 'A shift towards grounding, earthy hues.'
    },
    {
      category: 'Objects',
      title: 'Teenage Engineering reimagines the radio.',
      description: 'The OB-4 Magic Radio gets a transparent update.'
    },
    {
      category: 'Culture',
      title: 'MoMA acquires emoji set for permanent collection.',
      description: 'Design as cultural artifact.'
    }
  ];

  return (
    <section className="bg-[#fdfbf7] text-[#1c1917] pt-12 pb-12 px-4 md:px-6 border-b-4 border-[#1c1917]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Main Lead Story */}
        <div className="lg:col-span-8 lg:border-r border-gray-300 pr-0 lg:pr-12">
          <div className="flex justify-between items-center border-t-2 border-[#1c1917] pt-1 mb-2">
            <span className="font-sans-accent text-[10px] font-bold uppercase tracking-widest text-[#a85226]">Feature Story</span>
            <span className="font-serif text-xs italic text-gray-500">London Bureau</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 text-[#1c1917] tracking-tight">
            The Rebirth of <br className="hidden sm:block" /> Brutalism
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <p className="font-serif text-base md:text-lg leading-relaxed first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] md:first-letter:mt-[-10px] text-[#44403c]">
                Once derided as concrete monstrosities, brutalist structures are being celebrated and adaptively reused by a new generation of architects. From London's South Bank to Belgrade's housing blocks, raw concrete is the new marble.
              </p>
            </div>
            <div>
              <p className="font-serif text-sm leading-relaxed text-gray-700">
                "We are finding the soul in the stone," says architect David Chipperfield. "These buildings have a muscularity and honesty that modern glass towers lack."
              </p>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, 'products')}
                className="inline-block mt-4 font-sans-accent text-xs font-bold uppercase tracking-widest border-b border-[#1c1917] pb-1 hover:text-[#a85226] text-[#1c1917] transition-colors min-h-[44px] flex items-center"
              >
                Read Full Report →
              </a>
            </div>
          </div>

          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden relative border border-[#1c1917] bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=1200"
              alt="The Barbican Centre, London - An iconic example of brutalist architecture featuring bold concrete forms and geometric patterns"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 bg-[#fdfbf7] border-t border-r border-[#1c1917] px-3 py-2 text-[10px] font-sans-accent uppercase tracking-widest text-[#1c1917]">
              Fig 1. The Barbican Centre, London.
            </div>
          </div>
        </div>

        {/* Side Column / Briefs */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="border-t-2 border-[#1c1917] pt-1">
            <h3 className="font-headline text-2xl font-bold mb-4 text-[#1c1917]">Design Briefs</h3>
            <ul className="space-y-4 md:space-y-6">
              {briefs.map((brief, index) => (
                <li
                  key={index}
                  className={`pb-4 md:pb-6 ${index < briefs.length - 1 ? 'border-b border-gray-300' : ''}`}
                >
                  <button
                    onClick={() => handleBriefClick(brief.category)}
                    className="text-left w-full group"
                  >
                    <span className="block font-sans-accent text-[10px] font-bold text-[#a85226] mb-1 uppercase">
                      {brief.category}
                    </span>
                    <h4 className="font-serif text-base md:text-lg font-bold leading-tight mb-2 group-hover:underline text-[#44403c] transition-colors">
                      {brief.title}
                    </h4>
                    <p className="font-serif text-xs text-gray-600">{brief.description}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#e7e5e4] p-6 border border-[#1c1917]">
            <span className="font-masthead text-2xl block mb-2 text-[#1c1917] text-center">The Design Times</span>
            <p className="font-serif text-xs italic mb-4 text-[#44403c] text-center">Subscribe for the Weekly Trend Report.</p>

            {subscribeStatus === 'success' ? (
              <div className="text-center py-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600 mx-auto mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="font-serif text-sm text-green-600">You're subscribed!</p>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full bg-white border border-[#1c1917] py-3 px-3 text-sm font-serif outline-none focus:ring-2 focus:ring-[#1c1917] focus:ring-opacity-20"
                />
                <button
                  onClick={handleQuickSubscribe}
                  disabled={subscribeStatus === 'loading'}
                  className="w-full bg-[#1c1917] text-white font-sans-accent text-xs font-bold uppercase py-3 hover:bg-[#44403c] transition-colors disabled:opacity-50 min-h-[48px]"
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </div>
            )}

            <button
              onClick={handleScrollToNewsletter}
              className="w-full mt-3 text-center font-serif text-xs text-gray-500 hover:text-black underline transition-colors"
            >
              Learn more about The Blueprint
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
