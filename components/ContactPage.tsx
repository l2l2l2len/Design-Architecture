/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    // Store in localStorage for demo purposes
    try {
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      const newMessage = {
        ...formData,
        timestamp: Date.now(),
        id: `msg-${Date.now()}`
      };
      existingMessages.push(newMessage);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

      // Simulate sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[800px] mx-auto px-6">

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
          <span className="font-serif text-xs italic text-gray-400">Contact</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans-accent text-xs font-bold uppercase tracking-widest text-[#a85226] mb-4 block">Get in Touch</span>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-black mb-4">Contact Us</h1>
          <p className="font-serif text-lg text-gray-600 max-w-lg mx-auto">
            Have a question, feedback, or want to submit a project? We'd love to hear from you.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-headline text-2xl font-bold text-black mb-2">Message Sent!</h2>
            <p className="font-serif text-gray-600 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 border border-black text-black font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="font-headline text-lg font-bold mb-3 text-black">Editorial</h3>
                <p className="font-serif text-sm text-gray-600 mb-2">For story tips and editorial inquiries</p>
                <p className="font-sans-accent text-sm text-black">editorial@thedesigntimes.com</p>
              </div>

              <div>
                <h3 className="font-headline text-lg font-bold mb-3 text-black">Submissions</h3>
                <p className="font-serif text-sm text-gray-600 mb-2">Submit your architecture or design project</p>
                <p className="font-sans-accent text-sm text-black">Use the Submit Project feature</p>
              </div>

              <div>
                <h3 className="font-headline text-lg font-bold mb-3 text-black">General</h3>
                <p className="font-serif text-sm text-gray-600 mb-2">For all other inquiries</p>
                <p className="font-sans-accent text-sm text-black">hello@thedesigntimes.com</p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-headline text-lg font-bold mb-3 text-black">Offices</h3>
                <p className="font-serif text-sm text-gray-600">
                  London • New York • Copenhagen
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6 bg-white p-8 border border-gray-200">
              <div>
                <label className="block font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full bg-[#fdfbf7] border-b ${errors.name ? 'border-red-500' : 'border-gray-200'} py-3 px-3 text-sm focus:border-black outline-none transition-colors`}
                  placeholder="Jane Smith"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full bg-[#fdfbf7] border-b ${errors.email ? 'border-red-500' : 'border-gray-200'} py-3 px-3 text-sm focus:border-black outline-none transition-colors`}
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={`w-full bg-[#fdfbf7] border-b ${errors.subject ? 'border-red-500' : 'border-gray-200'} py-3 px-3 text-sm focus:border-black outline-none transition-colors`}
                >
                  <option value="">Select a topic...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Editorial Question">Editorial Question</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Feedback">Feedback & Suggestions</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className={`w-full bg-[#fdfbf7] border-b ${errors.message ? 'border-red-500' : 'border-gray-200'} py-3 px-3 text-sm focus:border-black outline-none transition-colors resize-none`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 border-l-2 border-red-500 text-red-700 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
