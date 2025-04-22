"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS. Features responsive design and dark mode support.",
      date: "February 2024 - Present",
      duration: "2 months",
      githubLink: "https://github.com/AryanM1380/Portfolio-",
      image: "/projects/Portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      category: "web",
      status: "in progress",
      complexity: "medium",
      screenshots: ["/projects/Portfolio.png"],
      role: "Full Stack Developer",
      features: [
        "Responsive Design",
        "Dark Mode Support",
        "Dynamic Content",
        "SEO Optimized"
      ],
      results: [
        "Improved portfolio visibility",
        "Enhanced user experience",
        "Optimized performance metrics",
        "Modern tech stack implementation"
      ],
      challenges: [
        "Implementing responsive design for all devices",
        "Creating smooth animations and transitions",
        "Optimizing performance and SEO"
      ],
      solutions: [
        "Used Tailwind CSS for responsive design",
        "Implemented Framer Motion for animations",
        "Optimized images and implemented lazy loading"
      ]
    },
    {
      id: 2,
      title: "Echoes of the Steps",
      description: "Contributed to Echoes of the Steps, a narrative-driven game, by designing interactive elements, immersive audio, and atmospheric effects like rain, enhancing the player's emotional and sensory experience.",
      date: "September 2024 - October 2024",
      duration: "2 months",
      videoLink: "https://www.youtube.com/watch?v=M4viAIs8mu0",
      image: "/projects/echoes the steps.png",
      technologies: ["Unreal Engine 5", "Blueprint", "CapCut", "Project Management", "Scrum methodology"],
      category: "game",
      status: "completed",
      complexity: "high",
      screenshots: ["/projects/echoes the steps.png"],
      role: "Game Developer & Sound Designer",
      features: [
        "Immersive Gameplay",
        "Dynamic Audio System",
        "Atmospheric Effects",
        "Interactive Narrative"
      ],
      results: [
        "Successfully implemented audio system",
        "Created engaging atmospheric effects",
        "Enhanced player experience",
        "Positive user feedback"
      ],
      challenges: [
        "Creating immersive audio and atmospheric effects",
        "Balancing narrative and gameplay",
        "Ensuring cross-platform compatibility"
      ],
      solutions: [
        "Used Unreal Engine 5 for game development",
        "Implemented audio scripting in Unreal Engine",
        "Optimized game performance on various platforms"
      ]
    },
    {
      id: 3,
      title: "CINEMAGO",
      description: "CINEMAGO is a mobile application developed using Expo and powered by MongoDB Atlas, designed to provide users with a seamless cinema booking experience. The project focuses on delivering essential functionalities for moviegoers, from ticket bookings to user profile management.",
      date: "August 2024 - September 2024",
      githubLink: "https://github.com/AryanM1380/CinemaGo",
      videoLink: "https://www.youtube.com/watch?v=UXwMLRI6GZU",
      image: "/projects/CinemaGo.png",
      technologies: ["Full-Stack Development", "Google Cloud Platform (GCP)", "Mobile Applications", "MongoDB","Node.js","Expo","React Native"],
      category: "mobile",
      status: "completed",
      complexity: "high",
      screenshots: [],
      role: "Full Stack Mobile Developer",
      features: [
        "Mobile Ticket Booking",
        "User Profile Management",
        "Real-time Seat Availability",
        "Payment Integration"
      ],
      results: [
        "Successfully launched mobile application",
        "Improved cinema booking experience",
        "Enhanced user engagement",
        "Positive user feedback"
      ],
      challenges: [
        "Integrating multiple backend services",
        "Ensuring data privacy and security",
        "Creating a seamless user experience"
      ],
      solutions: [
        "Used MongoDB for data storage and management",
        "Implemented Google Cloud Platform for backend services",
        "Ensured data privacy and security through encryption and access controls"
      ]
    },
    {
      id: 4,
      title: "Automotive Dealership",
      description: "Developed a feature-rich car dealership website showcasing Toyota, Mercedes-Benz, and BMW, with a focus on user-friendly browsing, secure test drive bookings, and an admin panel for content management—emphasizing both seamless UX and robust data privacy.",
      date: "February 2024 - March 2024",
      githubLink: "https://github.com/AryanM1380/Node.JS-Project-G5",
      image: "/projects/Car.jpeg",
      technologies: ["React", "Full-Stack Development", "Node.jsI", "MongoDB"],
      category: "web",
      status: "completed",
      complexity: "high",
      screenshots: [],
      role: "Full Stack Developer",
      features: [
        "Car Inventory Management",
        "Test Drive Booking System",
        "Admin Dashboard",
        "Secure Payment Processing"
      ],
      results: [
        "Improved car dealership operations",
        "Enhanced customer experience",
        "Streamlined inventory management",
        "Increased online bookings"
      ],
      challenges: [
        "Ensuring robust data privacy",
        "Creating a user-friendly interface",
        "Integrating multiple backend services"
      ],
      solutions: [
        "Used Node.js for backend development",
        "Implemented MongoDB for data storage",
        "Ensured robust data privacy through access controls"
      ]
    },
    {
      id: 5,
      title: "Hamk DesignFactory project",
      description: "This project focuses on providing constructive feedback to students based on their responses to questions. The aim is to improve overall learning outcomes by analyzing data and creating insightful charts that highlight trends and areas for improvement.",
      date: "June 2023 - August 2023",
      githubLink: "https://github.com/Aryan22000/group7_main2",
      image: "/projects/Hamk.jpg",
      technologies: ["google chart", "Microsoft Excel", "PHP", "Cascading Style Sheets (CSS)", "SQL", "HTML", "Power BI"],
      category: "data",
      status: "completed",
      complexity: "medium",
      screenshots: [],
      role: "Analysis, Developer & Project Manager",
      features: [
        "Data Analysis Dashboard",
        "Student Performance Tracking",
        "Automated Feedback Generation",
        "Trend Analysis Reports"
      ],
      results: [
        "Improved student learning outcomes",
        "Enhanced feedback quality",
        "Streamlined analysis process",
        "Better trend identification"
      ],
      challenges: [
        "Analyzing large datasets",
        "Creating insightful charts",
        "Ensuring data privacy"
      ],
      solutions: [
        "Used Google Charts for data visualization",
        "Implemented Microsoft Excel for data analysis",
        "Ensured data privacy through access controls"
      ]
    },
    {
      id: 6,
      title: "Pizzurger Restaurant",
      description: "This project is tailored for Hamk University, aiming to design, develop, and implement a comprehensive Restaurant Management System for Pizzurger. The focus lies in creating a seamless user experience, both for the customers interacting with the frontend and the staff managing the backend. The project encompasses the entire lifecycle, from initial design to code implementation.",
      date: "November 2022 - January 2023",
      githubLink: "https://github.com/AryanM1380/Team4_WEBPROG",
      image: "/projects/Restaurant .png",
      technologies: ["PHP", "Full-Stack Development", "CSS", "HTML", "MYSQL","Docker"],
      category: "web",
      status: "completed",
      complexity: "low",
      screenshots: [],
      role: "Web Developer",
      features: [
        "Order Management System",
        "Menu Management",
        "Staff Dashboard",
        "Customer Feedback System"
      ],
      results: [
        "Improved restaurant operations",
        "Enhanced customer experience",
        "Streamlined order management",
        "Better staff coordination"
      ],
      challenges: [
        "Ensuring robust data privacy",
        "Creating a seamless user experience",
        "Integrating multiple backend services"
      ],
      solutions: [
        "Used PHP for backend development",
        "Implemented MYSQL for data storage",
        "Ensured robust data privacy through access controls"
      ]
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'game', name: 'Game Development' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className={`text-white text-sm font-medium px-3 py-1 rounded-full ${
                    project.status === 'completed' 
                      ? 'bg-green-500/80' 
                      : 'bg-yellow-500/80'
                  }`}>
                    {project.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {project.duration}
                  </span>
                </div>

                {/* Project Role */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{project.role}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Complexity Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.complexity === 'high' 
                      ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                      : project.complexity === 'medium'
                      ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                  }`}>
                    {project.complexity.charAt(0).toUpperCase() + project.complexity.slice(1)} Complexity
                  </span>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-3">
                    {project.githubLink && (
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
                    )}
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="text-sm text-primary hover:text-purple-600 transition-colors flex items-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        selectedProject.status === 'completed' 
                          ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {selectedProject.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
                      </span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        selectedProject.complexity === 'high' 
                          ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                          : selectedProject.complexity === 'medium'
                          ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                        {selectedProject.complexity.charAt(0).toUpperCase() + selectedProject.complexity.slice(1)} Complexity
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeDetails}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Project Statistics */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{selectedProject.technologies.length}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{selectedProject.challenges.length}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Challenges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{selectedProject.solutions.length}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Solutions</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {/* Project Image */}
                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Project Description */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Overview</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Project Role */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Role</h4>
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{selectedProject.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tech Stack</h4>
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 text-sm bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Challenges</h4>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Solutions</h4>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results/Impact */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Impact & Results</h4>
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {selectedProject.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <span className="text-gray-600 dark:text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.videoLink && (
                    <a
                      href={selectedProject.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 