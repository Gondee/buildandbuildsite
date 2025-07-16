"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-bsc-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to explore BNB investment opportunities? Contact our team for more information
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bsc-yellow/10 flex items-center justify-center text-bsc-yellow flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:info@buildandbuild.co" className="text-white hover:text-bsc-yellow transition-colors">
                      info@buildandbuild.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bsc-yellow/10 flex items-center justify-center text-bsc-yellow flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+19419991418" className="text-white hover:text-bsc-yellow transition-colors">
                      +1 (941) 999-1418
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bsc-yellow/10 flex items-center justify-center text-bsc-yellow flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p className="text-white">United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bsc-yellow/10 flex items-center justify-center text-bsc-yellow flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Business Hours</p>
                    <p className="text-white">8:00 AM - 5:00 PM (M-F)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 glass-effect rounded-xl">
                <p className="text-sm text-gray-400">
                  <strong className="text-bsc-yellow">Note:</strong> Build and Build Co operates in compliance with all applicable US regulations. 
                  Investment opportunities are available only to accredited investors and qualified institutions.
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect bg-bsc-surface border border-bsc-border/20 text-white placeholder-gray-500 focus:outline-none focus:border-bsc-yellow transition-colors"
                    placeholder="John Doe"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-effect bg-bsc-surface border border-bsc-border/20 text-white placeholder-gray-500 focus:outline-none focus:border-bsc-yellow transition-colors"
                    placeholder="john@example.com"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-effect bg-bsc-surface border border-bsc-border/20 text-white placeholder-gray-500 focus:outline-none focus:border-bsc-yellow transition-colors"
                    placeholder="Your Company"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg glass-effect bg-bsc-surface border border-bsc-border/20 text-white placeholder-gray-500 focus:outline-none focus:border-bsc-yellow transition-colors resize-none"
                    placeholder="Tell us about your investment interests..."
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] ${
                    status === 'loading' 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : status === 'success'
                      ? 'bg-green-600 text-white'
                      : status === 'error'
                      ? 'bg-red-600 text-white'
                      : 'bg-bsc-yellow text-bsc-dark hover:bg-bsc-yellow-bright'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : 
                   status === 'success' ? '✓ Message Sent!' :
                   status === 'error' ? '✗ Failed to Send' :
                   'Send Message'}
                </button>
                
                {status === 'error' && errorMessage && (
                  <p className="mt-2 text-sm text-red-400 text-center">
                    {errorMessage}
                  </p>
                )}
                
                {status === 'success' && (
                  <p className="mt-2 text-sm text-green-400 text-center">
                    Thank you for your message. We&apos;ll get back to you soon!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}