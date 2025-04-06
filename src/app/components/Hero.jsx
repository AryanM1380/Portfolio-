"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Hi, I'm <span className="text-primary">Aryan Mohammadi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-50 dark:text-gray-300 mb-6">
            Full Stack Developer | Data Analyst | Machine Learning Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Full Stack Developer with a strong background in data analysis and machine learning. 
            Experienced in building modern web applications and data-driven solutions using tools like React, Node.js, Python, and ML libraries. 
            Graduated in Computer Applications from HAMK University, Finland. 
            Passionate about creating efficient, user-friendly, and intelligent digital experiences.


            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 border border-primary text-primary dark:text-white rounded-lg hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Download Resume
              </a>
              <Link 
                href="/community" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                Join Community
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
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