
"use client";

import BNBStats from "./BNBStats";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-8 rounded-full bg-bsc-surface/30 backdrop-blur-sm border border-bsc-yellow/20 glow-yellow">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 80 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse-slow"
              >
                <path 
                  d="M40 0L49.2705 27.6393H78.5317L55.6306 44.7214L64.9011 72.3607L40 55.2786L15.0989 72.3607L24.3694 44.7214L1.46828 27.6393H30.7295L40 0Z" 
                  fill="#F3BA2F"
                />
                <circle cx="40" cy="40" r="25" fill="#FCD535" opacity="0.8"/>
                <text x="40" y="47" textAnchor="middle" className="text-bsc-dark font-bold text-lg">BNB</text>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Build and Build Co</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
            Providing institutional-grade access to Binance Smart Chain
            <br />in the United States through regulated vehicles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <button className="px-8 py-4 bg-bsc-yellow text-bsc-dark font-semibold rounded-lg hover:bg-bsc-yellow-bright transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-bsc-surface transition-all duration-200">
              Learn More
            </button>
          </div>
          
          <BNBStats />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}