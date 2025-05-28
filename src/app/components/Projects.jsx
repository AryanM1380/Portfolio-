"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaFilter, FaSearch, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    // Check system preference for dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const glassEffect = {
    background: isDarkMode 
      ? 'rgba(17, 25, 40, 0.75)'
      : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(16px) saturate(180%)',
    boxShadow: isDarkMode
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      : '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  };

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
    },
    {
      id: 7,
      title: "Taylor Series Visualizer",
      description: "This project combines mathematical intuition with programming to demonstrate how Taylor series approximate functions like e^x, sin(x), and cos(x). Developed using Python and Jupyter Notebook, it includes animated visualizations that dynamically show how adding more terms improves the approximation. It's designed as a learning aid for both students and educators.",
      date: "May 2025 - May 2025",
      githubLink: "https://github.com/AryanM1380/Visualizing-Taylor-Series-Approximations-with-Python",
      image: "/projects/test.jpg",
      technologies: ["Python", "Jupyter", "Matplotlib", "NumPy", "Data Visualization"],
      category: "education",
      status: "in-progress",
      complexity: "medium",
      screenshots: [],
      role: "Developer & Designer",
      features: [
        "Dynamic visualization of Taylor series approximations",
        "Supports functions like e^x, sin(x), and cos(x)",
        "Animations to show increasing term accuracy",
        "Clear, educational plots using Matplotlib"
      ],
      results: [
        "Improved conceptual understanding of Taylor series",
        "Useful for self-study or classroom use",
        "Demonstrated ability to integrate math and code"
      ],
      challenges: [
        "Creating accurate yet readable visualizations",
        "Animating mathematical changes in real-time",
        "Balancing educational clarity with technical depth"
      ],
      solutions: [
        "Used Python and Matplotlib to plot dynamic graphs",
        "Leveraged Jupyter Notebook for step-by-step animations",
        "Focused on clarity and simplicity in code structure"
      ]
    }
    
  ]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'game', name: 'Game Development' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'education', name: 'Education'}
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        background: isDarkMode ? '#1f2937' : '#f3f4f6'
      }}
      role="region"
      aria-label="Projects section"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            My Projects
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        {/* Enhanced Filter and Search with Mobile Optimization */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex-1 max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              aria-label="Search projects"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Project Grid with Mobile Optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    ...glassEffect,
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                  }}
                  onClick={() => handleViewDetails(project)}
                  role="button"
                  tabIndex="0"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 max-h-[400px] overflow-y-auto">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-200">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 text-sm"
                          aria-label="View on GitHub"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>GitHub</span>
                        </motion.a>
                      )}
                      {project.videoLink && (
                        <motion.a
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 text-sm"
                          aria-label="Watch video"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                          <span>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Project Details Modal with Mobile Exit Button */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={closeDetails}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900/95"
                style={{
                  ...glassEffect,
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Exit Button */}
                {isMobile && (
                  <motion.button
                    onClick={closeDetails}
                    className="fixed top-4 right-4 p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 z-[10000] shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close project details"
                  >
                    <FaTimes className="h-6 w-6" />
                  </motion.button>
                )}
                
                {/* Desktop Exit Button */}
                {!isMobile && (
                  <button
                    onClick={closeDetails}
                    className="fixed top-4 right-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 z-[10000] shadow-lg"
                    aria-label="Close project details"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                )}

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-gray-200 mb-6">{selectedProject.description}</p>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.githubLink && (
                          <motion.a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                            }}
                            aria-label="View on GitHub"
                          >
                            <FaGithub className="h-5 w-5" />
                            <span>View on GitHub</span>
                          </motion.a>
                        )}
                        {selectedProject.videoLink && (
                          <motion.a
                            href={selectedProject.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                            style={{
                              transformStyle: 'preserve-3d',
                              transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                            }}
                            aria-label="Watch video"
                          >
                            <FaExternalLinkAlt className="h-5 w-5" />
                            <span>Watch Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-gray-200 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-200 mb-2">Features</h4>
                          <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {selectedProject.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-200 mb-2">Results</h4>
                          <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {selectedProject.results.map((result) => (
                              <li key={result}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;