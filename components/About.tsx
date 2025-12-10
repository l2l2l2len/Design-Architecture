/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white border-t border-gray-200">
      
      {/* Introduction */}
      <div className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1c1917] leading-tight mb-8">
            Form. Function. <br/> Future.
        </h2>
        
        <div className="max-w-2xl text-lg md:text-xl text-[#44403c] font-light leading-relaxed space-y-8">
            <p>
            The Design Times is dedicated to the architects, designers, and visionaries shaping our physical world. We document the evolution of the built environment.
            </p>
            <p>
            From the scale of a city to the curve of a chair, we believe good design is the ultimate expression of human optimism.
            </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#fdfbf7] border-b md:border-b-0 md:border-r border-gray-200">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85226] mb-6">Innovation</span>
           <h3 className="text-3xl font-serif mb-6 text-[#1c1917] leading-tight">
             Material Truth.
           </h3>
           <p className="text-[#44403c] font-light leading-relaxed max-w-sm">
             We champion sustainable innovation and the honest use of materials, whether it's ancient stone or cutting-edge bioplastics.
           </p>
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a85226] mb-6">Aesthetics</span>
           <h3 className="text-3xl font-serif mb-6 text-[#1c1917] leading-tight">
             Visual Clarity.
           </h3>
           <p className="text-[#44403c] font-light leading-relaxed max-w-sm">
             Our coverage is as curated as a gallery. We believe in the power of visual storytelling to communicate complex architectural ideas.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;