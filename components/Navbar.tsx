/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onCategoryClick: (category: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  activeCategory?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onCategoryClick, cartCount, onOpenCart, activeCategory }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  const navItems = ['Front Page', 'Architecture', 'Interiors', 'Objects', 'Tech', 'Green', 'Culture'];

  return (
    <nav className="bg-[#fdfbf7] border-b-4 border-[#1c1917] pt-4 pb-0 px-4 md:px-8 flex flex-col items-center relative sticky top-0 z-[50]">
      
      {/* Top Bar: Date & Design Ticker */}
      <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-serif border-b border-[#1c1917] pb-2 mb-4 uppercase tracking-widest text-[#57534e]">
        <span>{currentDate}</span>
        <span className="hidden lg:inline text-[#1c1917] font-bold">Salone del Mobile: Day 3 <span className="text-amber-700">●</span> &nbsp;|&nbsp; Pritzker Prize: Announced <span className="text-amber-700">●</span> &nbsp;|&nbsp; Venice Biennale: Preview <span className="text-amber-700">●</span></span>
        <span>Vol. CDXIV</span>
      </div>

      {/* Mobile Header Controls */}
      <div className="w-full flex md:hidden justify-between items-center mb-4">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#1c1917]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <div className="font-masthead text-3xl text-[#1c1917]">The Design Times</div>
        <button onClick={onOpenCart} className="relative text-[#1c1917]">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
             </svg>
             {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#ca8a04] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>}
        </button>
      </div>

      {/* Masthead (Desktop) */}
      <div className="mb-4 text-center hidden md:block">
        <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                onNavClick(e, ''); 
            }}
            className="font-masthead text-5xl md:text-7xl lg:text-8xl text-[#1c1917] hover:opacity-80 transition-opacity block leading-none px-4"
        >
            {BRAND_NAME}
        </a>
        <div className="mt-2 text-[10px] uppercase tracking-[0.3em] font-sans-accent font-bold text-[#a85226]">
            The Global Authority on Design & Architecture
        </div>
      </div>
      
      {/* Navigation Links (Desktop) */}
      <div className="w-full max-w-5xl border-t border-[#1c1917] border-b-2 border-[#1c1917] py-2 mb-1 hidden md:flex justify-center gap-6 lg:gap-10">
          {navItems.map((item) => (
              <button 
                key={item}
                className={`font-headline text-xs lg:text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 whitespace-nowrap transition-colors ${activeCategory === item ? 'text-[#1c1917] underline' : 'text-[#57534e]'}`}
                onClick={() => onCategoryClick(item)}
              >
                  {item}
              </button>
          ))}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-[#fdfbf7] border-t border-[#1c1917] absolute top-full left-0 shadow-xl py-4 px-4 flex flex-col gap-4 border-b-4">
               {navItems.map((item) => (
                  <button 
                    key={item}
                    className={`text-left font-headline text-lg font-bold uppercase tracking-widest ${activeCategory === item ? 'text-[#1c1917] underline' : 'text-[#57534e]'}`}
                    onClick={() => {
                        onCategoryClick(item);
                        setIsMobileMenuOpen(false);
                    }}
                  >
                      {item}
                  </button>
              ))}
              <div className="border-t border-gray-300 pt-4 mt-2">
                 <button onClick={(e) => { onNavClick(e, 'submit'); setIsMobileMenuOpen(false); }} className="block w-full text-left font-serif italic text-sm mb-2 text-[#1c1917]">Submit Project</button>
                 <button onClick={() => { onOpenCart(); setIsMobileMenuOpen(false); }} className="block w-full text-left font-serif italic text-sm text-[#1c1917]">Saved Projects ({cartCount})</button>
              </div>
          </div>
      )}

      {/* Floating Actions (Desktop) */}
      <div className="absolute right-4 top-20 lg:top-8 flex gap-3 hidden md:flex">
          <button 
            onClick={(e) => { e.preventDefault(); onOpenCart(); }}
            className="flex items-center gap-1 font-serif text-xs font-bold border border-[#1c1917] text-[#1c1917] px-3 py-1 hover:bg-[#1c1917] hover:text-[#fdfbf7] transition-colors"
          >
             <span>Saved ({cartCount})</span>
          </button>
           <button
             onClick={(e) => onNavClick(e, 'submit')}
             className="flex items-center gap-1 font-serif text-xs font-bold bg-[#1c1917] text-[#fdfbf7] border border-[#1c1917] px-3 py-1 hover:bg-[#fdfbf7] hover:text-[#1c1917] transition-colors"
           >
              Submit Project
           </button>
      </div>
    </nav>
  );
};

export default Navbar;