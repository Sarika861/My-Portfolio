"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },

    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border transition-all duration-300 ${scrolled
        ? "bg-zinc-950/70 border-white/10 backdrop-blur-md py-3 shadow-lg shadow-black/20"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white font-bold tracking-wider hover:opacity-85 transition-opacity">
          <Code2 className="w-6 h-6 text-purple-500" />
          <span>PORTFOLIO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-zinc-950/95 border border-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white text-lg font-medium py-2 border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 hover:bg-purple-700 text-white text-center font-medium py-3 rounded-full mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
