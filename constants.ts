/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Paper, JournalArticle } from './types';

export const BRAND_NAME = 'The Design Times';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'The Death of the Open Office',
    date: 'Dec 05, 2025',
    excerpt: 'How acoustic privacy is reshaping the post-pandemic workplace.',
    content: React.createElement('p', null, 'Architects are pivoting from cavernous open floors to "library-style" zones that prioritize deep work and acoustic isolation...')
  },
  {
    id: 2,
    title: 'Biomaterials in Construction',
    date: 'Dec 08, 2025',
    excerpt: 'From mycelium bricks to algae glass, the building blocks of the future are alive.',
    content: React.createElement('p', null, 'The construction industry accounts for 40% of global emissions. A new wave of bio-designers is growing buildings rather than manufacturing them...')
  }
];

// Helper to generate publisher metadata
export const getPublisherInfo = (publisher: string) => {
    const map: Record<string, { logo: string, desc: string }> = {
       "Dezeen": { logo: "DZ", desc: "Architecture and design magazine." },
       "ArchDaily": { logo: "AD", desc: "Broadcasting architecture worldwide." },
       "Wallpaper*": { logo: "W*", desc: "Design, interiors, fashion, art." },
       "Design Milk": { logo: "DM", desc: "Modern design news." },
       "Domus": { logo: "DO", desc: "Architecture and design criticism." },
       "Curbed": { logo: "CB", desc: "City, home, and design." },
       "Frame": { logo: "FR", desc: "Interior design and spatial design." },
       "Core77": { logo: "C7", desc: "Industrial design magazine." }
    };

    return map[publisher] || { 
        logo: publisher.substring(0, 2).toUpperCase(), 
        desc: "Global design authority." 
    };
};

const NEWS_DATA = [
  // --- FRONT PAGE ---
  {
    id: "fp-001",
    title: "Zaha Hadid Architects Unveil 'Floating' Civic Center",
    publisher: "Dezeen",
    year: 2025,
    field: "Front Page",
    link: "#",
    description: "The firm's latest proposal for the Hangzhou waterfront features fluid, organic forms that appear to hover above the wetlands, minimizing environmental impact while maximizing public space.",
    insights: ["Parametric design integration.", "Net-zero carbon strategy."],
    whyMatters: "Redefining civic infrastructure as ecological preservation.",
    authors: ["Tom Ravenscroft", "Editor"],
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "fp-002",
    title: "The Pritzker Prize Goes to Social Housing",
    publisher: "ArchDaily",
    year: 2025,
    field: "Front Page",
    link: "#",
    description: "In a historic move, the jury honors a collective focused on adaptive reuse and affordable housing, signaling a shift from 'starchitecture' to social responsibility.",
    insights: ["Adaptive reuse focus.", "Community-led design."],
    whyMatters: "Architecture's highest honor acknowledges the crisis of affordability.",
    authors: ["Christele Harrouk", "Managing Editor"],
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "fp-003",
    title: "Milan Design Week 2025: The Highlights",
    publisher: "Wallpaper*",
    year: 2025,
    field: "Front Page",
    link: "#",
    description: "From Hermès' brick labyrinth to Alcova's takeover of a derelict abattoir, Salone del Mobile proves that physical experience is the ultimate luxury in a digital age.",
    insights: ["Immersive installations.", "Return of brutalism."],
    whyMatters: "The bellwether for global aesthetic trends.",
    authors: ["Rosa Bertoli", "Design Editor"],
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1bad1563f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "fp-004",
    title: "Apple's New HQ is a Carbon Sink",
    publisher: "Design Milk",
    year: 2025,
    field: "Front Page",
    link: "#",
    description: "Cupertino's latest campus expansion utilizes a proprietary timber-concrete hybrid that absorbs more CO2 than it emits during construction.",
    insights: ["Mass timber innovation.", "Corporate sustainability."],
    whyMatters: "Tech giants are setting the standard for green construction.",
    authors: ["Gregory Han", "Editor"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },

  // --- ARCHITECTURE ---
  {
    id: "arc-001",
    title: "Saudi Arabia's 'The Line': Construction Update",
    publisher: "Domus",
    year: 2025,
    field: "Architecture",
    link: "#",
    description: "Satellite imagery reveals massive excavation for the controversial 170km linear city. Critics question the feasibility, while engineers tout the modular efficiencies.",
    insights: ["Mega-project logistics.", "Urban planning debate."],
    whyMatters: "Testing the limits of human engineering and urban theory.",
    authors: ["Walter Mariotti", "Editor"],
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "arc-002",
    title: "Wooden Skyscrapers: The Tokyo Torch",
    publisher: "ArchDaily",
    year: 2025,
    field: "Architecture",
    link: "#",
    description: "Japan's tallest tower will feature a seismic-resistant timber exoskeleton, blending traditional joinery with modern structural engineering.",
    insights: ["Seismic timber tech.", "Cultural heritage integration."],
    whyMatters: "Wood is re-emerging as the primary material for vertical cities.",
    authors: ["Dima Stouhi", "Editor"],
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511818966892-d556778e1378?auto=format&fit=crop&q=80&w=1200"
  },

  // --- INTERIORS ---
  {
    id: "int-001",
    title: "The Era of 'Quiet Design' is Over",
    publisher: "Frame",
    year: 2025,
    field: "Interiors",
    link: "#",
    description: "Minimalism is receding. The new wave of interiors embraces 'Maximalist Warmth'—layered textures, deep colors, and historical eclecticism.",
    insights: ["Pattern clashing.", "Color theory shifts."],
    whyMatters: "Interiors are becoming emotional landscapes, not just visual ones.",
    authors: ["Robert Thiemann", "Founder"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "int-002",
    title: "3D Printed Clay Walls",
    publisher: "Dezeen",
    year: 2025,
    field: "Interiors",
    link: "#",
    description: "Using local soil, designers are 3D printing intricate, textured interior walls that regulate humidity and require no firing.",
    insights: ["Circular manufacturing.", "Biophilic textures."],
    whyMatters: "Reducing the carbon footprint of interior fit-outs.",
    authors: ["Natasha Levy", "Editor"],
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200"
  },

  // --- OBJECTS ---
  {
    id: "obj-001",
    title: "Braun's Return to Audio",
    publisher: "Core77",
    year: 2025,
    field: "Objects",
    link: "#",
    description: "The legendary German brand reissues the LE speakers, originally designed by Dieter Rams in 1959, updated with Wi-Fi and AirPlay.",
    insights: ["Retro-futurism.", "Dieter Rams legacy."],
    whyMatters: "Good design is timeless; technology is transient.",
    authors: ["Rain Noe", "Editor"],
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "obj-002",
    title: "The Chair Made of Air",
    publisher: "Design Milk",
    year: 2025,
    field: "Objects",
    link: "#",
    description: "Using aerogel technology developed by NASA, this armchair weighs less than 2kg but supports 300kg. A breakthrough in material science.",
    insights: ["Aerogel applications.", "Ultra-lightweight furniture."],
    whyMatters: "Material innovation drives form.",
    authors: ["Caroline Williamson", "Editor"],
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200"
  },

  // --- TECH ---
  {
    id: "tech-001",
    title: "Generative AI in Urban Planning",
    publisher: "Curbed",
    year: 2025,
    field: "Tech",
    link: "#",
    description: "Cities are using AI to model traffic flows, wind patterns, and pedestrian density in real-time, optimizing zoning before a brick is laid.",
    insights: ["Digital twins.", "Predictive zoning."],
    whyMatters: "Data-driven design creates more livable cities.",
    authors: ["Alissa Walker", "Urbanism Editor"],
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "tech-002",
    title: "The Augmented Reality Hard Hat",
    publisher: "ArchDaily",
    year: 2025,
    field: "Tech",
    link: "#",
    description: "Construction workers can now see BIM models overlaid on the physical site, reducing errors and speeding up complex assembly.",
    insights: ["AR in construction.", "BIM integration."],
    whyMatters: "Bridging the gap between the digital model and the built reality.",
    authors: ["Eric Baldwin", "Editor"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },

  // --- GREEN (Sustainable) ---
  {
    id: "grn-001",
    title: "Concrete that Heals Itself",
    publisher: "Dezeen",
    year: 2025,
    field: "Green",
    link: "#",
    description: "Bio-concrete embedded with bacteria produces limestone when cracks form, sealing fissures and extending the lifespan of infrastructure.",
    insights: ["Self-healing materials.", "Infrastructure longevity."],
    whyMatters: "Reducing the massive carbon cost of concrete repair and replacement.",
    authors: ["Rima Sabina Aouf", "Editor"],
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518098268026-4e1877433665?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "grn-002",
    title: "Urban Rewilding: London's Green Belt",
    publisher: "Wallpaper*",
    year: 2025,
    field: "Green",
    link: "#",
    description: "A radical plan to connect London's parks into a continuous wildlife corridor, boosting biodiversity and cooling the urban heat island.",
    insights: ["Landscape architecture.", "Biodiversity net gain."],
    whyMatters: "Cities must become ecosystems to survive climate change.",
    authors: ["Ellie Stathaki", "Architecture Editor"],
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
  }
];

export const PAPERS: Paper[] = NEWS_DATA.map(item => ({
    id: item.id,
    title: item.title,
    publisher: item.publisher,
    authors: item.authors,
    abstractPreview: item.description,
    abstract: item.description,
    publicationDate: String(item.year),
    category: item.field, 
    doi: item.link,
    whyMatters: item.whyMatters,
    upvotes: Math.floor(Math.random() * 8000) + 1000,
    timestamp: Date.now() - (Math.random() * 10000000), 
    aiInsights: item.insights,
    industry: [item.field],
    readTime: item.readTime,
    publisherLogo: getPublisherInfo(item.publisher).logo,
    fileUrl: item.image
}));