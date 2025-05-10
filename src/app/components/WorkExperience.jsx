"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkExperience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Data Analyst Intern",
      company: "LightningChart® oy",
      period: "May 2024 - August 2024",
      location: "Remote, Finland",
      description: "During my experience with lighting chart projects, I excelled in conducting DVP testing, creating demo dashboards, and performing data analytics. I played a crucial role in ensuring the reliability and functionality of lighting charts through meticulous DVP testing procedures. Additionally, I leveraged my expertise to design and develop demo dashboards that effectively showcased the capabilities of our lighting solutions to potential clients. Through extensive data analytics, I provided valuable insights and recommendations to optimize performance and enhance user experience.",
      skills: ["Data Analysis", "DVP Testing", "Dashboard Development", "Data Visualization", "Performance Optimization"]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "BOVI Oy",
      period: "February 2024 - April 2024",
      location: "Remote, Finland",
      description: "As a Web Developer Intern at BOVI Oy, I focused on developing and maintaining web applications using modern technologies. I collaborated with the development team to implement new features, fix bugs, and improve application performance. My role involved working with both frontend and backend technologies, ensuring high-quality code delivery and optimal user experience.",
      skills: ["React", "Node.js", "MongoDB", "Full-Stack Development", "API Integration"]
    }
  ];

  return (
    <section id="work-experience" className="py-16 bg-gradient-to-b from-[#181c2a] to-[#232946]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Work Experience
        </h2>
        <p className="text-center text-gray-300 mb-12">
          My professional journey and achievements
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                
                <motion.div
                  className={`ml-12 p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                    expandedId === exp.id
                      ? 'bg-primary/10 dark:bg-primary/20'
                      : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {exp.description}
                        </p>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Key Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 