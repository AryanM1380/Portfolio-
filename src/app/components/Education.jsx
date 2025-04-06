// src/app/components/Education.jsx

"use client";

import { useState } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const education = [
    {
      school: "HAMK University of Applied Sciences",
      degree: "Bachelor of Business Administration",
      period: "2023 - Present",
      location: "Hämeenlinna, Finland",
      description: "Currently pursuing a degree in Business Administration with a focus on digital business and technology management. The program combines business fundamentals with modern digital technologies and management practices.",
      achievements: [
        "Focus on Mathematics and Physics",
        "Active participation in student organizations",
        "Regular academic excellence recognition"
      ]
    },
    {
      school: "Language Studies in Austria",
      degree: "Language Certification",
      period: "2022 - 2023",
      location: "Austria",
      description: "Intensive language study program focusing on German language proficiency. Developed strong communication skills and cultural understanding through immersive learning experiences.",
      achievements: [
        "Achieved B2 level proficiency",
        "Participated in cultural exchange programs",
        "Developed cross-cultural communication skills"
      ]
    },
    {
      school: "High School",
      degree: "General Education",
      period: "2019 - 2022",
      location: "Finland",
      description: "Completed high school education with a strong focus on Mathematics and Physics. Developed analytical and problem-solving skills through rigorous coursework and practical applications.",
      achievements: [
        "High academic performance in STEM subjects",
        "Active participation in science competitions",
        "Developed strong analytical skills"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My academic journey and achievements
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Education Timeline Navigation */}
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {education.map((edu, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeIndex === index
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {edu.school}
                </button>
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <div className="relative">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 transform ${
                  activeIndex === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary text-lg font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-col items-end mt-4 md:mt-0">
                      <span className="text-gray-500 dark:text-gray-400 font-medium">
                        {edu.period}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;