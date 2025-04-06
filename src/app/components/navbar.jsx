"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/"
              className="text-xl font-bold text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80 transition-colors"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#education" 
              onClick={(e) => scrollToSection(e, 'education')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Work Experience
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                onClick={scrollToTop}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, 'skills')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#education" 
                onClick={(e) => scrollToSection(e, 'education')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Education
              </a>
              <a 
                href="#experience" 
                onClick={(e) => scrollToSection(e, 'experience')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Work Experience
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
