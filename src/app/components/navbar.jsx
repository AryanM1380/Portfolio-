"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    
    // Only handle anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false);
  };

  // Handler for mobile menu items - just for showing interaction, no navigation
  const handleMobileMenuClick = (linkName) => {
    // Just close the menu, no navigation
    setIsOpen(false);
    // Optional: You can add any other logic here like showing a message
    console.log(`Clicked on ${linkName} tab`);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Work Experience', href: '#work-experience' },
    { name: 'Contact', href: '#contact' }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo or Brand */}
            <div className="text-white font-bold text-xl">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-purple-400 transition-colors"
                  onClick={(e) => link.href.startsWith('#') && handleScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation - Fixed positioning and behavior */}
          <div 
            className={`md:hidden fixed top-16 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            } z-50 shadow-lg`}
          >
            <div className="py-4 px-4">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    className="block w-full text-white hover:text-purple-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/10 text-center border border-white/20"
                    onClick={() => handleMobileMenuClick(link.name)}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content overlap - this is crucial! */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;