// src/app/components/Education.jsx

"use client";

import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My academic journey and achievements
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {educationData.map((edu, index) => (
            <button
              key={edu.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {edu.school}
            </button>
          ))}
        </div>

        {/* Education Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {educationData[activeTab].degree}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {educationData[activeTab].school}
                </p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-600 dark:text-gray-400">
                  {educationData[activeTab].period}
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  {educationData[activeTab].location}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {educationData[activeTab].description}
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {educationData[activeTab].achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2 text-primary">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;