"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const glassEffect = {
    background: 'rgba(10, 20, 30, 0.85)',
    backdropFilter: 'blur(12px) saturate(200%)',
    boxShadow: '0 6px 24px 0 rgba(0, 0, 0, 0.3)'
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
      features: ["Responsive Design", "Dark Mode Support", "Dynamic Content", "SEO Optimized"],
      results: ["Improved portfolio visibility", "Enhanced user experience", "Optimized performance metrics", "Modern tech stack implementation"],
      challenges: ["Implementing responsive design for all devices", "Creating smooth animations and transitions", "Optimizing performance and SEO"],
      solutions: ["Used Tailwind CSS for responsive design", "Implemented Framer Motion for animations", "Optimized images and implemented lazy loading"]
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
      features: ["Immersive Gameplay", "Dynamic Audio System", "Atmospheric Effects", "Interactive Narrative"],
      results: ["Successfully implemented audio system", "Created engaging atmospheric effects", "Enhanced player experience", "Positive user feedback"],
      challenges: ["Creating immersive audio and atmospheric effects", "Balancing narrative and gameplay", "Ensuring cross-platform compatibility"],
      solutions: ["Used Unreal Engine 5 for game development", "Implemented audio scripting in Unreal Engine", "Optimized game performance on various platforms"]
    },
    {
      id: 3,
      title: "CINEMAGO",
      description: "CINEMAGO is a mobile application developed using Expo and powered by MongoDB Atlas, designed to provide users with a seamless cinema booking experience. The project focuses on delivering essential functionalities for moviegoers, from ticket bookings to user profile management.",
      date: "August 2024 - September 2024",
      githubLink: "https://github.com/AryanM1380/CinemaGo",
      videoLink: "https://www.youtube.com/watch?v=UXwMLRI6GZU",
      image: "/projects/CinemaGo.png",
      technologies: ["Full-Stack Development", "Google Cloud Platform (GCP)", "Mobile Applications", "MongoDB", "Node.js", "Expo", "React Native", "Compute Engine"],
      category: "mobile",
      status: "completed",
      complexity: "high",
      screenshots: [],
      role: "Full Stack Mobile Developer",
      features: ["Mobile Ticket Booking", "User Profile Management", "Real-time Seat Availability", "Payment Integration"],
      results: ["Successfully launched mobile application", "Improved cinema booking experience", "Enhanced user engagement", "Positive user feedback"],
      challenges: ["Integrating multiple backend services", "Ensuring data privacy and security", "Creating a seamless user experience"],
      solutions: ["Used MongoDB for data storage and management", "Implemented Google Cloud Platform for backend services", "Ensured data privacy and security through encryption and access controls"]
    },
    {
      id: 4,
      title: "Automotive Dealership",
      description: "Developed a feature-rich car dealership website showcasing Toyota, Mercedes-Benz, and BMW, with a focus on user-friendly browsing, secure test drive bookings, and an admin panel for content management—emphasizing both seamless UX and robust data privacy.",
      date: "February 2024 - March 2024",
      githubLink: "https://github.com/AryanM1380/Node.JS-Project-G5",
      image: "/projects/Car.jpeg",
      technologies: ["React", "Full-Stack Development", "Node.js", "MongoDB"],
      category: "web",
      status: "completed",
      complexity: "high",
      screenshots: [],
      role: "Full Stack Developer",
      features: ["Car Inventory Management", "Test Drive Booking System", "Admin Dashboard", "Secure Payment Processing"],
      results: ["Improved car dealership operations", "Enhanced customer experience", "Streamlined inventory management", "Increased online bookings"],
      challenges: ["Ensuring robust data privacy", "Creating a user-friendly interface", "Integrating multiple backend services"],
      solutions: ["Used Node.js for backend development", "Implemented MongoDB for data storage", "Ensured robust data privacy through access controls"]
    },
    {
      id: 5,
      title: "Hamk Design Factory project",
      description: "This project focuses on providing constructive feedback to students based on their responses to questions. The aim is to improve overall learning outcomes by analyzing data and creating insightful charts that highlight trends and areas for improvement.",
      date: "June 2023 - August 2023",
      githubLink: "https://github.com/Aryan22000/group7_main2",
      image: "/projects/Hamk.jpg",
      technologies: ["Google Chart", "Microsoft Excel", "PHP", "CSS", "SQL", "HTML", "Power BI"],
      category: "data",
      status: "completed",
      complexity: "medium",
      screenshots: [],
      role: "Analysis, Developer & Project Manager",
      features: ["Data Analysis Dashboard", "Student Performance Tracking", "Automated Feedback Generation", "Trend Analysis Reports"],
      results: ["Improved student learning outcomes", "Enhanced feedback quality", "Streamlined analysis process", "Better trend identification"],
      challenges: ["Analyzing large datasets", "Creating insightful charts", "Ensuring data privacy"],
      solutions: ["Used Google Charts for data visualization", "Implemented Microsoft Excel for data analysis", "Ensured data privacy through access controls"]
    },
    {
      id: 6,
      title: "Pizzurger Restaurant",
      description: "This project is tailored for Hamk University, aiming to design, develop, and implement a comprehensive Restaurant Management System for Pizzurger. The focus lies in creating a seamless user experience, both for the customers interacting with the frontend and the staff managing the backend. The project encompasses the entire lifecycle, from initial design to code implementation.",
      date: "November 2022 - January 2023",
      githubLink: "https://github.com/AryanM1380/Team4_WEBPROG",
      image: "/projects/Restaurant .png",
      technologies: ["PHP", "Full-Stack Development", "CSS", "HTML", "MySQL", "Docker"],
      category: "web",
      status: "completed",
      complexity: "low",
      screenshots: [],
      role: "Web Developer",
      features: ["Order Management System", "Menu Management", "Staff Dashboard", "Customer Feedback System"],
      results: ["Improved restaurant operations", "Enhanced customer experience", "Streamlined order management", "Better staff coordination"],
      challenges: ["Ensuring robust data privacy", "Creating a seamless user experience", "Integrating multiple backend services"],
      solutions: ["Used PHP for backend development", "Implemented MySQL for data storage", "Ensured robust data privacy through access controls"]
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
      features: ["Dynamic visualization of Taylor series approximations", "Supports functions like e^x, sin(x), and cos(x)", "Animations to show increasing term accuracy", "Clear, educational plots using Matplotlib"],
      results: ["Improved conceptual understanding of Taylor series", "Useful for self-study or classroom use", "Demonstrated ability to integrate math and code"],
      challenges: ["Creating accurate yet readable visualizations", "Animating mathematical changes in real-time", "Balancing educational clarity with technical depth"],
      solutions: ["Used Python and Matplotlib to plot dynamic graphs", "Leveraged Jupyter Notebook for step-by-step animations", "Focused on clarity and simplicity in code structure"]
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'game', name: 'Game Development' },
    { id: 'data', name: 'Data Analysis' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'education', name: 'Education' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
      style={{
        position: 'relative',
        zIndex: 0
      }}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .masonry-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            align-items: stretch;
            max-width: 1400px;
            margin: 0 auto;
          }
          .masonry-item {
            margin-bottom: 2rem;
          }
        `}
      </style>
          {/* Background elements */}
          <div className="absolute inset-0" style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,125,255,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => {
          const width = 10 + (i * 1.2);
          const height = 10 + (i * 1.1);
          const left = (i * 5) % 100;
          const top = (i * 7) % 100;
          const duration = 5 + (i * 0.5);
          
          return (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}vw`,
                top: `${top}vh`,
                animation: `float ${duration}s infinite linear`
              }}
            />
          );
        })}
      </div>
    </div>

    {/* Rest of your existing content */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-variable font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            A curated showcase of my latest work and contributions
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/50 text-white border-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 placeholder-gray-500"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-teal-400 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/60'
                }`}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="masonry-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="masonry-item relative group"
              >
                <motion.div
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    ...glassEffect,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative h-60 md:h-72">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm md:text-base line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs md:text-sm rounded-full bg-gray-800/60 text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-teal-500/80 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300 text-sm"
                        >
                          <FaGithub className="h-4 w-4" /> GitHub
                        </motion.a>
                      )}
                      {project.videoLink && (
                        <motion.a
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/80 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 text-sm"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" /> Demo
                        </motion.a>
                      )}
                    </div>
                    <motion.button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-center gap-2 text-white hover:text-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Details</span>
                      <FaChevronDown className={`h-4 w-4 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} />
                    </motion.button>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-4 text-sm text-gray-300"
                      >
                        {/* Add full description here */}
                        <div>
                          <h4 className="font-medium text-gray-200">Full Description</h4>
                          <p className="mt-2">{project.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-200">Features</h4>
                          <ul className="list-disc list-inside mt-2">
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200">Results</h4>
                          <ul className="list-disc list-inside mt-2">
                            {project.results.map((result) => (
                              <li key={result}>{result}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200">Challenges</h4>
                          <ul className="list-disc list-inside mt-2">
                            {project.challenges.map((challenge) => (
                              <li key={challenge}>{challenge}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200">Solutions</h4>
                          <ul className="list-disc list-inside mt-2">
                            {project.solutions.map((solution) => (
                              <li key={solution}>{solution}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;