/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PAPERS } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement> | null, targetId: string) => void;
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, onNavigate }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'already'>('idle');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setSubscribeStatus('loading');

    // Check if already subscribed
    try {
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (subscribers.includes(email.toLowerCase())) {
        setSubscribeStatus('already');
        return;
      }

      // Add to localStorage
      subscribers.push(email.toLowerCase());
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      localStorage.setItem('newsletter_subscribed', 'true');

      setTimeout(() => {
        setSubscribeStatus('success');
        setEmail('');
      }, 800);
    } catch {
      setSubscribeStatus('error');
    }
  };

  const handleRSS = () => {
    // Generate real RSS with actual articles
    const items = PAPERS.slice(0, 20).map(paper => `
    <item>
      <title><![CDATA[${paper.title}]]></title>
      <description><![CDATA[${paper.abstractPreview}]]></description>
      <author>${paper.authors[0]}</author>
      <category>${paper.category}</category>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid isPermaLink="false">${paper.id}</guid>
    </item>`).join('');

    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>The Design Times</title>
  <description>Global Architecture & Design News - The leading source for architecture, interior design, product innovation, and creative culture.</description>
  <link>https://thedesigntimes.com</link>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <pubDate>${new Date().toUTCString()}</pubDate>
  <ttl>60</ttl>
  <image>
    <url>https://thedesigntimes.com/logo.png</url>
    <title>The Design Times</title>
    <link>https://thedesigntimes.com</link>
  </image>
  ${items}
</channel>
</rss>`;

    const blob = new Blob([rssContent], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'thedesigntimes-feed.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getSubscribeMessage = () => {
    switch (subscribeStatus) {
      case 'success':
        return { text: 'Welcome! You\'re now subscribed.', color: 'text-green-600' };
      case 'already':
        return { text: 'You\'re already subscribed!', color: 'text-amber-600' };
      case 'error':
        return { text: 'Something went wrong. Please try again.', color: 'text-red-600' };
      default:
        return null;
    }
  };

  const message = getSubscribeMessage();

  return (
    <footer className="bg-[#fdfbf7] pt-16 pb-12 px-6 text-[#1c1917] font-serif border-t-4 double-border-bottom border-[#1c1917] mt-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <h4 className="text-3xl md:text-4xl font-masthead text-[#1c1917] mb-4">The Design Times</h4>
            <p className="font-serif text-sm italic text-[#44403c] leading-relaxed mb-4">
              "Documenting the built environment and the objects that define our lives."
            </p>
            <p className="font-sans-accent text-[10px] uppercase tracking-widest text-[#78716c]">
              Est. 2025 • Free & Open
            </p>
          </div>

          {/* Sections Column */}
          <div>
            <h5 className="font-headline text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 border-b border-[#1c1917] pb-2">
              Sections
            </h5>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('home')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Front Page
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(null, '')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(null, '')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick(null, '')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Objects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('submit')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Submit Project
                </button>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h5 className="font-headline text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 border-b border-[#1c1917] pb-2">
              About
            </h5>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('about')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={handleRSS} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  RSS Feed
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h5 className="font-headline text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-4 border-b border-[#1c1917] pb-2">
              Legal
            </h5>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('terms')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="font-serif text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>

            <h5 className="font-headline text-sm font-bold uppercase tracking-widest text-[#1c1917] mt-8 mb-4 border-b border-[#1c1917] pb-2">
              Data
            </h5>
            <p className="font-serif text-xs text-gray-500 leading-relaxed">
              Your data is stored locally in your browser. No account required. No tracking.
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-[#1c1917] py-12 mb-12">
          <div className="max-w-xl mx-auto text-center">
            <h5 className="font-headline text-2xl font-bold mb-2 uppercase tracking-tight text-[#1c1917]">The Blueprint</h5>
            <p className="text-sm italic text-gray-600 mb-6">Curated design highlights, sent weekly. Completely free.</p>

            {message ? (
              <div className={`py-4 ${message.color} font-serif text-base`}>
                {message.text}
                {subscribeStatus !== 'error' && (
                  <button
                    onClick={() => setSubscribeStatus('idle')}
                    className="block mx-auto mt-3 text-xs text-gray-500 hover:text-black underline"
                  >
                    Subscribe another email
                  </button>
                )}
              </div>
            ) : (
              <div>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                    disabled={subscribeStatus === 'loading'}
                    className="flex-1 bg-white border border-[#1c1917] py-3 px-4 outline-none placeholder-gray-400 text-[#1c1917] font-serif text-sm focus:ring-2 focus:ring-[#1c1917] focus:ring-opacity-20"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={subscribeStatus === 'loading'}
                    className="px-6 py-3 bg-[#1c1917] text-white font-headline text-xs font-bold uppercase tracking-widest hover:bg-[#44403c] transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-2">{emailError}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-sans-accent text-[#78716c] mb-1">
              London • New York • Copenhagen
            </p>
            <p className="text-[9px] text-[#78716c] uppercase tracking-widest">
              © 2025 The Design Times. All Rights Reserved.
            </p>
          </div>

          <div className="text-center">
            <span className="text-[9px] uppercase tracking-widest text-gray-400 block mb-1">Designed and Developed by</span>
            <span className="font-headline text-sm font-bold text-[#1c1917]">Gregorious Creative Studios</span>
          </div>

          <div className="font-serif text-sm italic text-[#1c1917]">
            Baked with Love from NYC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;