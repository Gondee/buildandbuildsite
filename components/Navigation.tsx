"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Team", href: "#team" },
  { label: "Strategy", href: "#strategy" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-gradient">Build and Build Co</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-bsc-yellow ${
                  activeSection === item.href.substring(1)
                    ? "text-bsc-yellow"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:block px-6 py-2 bg-bsc-yellow text-bsc-dark font-semibold rounded-lg hover:bg-bsc-yellow-bright transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}