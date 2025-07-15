
"use client";

import Image from "next/image";
import BNBStats from "./BNBStats";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-8 rounded-full bg-bsc-surface/30 backdrop-blur-sm border border-bsc-yellow/20 glow-yellow">
              <Image
                src="/buildandbuild_logo-removebg-preview.png"
                alt="Build and Build Logo"
                width={200}
                height={200}
                className="animate-pulse-slow"
              />
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
            <a 
              href="#contact"
              className="px-8 py-4 bg-bsc-yellow text-bsc-dark font-semibold rounded-lg hover:bg-bsc-yellow-bright transition-all duration-200 transform hover:scale-105 text-center"
            >
              Contact Us
            </a>
            <a 
              href="#team"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-bsc-surface transition-all duration-200 text-center"
            >
              Learn More
            </a>
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