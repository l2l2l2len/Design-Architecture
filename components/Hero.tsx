/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fdfbf7] text-[#1c1917] pt-12 pb-12 px-6 border-b-4 border-[#1c1917]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Lead Story */}
        <div className="lg:col-span-8 border-r border-gray-300 pr-0 lg:pr-12">
            <div className="flex justify-between items-center border-t-2 border-[#1c1917] pt-1 mb-2">
                <span className="font-sans-accent text-[10px] font-bold uppercase tracking-widest text-[#a85226]">Feature Story</span>
                <span className="font-serif text-xs italic text-gray-500">London Bureau</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 text-[#1c1917] tracking-tight">
                The Rebirth of <br/> Brutalism
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] text-[#44403c]">
                        Once derided as concrete monstrosities, brutalist structures are being celebrated and adaptively reused by a new generation of architects. From London's South Bank to Belgrade's housing blocks, raw concrete is the new marble.
                    </p>
                </div>
                <div>
                     <p className="font-serif text-sm leading-relaxed text-gray-700">
                        "We are finding the soul in the stone," says architect David Chipperfield. "These buildings have a muscularity and honesty that modern glass towers lack."
                     </p>
                     <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="inline-block mt-4 font-sans-accent text-xs font-bold uppercase tracking-widest border-b border-[#1c1917] pb-1 hover:text-[#a85226] text-[#1c1917]">
                        Read Full Report →
                     </a>
                </div>
            </div>

            <div className="w-full h-[400px] overflow-hidden relative border border-[#1c1917] bg-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=1200" 
                    alt="Brutalist Architecture" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute bottom-0 left-0 bg-[#fdfbf7] border-t border-r border-[#1c1917] px-4 py-2 text-[10px] font-sans-accent uppercase tracking-widest text-[#1c1917]">
                    Fig 1. The Barbican Centre, London.
                 </div>
            </div>
        </div>

        {/* Side Column / Briefs */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="border-t-2 border-[#1c1917] pt-1">
                 <h3 className="font-headline text-2xl font-bold mb-4 text-[#1c1917]">Design Briefs</h3>
                 <ul className="space-y-6">
                    <li className="pb-6 border-b border-gray-300">
                        <span className="block font-sans-accent text-[10px] font-bold text-[#a85226] mb-1">INTERIORS</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer text-[#44403c]">Pantone announces 'Muted Clay' as 2026 Color of the Year.</h4>
                        <p className="font-serif text-xs text-gray-600">A shift towards grounding, earthy hues.</p>
                    </li>
                    <li className="pb-6 border-b border-gray-300">
                        <span className="block font-sans-accent text-[10px] font-bold text-[#a85226] mb-1">PRODUCT</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer text-[#44403c]">Teenage Engineering reimagines the radio.</h4>
                        <p className="font-serif text-xs text-gray-600">The OB-4 Magic Radio gets a transparent update.</p>
                    </li>
                    <li className="pb-6">
                        <span className="block font-sans-accent text-[10px] font-bold text-[#a85226] mb-1">CULTURE</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer text-[#44403c]">MoMA acquires emoji set for permanent collection.</h4>
                    </li>
                 </ul>
            </div>

            <div className="bg-[#e7e5e4] p-6 border border-[#1c1917] text-center">
                <span className="font-masthead text-2xl block mb-2 text-[#1c1917]">The Design Times</span>
                <p className="font-serif text-xs italic mb-4 text-[#44403c]">Subscribe for the Weekly Trend Report.</p>
                <button className="w-full bg-[#1c1917] text-white font-sans-accent text-xs font-bold uppercase py-3 hover:bg-[#44403c]">
                    Subscribe Now
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;