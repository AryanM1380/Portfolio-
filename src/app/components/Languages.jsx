"use client";

import { motion } from 'framer-motion';
import { FaLanguage, FaGlobe, FaBook, FaComment } from 'react-icons/fa';

const Languages = () => {
  const languages = [
    {
      id: 1,
      name: "Persian",
      level: "Native",
      icon: <FaLanguage className="text-2xl" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      name: "English",
      level: "Fluent",
      icon: <FaGlobe className="text-2xl" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      name: "German",
      level: "Intermediate",
      icon: <FaBook className="text-2xl" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 4,
      name: "Finnish",
      level: "Basic",
      icon: <FaComment className="text-2xl" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Languages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My language proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${language.color}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${language.color} text-white`}>
                    {language.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {language.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {language.level}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages; 