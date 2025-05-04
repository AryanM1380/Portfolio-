"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaChartLine, 
  FaRobot, 
  FaLaptopCode, 
  FaGlobe, 
  FaGamepad, 
  FaUsers,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    // Check system preference for dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming & Software Development',
      icon: <FaCode className="text-xl" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', icon: '🐍', level: 90 },
        { name: 'Java', icon: '☕', level: 85 },
        { name: 'Object-Oriented Programming', icon: '🔄', level: 95 },
        { name: 'Software Development Tools', icon: '🛠️', level: 90 },
        { name: 'HTML', icon: '📄', level: 95 },
        { name: 'CSS', icon: '🎨', level: 90 },
        { name: 'JavaScript (Advanced)', icon: '⚡', level: 95 },
        { name: 'Web Frameworks', icon: '🌐', level: 90 },
        { name: 'React Native', icon: '📱', level: 85 },
        { name: 'Cross-platform Development', icon: '🔄', level: 80 },
        { name: 'Game Programming', icon: '🎮', level: 75 },
        { name: 'Game Development', icon: '🎮', level: 75 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development & Databases',
      icon: <FaServer className="text-xl" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'SQL', icon: '🗄️', level: 90 },
        { name: 'NoSQL', icon: '📊', level: 85 },
        { name: 'Node JS', icon: '🟢', level: 90 },
        { name: 'Next JS', icon: '▶️', level: 85 },
        { name: 'PHP', icon: '🐘', level: 80 },
        { name: 'REST APIs', icon: '🔌', level: 95 },
        { name: 'GraphQL', icon: '📈', level: 85 },
        { name: 'Web Services', icon: '🌐', level: 90 },
        { name: 'Web Accessibility', icon: '♿', level: 85 }
      ]
    },
    {
      id: 'data',
      title: 'Data Analysis & AI',
      icon: <FaChartLine className="text-xl" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Data Analysis', icon: '📊', level: 90 },
        { name: 'NumPy', icon: '🔢', level: 85 },
        { name: 'Pandas', icon: '🐼', level: 90 },
        { name: 'Machine Learning', icon: '🤖', level: 80 },
        { name: 'Predictive Analytics', icon: '🔮', level: 75 },
        { name: 'Digital Analytics', icon: '📱', level: 85 },
        { name: 'Social Media Analytics', icon: '📱', level: 80 },
        { name: 'Business Analytics', icon: '📈', level: 85 },
        { name: 'Data Engineering', icon: '⚙️', level: 80 }
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Software Testing',
      icon: <FaRobot className="text-xl" />,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Software Robotics (RPA)', icon: '🤖', level: 85 },
        { name: 'Software Testing', icon: '🧪', level: 90 },
        { name: 'Business Process Automation', icon: '⚙️', level: 85 },
        { name: 'Test Automation', icon: '🔁', level: 90 }
      ]
    },
    {
      id: 'fundamentals',
      title: 'Computer Science Fundamentals',
      icon: <FaLaptopCode className="text-xl" />,
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        { name: 'Operating Systems', icon: '💻', level: 90 },
        { name: 'Computer Networks', icon: '🌐', level: 85 },
        { name: 'Network Security', icon: '🔒', level: 80 },
        { name: 'Virtualization Techniques', icon: '🖥️', level: 75 }
      ]
    },
    {
      id: 'web',
      title: 'Web & UI/UX Development',
      icon: <FaGlobe className="text-xl" />,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'Static Website Development', icon: '🌐', level: 95 },
        { name: 'WordPress', icon: '📝', level: 90 },
        { name: 'Drupal', icon: '🌐', level: 80 },
        { name: 'Web Accessibility', icon: '♿', level: 85 },
        { name: 'WCAG Compliance', icon: '♿', level: 85 },
        { name: 'UI/UX Design', icon: '🎨', level: 90 }
      ]
    },
    {
      id: 'game',
      title: 'Game Development & 3D Modelling',
      icon: <FaGamepad className="text-xl" />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: '3D Modelling (Blender)', icon: '🎨', level: 75 },
        { name: 'Unity', icon: '🎮', level: 80 },
        { name: 'Game Engine Development', icon: '⚙️', level: 75 },
        { name: 'Game Development', icon: '🎮', level: 80 }
      ]
    },
    {
      id: 'management',
      title: 'Communication & Project Management',
      icon: <FaUsers className="text-xl" />,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Customer Communication', icon: '💬', level: 95 },
        { name: 'Agile', icon: '🔄', level: 90 },
        { name: 'Scrum', icon: '📋', level: 85 },
        { name: 'Project Management', icon: '📊', level: 90 },
        { name: 'Research', icon: '🔍', level: 95 }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        background: isDarkMode
          ? 'linear-gradient(to bottom, #111827, #1f2937)'
          : 'linear-gradient(to bottom, #f3f4f6, #ffffff)'
      }}
      role="region"
      aria-label="Skills section"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical capabilities and professional competencies
          </p>
        </motion.div>

        {/* Enhanced Category Navigation */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`sticky top-0 z-50 mb-12 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md' : ''
          }`}
          style={glassEffect}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 py-4">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                  }}
                  aria-label={`View ${category.title} skills`}
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentCategory?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                hoveredSkill === skill.name ? 'ring-2 ring-primary' : ''
              }`}
              style={{
                ...glassEffect,
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
              }}
              role="article"
              aria-label={`${skill.name} skill card`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`absolute h-full rounded-full bg-gradient-to-r ${currentCategory.color}`}
                  />
                </div>

                <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, y: hoveredSkill === skill.name ? 0 : 10 }}
                  className="absolute inset-0 p-6 flex items-center justify-center"
                  style={{
                    ...glassEffect,
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                  }}
                >
                  <div className="text-center">
                    <span className="text-4xl mb-2">{skill.icon}</span>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {skill.level}%
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 