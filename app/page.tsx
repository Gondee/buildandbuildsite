"use client";

import TessellationBackground from "@/components/TessellationBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Strategy from "@/components/Strategy";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import { useLastUpdated, formatLastUpdated } from "@/components/BNBStats";

export default function Home() {
  const lastUpdated = useLastUpdated();
  return (
    <main className="relative min-h-screen">
      <TessellationBackground />
      <Navigation />
      <Hero />
      <Team />
      <Strategy />
      <Mission />
      <Contact />
      
      <footer className="bg-bsc-surface py-8 border-t border-bsc-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Build and Build Co. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-bsc-yellow transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-bsc-yellow transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-bsc-yellow transition-colors text-sm">
                Compliance
              </a>
            </div>
          </div>
          {lastUpdated && (
            <div className="text-center mt-4 pt-4 border-t border-bsc-border/10">
              <p className="text-xs text-gray-500">
                Last refresh from CMC: {formatLastUpdated(lastUpdated)}
              </p>
            </div>
          )}
        </div>
      </footer>
    </main>
  );
}