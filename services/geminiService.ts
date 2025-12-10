/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PAPERS } from '../constants';

const getSystemInstruction = () => {
  const paperContext = PAPERS.map(p => 
    `- "${p.title}" (${p.publicationDate}). Section: ${p.category}. Lead: ${p.abstractPreview}`
  ).join('\n');

  return `You are the Executive Editor for "The Design Times", a prestigious publication covering architecture, interiors, and product design. 
  Your tone is knowledgeable, discerning, and concise (like Dezeen, Wallpaper*, or ArchDaily editors).
  
  Here is our current story wire:
  ${paperContext}
  
  Answer user questions about these stories, design trends, architects, or materials.
  If asked about topics not in the wire, provide general design expertise with a focus on aesthetics and function.
  Keep answers brief (under 3-4 sentences) and sophisticated.`;
};

// Use export to expose functionality
export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // API key check. Direct access of process.env.API_KEY is preferred.
    if (!process.env.API_KEY) {
      return "I cannot access the archives at this moment. (Missing API Key)";
    }

    // Always use initialization as requested.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent via ai.models
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    // Directly access text property from response.
    return response.text || "The editorial board is unable to comment at this time.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our archives are currently undergoing maintenance. Please check back later.";
  }
};