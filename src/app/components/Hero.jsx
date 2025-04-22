"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left transform transition-all duration-700 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-50px)' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-700 dark:text-white mb-6">
              Hi, I'm <span className="text-primary relative">
                Aryan Mohammadi
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-poppins font-medium text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer | Data Analyst | Machine Learning Developer
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-poppins text-gray-600 dark:text-gray-400">Based in Finland,Europe</span>
            </div>
            <p className="text-lg font-poppins text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
              Full Stack Developer with a strong background in data analysis and machine learning. 
              Experienced in building modern web applications and data-driven solutions using tools like React, Node.js, Python, and ML libraries. 
              Graduated in Computer Applications from HAMK University, Finland. 
              Passionate about creating efficient, user-friendly, and intelligent digital experiences.
            </p>
            
            {/* Key Achievements */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-primary mr-2">🏆</span>
                  <span className="text-sm">5+ Projects Completed</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-primary mr-2">💼</span>
                  <span className="text-sm">2+ Years Experience</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-primary mr-2">🌍</span>
                  <span className="text-sm">International Experience</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
              >
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-primary text-primary dark:text-white rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center group"
              >
                <span>View Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a 
                href="#skills" 
                className="px-6 py-3 border border-primary text-primary dark:text-white rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center group"
              >
                <span>My Skills</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a 
                href="https://github.com/AryanM1380" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/aryan-mohammadi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center transform transition-all duration-700 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(50px)' }}>
            <div 
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-500 ${isHovered ? 'transform scale-105 shadow-2xl' : 'shadow-xl'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }}></div>
              <Image 
                src="/me.png" 
                alt="Aryan Mohammadi" 
                width={320}
                height={320}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                priority
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-primary/80 text-white p-4 rounded-lg text-center transform transition-transform duration-300" style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}>
                  <p className="font-semibold">Aryan Mohammadi</p>
                  <p className="text-sm">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;