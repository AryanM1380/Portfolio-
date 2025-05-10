// src/app/components/Education.jsx

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaChevronDown, FaBook, FaUserGraduate } from 'react-icons/fa';

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const educationData = [
    {
      id: 1,
      school: "HAMK University of Applied Sciences",
      degree: "Bachelor of Business Administration",
      period: "2022 - 2025",
      location: "Hämeenlinna, Finland",
      description: "Currently pursuing a degree in Business Administration with a focus on digital business and technology management. The program combines business fundamentals with modern digital technologies and management practices.",
      achievements: [
        "Focus on Mathematics and Physics",
        "Active participation in student organizations",
        "Regular academic excellence recognition"
      ],
      icon: <FaUserGraduate className="text-xl" />
    },
    {
      id: 2,
      school: "Language Studies in Austria",
      degree: "Language Studies",
      period: "2020 - 2021",
      location: "Austria",
      description: "Intensive language studies focusing on German and cultural immersion.",
      achievements: [
        "Advanced German language proficiency",
        "Cultural exchange participation",
        "International student collaboration"
      ],
      icon: <FaBook className="text-xl" />
    },
    {
      id: 3,
      school: "High School",
      degree: "High School Diploma",
      period: "2017 - 2020",
      location: "Iran",
      description: "Completed high school education with a focus on Mathematics and Physics.",
      achievements: [
        "Top performer in Mathematics",
        "Physics competition participant",
        "Student council member"
      ],
      icon: <FaGraduationCap className="text-xl" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-[#181c2a] to-[#232946]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onHoverStart={() => setHoveredId(edu.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div 
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 cursor-pointer ${
                  expandedId === edu.id 
                    ? 'shadow-2xl scale-105 ring-2 ring-primary/20' 
                    : 'hover:shadow-xl hover:-translate-y-1'
                }`}
                onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ${
                  expandedId === edu.id ? 'h-2' : ''
                }`} />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {edu.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ filter: 'blur(8px)' }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      {edu.period}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      {edu.location}
                    </p>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedId === edu.id ? "auto" : 0,
                      opacity: expandedId === edu.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <FaTrophy className="text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: expandedId === edu.id ? 1 : 0, x: expandedId === edu.id ? 0 : -20 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group/achievement"
                            >
                              <span className="mr-2 text-primary group-hover/achievement:scale-110 transition-transform">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-center mt-4"
                    animate={{ rotate: expandedId === edu.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-primary" />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredId === edu.id ? 1 : 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;