"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website built with Next.js and Tailwind CSS.Features include dark mode, smooth animations, and interactive project showcases.Designed to present my work, skills, and contact info in a clean, user-friendly layout.",
      date: "April 2024 - Present",
      githubLink: "https://github.com/AryanM1380/Portfolio-",
      image: "/projects/Portfolio.png", 
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Echoes of the Steps",
      description: "Contributed to Echoes of the Steps, a narrative-driven game, by designing interactive elements, immersive audio, and atmospheric effects like rain, enhancing the player's emotional and sensory experience.",
      date: "November 2024 - December 2024",
      videoLink: "https://www.youtube.com/watch?v=M4viAIs8mu0",
      image: "/projects/echoes the steps.png",
      technologies: ["unreal engine 5 ", "Blueprint ", "CapCut", "Project Management", "Scrum methodology"]
    },
    {
      id: 3,
      title: "CINEMAGO",
      description: "CINEMAGO is a mobile application developed using Expo and powered by MongoDB Atlas, designed to provide users with a seamless cinema booking experience. The project focuses on delivering essential functionalities for moviegoers, from ticket bookings to user profile management.",
      date: "October 2024 - November 2024",
      githubLink: "https://github.com/AryanM1380/CinemaGo",
      videoLink: "https://www.youtube.com/watch?v=UXwMLRI6GZU",
      image: "/projects/CinemaGo.png",
      technologies: ["Full-Stack Development", "Google Cloud Platform (GCP)", "Mobile Applications", "MongoDB","Node.js","Expo","React Native"]
    },
    {
      id: 4,
      title: "Automotive Dealership",
      description: "Developed a feature-rich car dealership website showcasing Toyota, Mercedes-Benz, and BMW, with a focus on user-friendly browsing, secure test drive bookings, and an admin panel for content management—emphasizing both seamless UX and robust data privacy.",
      date: "April 2024 - May 2024",
      githubLink: "https://github.com/AryanM1380/Node.JS-Project-G5",
      image: "/projects/Car.jpeg",
      technologies: ["React", "Full-Stack Development", "Node.jsI", "MongoDB"]
    },
    {
      id: 5,
      title: "Hamk DesignFactory project",
      description: "This project focuses on providing constructive feedback to students based on their responses to questions. The aim is to improve overall learning outcomes by analyzing data and creating insightful charts that highlight trends and areas for improvement.",
      date: "August 2023 - October 2023",
      githubLink: "https://github.com/Aryan22000/group7_main2",
      image: "/projects/Hamk.jpg",
      technologies: ["google chart", "Microsoft Excel", "PHP", "Cascading Style Sheets (CSS)", "SQL", "HTML", "Power BI"]
    },
    {
      id: 6,
      title: "Pizzurger Restaurant",
      description: "This project is tailored for Hamk University, aiming to design, develop, and implement a comprehensive Restaurant Management System for Pizzurger. The focus lies in creating a seamless user experience, both for the customers interacting with the frontend and the staff managing the backend. The project encompasses the entire lifecycle, from initial design to code implementation.",
      date: "January 2023 - March 2023",
      githubLink: "https://github.com/AryanM1380/Team4_WEBPROG",
      image: "/projects/Restaurant .png",
      technologies: ["PHP", "Full-Stack Development", "CSS", "HTML", "MYSQL","Docker"]
    }
  ]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4">
                  {project.id === 3 ? (
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-purple-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a 
                        href={project.videoLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  ) : (
                    <a 
                      href={project.id === 2 ? project.videoLink : project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center text-primary transition-colors ${
                        project.id === 2 ? 'hover:text-red-600' : 'hover:text-purple-600'
                      }`}
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {project.id === 2 ? (
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        ) : (
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        )}
                      </svg>
                      {project.id === 2 ? 'Watch Video' : 'GitHub'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 