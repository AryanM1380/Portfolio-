"use client";

import { motion } from 'framer-motion';
import { FaLanguage, FaGlobe, FaBook, FaComment } from 'react-icons/fa';

const Languages = () => {
  const languages = [
    {
      id: 1,
      name: "Persian",
      level: "Native",
      proficiency: 100,
      icon: <FaLanguage className="text-2xl text-white" />,
      color: "from-green-500 to-green-600",
      description: "Native language with complete fluency in speaking, reading, and writing"
    },
    {
      id: 2,
      name: "English",
      level: "Fluent",
      proficiency: 90,
      icon: <FaGlobe className="text-2xl text-white" />,
      color: "from-blue-500 to-blue-600",
      description: "Professional working proficiency with excellent communication skills"
    },
    {
      id: 3,
      name: "German",
      level: "Intermediate",
      proficiency: 70,
      icon: <FaBook className="text-2xl text-white" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Intermediate level with good conversational skills and basic writing"
    },
    {
      id: 4,
      name: "Finnish",
      level: "Basic",
      proficiency: 40,
      icon: <FaComment className="text-2xl text-white" />,
      color: "from-purple-500 to-purple-600",
      description: "Basic understanding and communication skills, currently learning"
    }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-b from-[#181c2a] to-[#232946]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Languages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My language proficiency and communication skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${language.color}`}>
                      {language.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {language.name}
                    </h3>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>{language.level}</span>
                    <span>{language.proficiency}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${language.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`absolute h-full rounded-full bg-gradient-to-r ${language.color}`}
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {language.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Speaking</span>
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${language.color}`} style={{ width: `${language.proficiency}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Writing</span>
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${language.color}`} style={{ width: `${language.proficiency}%` }} />
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

export default Languages; 