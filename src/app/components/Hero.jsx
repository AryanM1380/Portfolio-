"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const glassEffect = {
    background: isDarkMode 
      ? 'rgba(17, 25, 40, 0.75)'
      : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(16px) saturate(180%)',
    border: isDarkMode
      ? '1px solid rgba(255, 255, 255, 0.125)'
      : '1px solid rgba(0, 0, 0, 0.125)',
    boxShadow: isDarkMode
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      : '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden"
      role="banner"
      aria-label="About section"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/50 to-transparent"></div>
      </div>

      {/* Enhanced Floating Elements with 3D Effect */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(10deg) rotateY(10deg)'
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(-10deg) rotateY(-10deg)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'perspective(1000px) rotateY(0deg)'
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500">
                Aryan Mohammadi
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer | Data Analyst | Machine Learning Developer
            </motion.h2>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-300">Based in Finland, Europe</span>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full Stack Developer with a strong background in data analysis and machine learning. 
              Experienced in building modern web applications and data-driven solutions using tools like React, Node.js, Python, and ML libraries.
            </motion.p>
            
            {/* All Buttons and Icons in a Single Horizontal Row */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                tabIndex="0"
                role="button"
                aria-label="Projects completed"
              >
                <span className="text-yellow-300 mr-2">🏆</span>
                <span className="font-semibold">5+ Projects Completed</span>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                tabIndex="0"
                role="button"
                aria-label="Years of experience"
              >
                <span className="text-yellow-300 mr-2">💼</span>
                <span className="font-semibold">2+ Years Experience</span>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                tabIndex="0"
                role="button"
                aria-label="International experience"
              >
                <span className="text-yellow-300 mr-2">🌍</span>
                <span className="font-semibold">International Experience</span>
              </motion.div>
              <motion.a 
                href="#contact" 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center gap-2 group relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                role="button"
                aria-label="Contact me"
              >
                <span className="relative z-10">Contact Me</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a 
                href="#projects" 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center gap-2 group relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                role="button"
                aria-label="View projects"
              >
                <span className="relative z-10">View Projects</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a 
                href="https://github.com/AryanM1380" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                aria-label="GitHub profile"
              >
                <FaGithub className="h-6 w-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aryan-mohammadi/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center justify-center relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="h-6 w-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
              }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay transition-opacity duration-300" 
                  style={{ opacity: isHovered ? 1 : 0 }}
                />
                <Image 
                  src="/me.png" 
                  alt="Aryan Mohammadi" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
              <motion.div 
                className="absolute -inset-4 rounded-3xl border-2 border-blue-500/20"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;