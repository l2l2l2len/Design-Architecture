/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Paper } from '../types';

interface ProductDetailProps {
  product: Paper;
  onBack: () => void;
  onToggleSave: (paper: Paper) => void;
  isSaved: boolean;
  onPublisherClick?: (name: string) => void;
}

// Generate contextual article body based on category and content
const generateArticleBody = (product: Paper): string[] => {
  const categoryContent: Record<string, string[]> = {
    'Front Page': [
      `This groundbreaking development marks a significant shift in how we approach the built environment. Industry experts have been closely watching these developments, recognizing the potential for transformative impact across the design and architecture sector.`,
      `The project team emphasized their commitment to sustainability and innovation throughout the development process. "We wanted to create something that would not only meet today's needs but anticipate tomorrow's challenges," explained the lead designer in a recent interview.`,
      `Critics and supporters alike acknowledge the ambitious scope of this initiative. The integration of cutting-edge technology with traditional design principles has created a new paradigm that other firms are already seeking to emulate.`,
      `As the project moves forward, stakeholders are watching closely to see how these innovations will influence broader industry practices. The implications for urban planning, environmental impact, and community engagement are significant.`
    ],
    'Architecture': [
      `The architectural community has responded with enthusiasm to this innovative approach to spatial design. The project demonstrates a sophisticated understanding of how form and function can work together to create spaces that are both aesthetically compelling and practically effective.`,
      `Material selection played a crucial role in achieving the design goals. The architects worked closely with structural engineers to push the boundaries of what's possible while maintaining safety and durability standards.`,
      `Environmental considerations were integrated from the earliest stages of the design process. The building's orientation, facade treatment, and mechanical systems all contribute to a significantly reduced carbon footprint compared to conventional construction.`,
      `Local community feedback has been incorporated throughout the development, resulting in a design that responds sensitively to its urban context while still making a bold architectural statement.`
    ],
    'Interiors': [
      `Interior designers are increasingly focused on creating spaces that support both physical and mental wellbeing. This project exemplifies that trend, with careful attention paid to lighting, acoustics, and material textures that create a calming environment.`,
      `The color palette was developed through extensive research into the psychological effects of different hues. The result is a space that feels both energizing and restful, adapting to different uses throughout the day.`,
      `Furniture selection followed a philosophy of timeless design over trendy pieces. Each element was chosen not only for its aesthetic qualities but for its durability and comfort over extended use.`,
      `Smart home technology has been integrated seamlessly into the design, allowing occupants to control lighting, climate, and media systems without visible interfaces that would detract from the carefully curated aesthetic.`
    ],
    'Objects': [
      `Product designers are constantly seeking the balance between innovation and usability. This design achieves that balance by reimagining familiar forms through the lens of contemporary manufacturing techniques and material science.`,
      `The development process involved extensive prototyping and user testing. Feedback from early adopters helped refine the ergonomics and functionality to create a product that feels intuitive from first use.`,
      `Sustainability was a key consideration in material selection and manufacturing process. The design team worked with suppliers to ensure ethical sourcing and minimal environmental impact throughout the supply chain.`,
      `The aesthetic references classic design principles while embracing modern minimalism. The result is a product that feels both timeless and contemporary, suited to a wide range of environments and use cases.`
    ],
    'Tech': [
      `Technology continues to reshape how we design, build, and inhabit our spaces. This development represents a significant step forward in the integration of digital tools with physical environments.`,
      `The implementation required close collaboration between technologists, designers, and end users. This interdisciplinary approach ensured that the technology enhances rather than complicates the user experience.`,
      `Data privacy and security were prioritized throughout the development process. The system is designed to provide functionality without compromising user information or creating surveillance concerns.`,
      `Industry analysts predict this technology will become standard in new construction within the next decade. Early adopters are already reporting significant improvements in efficiency and user satisfaction.`
    ],
    'Green': [
      `Sustainability in design is no longer optional—it's essential. This project demonstrates how environmental responsibility can be integrated into every aspect of the design and construction process.`,
      `The materials used in this project were selected for their low environmental impact, durability, and potential for recycling or biodegradation at end of life. This cradle-to-cradle thinking represents best practices in sustainable design.`,
      `Energy consumption has been reduced through a combination of passive design strategies and efficient active systems. The project is designed to exceed current sustainability standards and adapt to future requirements.`,
      `The project also addresses its broader ecological context, incorporating features that support local biodiversity and contribute to the health of the surrounding ecosystem.`
    ],
    'Culture': [
      `Design exists at the intersection of art, technology, and daily life. This cultural moment represents a significant shift in how we understand and value designed objects and spaces.`,
      `The influence of diverse cultural perspectives is evident in contemporary design practice. This work draws on traditions from multiple continents while remaining firmly rooted in its local context.`,
      `Museums and galleries are increasingly recognizing design as a critical form of cultural expression. This recognition brings new audiences and new appreciation for the designed world around us.`,
      `The democratization of design through digital tools and global communication has created new possibilities for collaboration and innovation across traditional boundaries.`
    ]
  };

  return categoryContent[product.category] || categoryContent['Front Page'];
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onToggleSave,
  isSaved,
  onPublisherClick
}) => {
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'shared'>('idle');

  const articleBody = generateArticleBody(product);

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: product.abstractPreview,
      url: window.location.href
    };

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareStatus('shared');
        setTimeout(() => setShareStatus('idle'), 2000);
        return;
      } catch {
        // User cancelled or error - fall through to copy
      }
    }

    // Fallback to clipboard copy
    try {
      const textToCopy = `${product.title}\n\n${product.abstractPreview}\n\nRead more at The Design Times`;
      await navigator.clipboard.writeText(textToCopy);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center border-b border-black pb-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Return to Front Page
          </button>
          <span className="font-serif text-xs italic text-gray-400">{product.category} Section</span>
        </div>

        {/* Article Image */}
        {product.fileUrl && (
          <div className="mb-12 border border-black overflow-hidden">
            <img
              src={product.fileUrl}
              alt={product.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
            />
            <div className="bg-[#f5f5f0] px-4 py-2 text-[10px] font-sans-accent uppercase tracking-widest text-gray-600 border-t border-black">
              Image courtesy of {product.publisher}
            </div>
          </div>
        )}

        {/* Article Header */}
        <div className="text-center mb-12">
          <span className="font-sans-accent text-xs font-bold uppercase tracking-widest text-[#a85226] mb-4 block">
            {product.category}
          </span>
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-[1.1]">
            {product.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs font-sans-accent uppercase tracking-widest text-gray-600 mb-8">
            <button
              onClick={() => onPublisherClick?.(product.publisher)}
              className="font-bold text-black border-b border-black hover:text-[#a85226] transition-colors"
            >
              {product.authors[0]}
            </button>
            <span className="hidden md:inline">•</span>
            <span>{product.publisher}</span>
            <span>•</span>
            <span>{product.publicationDate}</span>
            <span>•</span>
            <span>{product.readTime || '5 min read'}</span>
          </div>

          <div className="w-full h-px bg-black opacity-20 mb-1"></div>
          <div className="w-full h-px bg-black opacity-80 mb-12"></div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-serif max-w-none text-gray-900 leading-loose">

          {/* Lead / Abstract with Drop Cap */}
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-800 mb-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-12px] first-letter:font-headline">
            {product.abstract}
          </p>

          {/* Executive Summary */}
          {product.aiInsights && product.aiInsights.length > 0 && (
            <div className="bg-gray-100 border-y-2 border-black p-6 md:p-8 my-12 not-prose">
              <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-4">Key Insights</h3>
              <ul className="list-disc pl-5 space-y-2 font-serif text-base text-gray-700">
                {product.aiInsights.map((insight, idx) => (
                  <li key={idx}>{insight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Body */}
          {articleBody.map((paragraph, idx) => (
            <p key={idx} className="font-serif text-lg leading-relaxed text-gray-800 mb-6">
              {paragraph}
            </p>
          ))}

          {/* Why This Matters Section */}
          {product.whyMatters && (
            <div className="my-12 p-6 md:p-8 bg-[#f5f5f0] border-l-4 border-black not-prose">
              <h4 className="font-headline text-xl font-bold mb-4 text-black">Why This Matters</h4>
              <p className="font-serif text-lg text-gray-700 leading-relaxed">{product.whyMatters}</p>
            </div>
          )}

          {/* Source Attribution */}
          <div className="mt-12 pt-6 border-t border-gray-200 not-prose">
            <p className="font-sans-accent text-xs text-gray-500 uppercase tracking-widest">
              Originally published by{' '}
              <button
                onClick={() => onPublisherClick?.(product.publisher)}
                className="text-black hover:underline"
              >
                {product.publisher}
              </button>
            </p>
          </div>
        </article>

        {/* Footer Actions */}
        <div className="mt-16 pt-8 border-t border-black flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => onToggleSave(product)}
            className={`px-6 py-3 font-sans-accent text-xs font-bold uppercase tracking-widest border transition-colors w-full sm:w-auto min-h-[48px] ${isSaved ? 'bg-black text-white border-black' : 'bg-transparent border-black text-black hover:bg-gray-100'}`}
          >
            {isSaved ? '✓ Saved to Library' : 'Save to Library'}
          </button>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-black transition-colors border border-gray-300 hover:border-black min-h-[48px]"
              title="Share article"
            >
              {shareStatus === 'copied' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-sans-accent text-xs uppercase tracking-widest text-green-600">Copied!</span>
                </>
              ) : shareStatus === 'shared' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-sans-accent text-xs uppercase tracking-widest text-green-600">Shared!</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                  <span className="font-sans-accent text-xs uppercase tracking-widest">Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
