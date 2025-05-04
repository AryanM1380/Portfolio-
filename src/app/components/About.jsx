import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCode, FaLightbulb, FaHeart, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaQuoteLeft, FaGlobe, FaStar } from 'react-icons/fa';
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const glassEffect = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://via.placeholder.com/400x250",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    }
  ];

  const achievements = [
    {
      title: "Top Contributor",
      description: "Recognized as a top contributor in open-source projects",
      icon: <FaStar className="text-yellow-500" />
    },
    {
      title: "Tech Speaker",
      description: "Regular speaker at tech conferences and meetups",
      icon: <FaGlobe className="text-blue-500" />
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "CSS/SCSS", level: 85 },
    { name: "Git", level: 80 }
  ];

  const testimonials = [
    {
      name: "John Doe",
      position: "CTO at TechCorp",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "An exceptional developer who consistently delivers high-quality code and innovative solutions."
    },
    {
      name: "Jane Smith",
      position: "Product Manager at StartupX",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Working with them was a pleasure. Their attention to detail and problem-solving skills are outstanding."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior Developer",
      company: "Tech Company",
      icon: <HiOutlineBriefcase className="text-2xl" />,
      description: "Leading development teams and implementing modern web solutions"
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Startup Inc",
      icon: <HiOutlineBriefcase className="text-2xl" />,
      description: "Building scalable applications and mentoring junior developers"
    },
    {
      year: "2019",
      title: "Bachelor's Degree",
      company: "University of Technology",
      icon: <HiOutlineAcademicCap className="text-2xl" />,
      description: "Graduated with honors in Computer Science"
    }
  ];

  const features = [
    {
      icon: <FaUser className="text-3xl text-blue-500" />,
      title: "Who Am I",
      description: "A passionate developer with a strong foundation in modern web technologies and a keen eye for creating intuitive user experiences."
    },
    {
      icon: <FaCode className="text-3xl text-green-500" />,
      title: "What I Do",
      description: "I build responsive, scalable, and maintainable web applications using cutting-edge technologies and best practices."
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "My Approach",
      description: "I believe in clean code, continuous learning, and solving complex problems with elegant solutions."
    },
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      title: "My Passion",
      description: "I'm driven by the desire to create meaningful digital experiences that make a positive impact."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl"
              style={glassEffect}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 group-hover:border-blue-600 transition-all duration-300"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full group-hover:bg-blue-600 transition-all duration-300"
                >
                  <FaUser className="text-xl" />
                </motion.div>
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">Your Name</h3>
                <p className="text-gray-600">Full Stack Developer</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2 mx-auto md:mx-0 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  <FaDownload />
                  Download CV
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={glassEffect}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm a dedicated software developer with a passion for creating innovative solutions
                that solve real-world problems. With a strong foundation in both frontend and backend development,
                I strive to build applications that are not only functional but also provide exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                My journey in technology began with a curiosity about how things work, which evolved into
                a deep love for coding and problem-solving. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl"
              style={glassEffect}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Skills</h4>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl"
                  style={glassEffect}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      case 'timeline':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"
                />
                <div className="flex items-center gap-4 mb-2">
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <span className="absolute -left-2 top-0 text-sm font-medium text-blue-500">{item.year}</span>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'testimonials':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl"
                style={glassEffect}
              >
                <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden"
                style={glassEffect}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      <FaGlobe className="text-2xl" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4 mb-8">
              {['about', 'timeline', 'testimonials', 'projects'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex space-x-4 mt-8 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl"
                style={glassEffect}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 