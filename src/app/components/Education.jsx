// src/app/components/Education.jsx

"use client";

import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState(0);

  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Tampere University",
      location: "Tampere, Finland",
      duration: "2021 - 2023",
      description: "Specialized in Software Engineering and Web Technologies. Focused on modern web development frameworks, cloud computing, and software architecture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Helsinki",
      location: "Helsinki, Finland",
      duration: "2017 - 2021",
      description: "Studied fundamental computer science concepts, algorithms, data structures, and programming languages. Participated in various hackathons and coding competitions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "Helsinki High School",
      location: "Helsinki, Finland",
      duration: "2014 - 2017",
      description: "Focused on mathematics, physics, and computer science. Participated in robotics club and programming competitions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline tabs */}
          <div className="flex flex-col md:flex-row mb-8 border-b border-gray-200 dark:border-gray-700">
            {educationData.map((edu, index) => (
              <button
                key={edu.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-left transition-colors duration-300 ${
                  activeTab === index
                    ? "border-b-2 border-primary text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <div className="font-medium">{edu.institution}</div>
                <div className="text-sm">{edu.duration}</div>
              </button>
            ))}
          </div>
          
          {/* Education details */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="text-primary mr-4">
                  {educationData[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {educationData[activeTab].degree}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {educationData[activeTab].institution}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {educationData[activeTab].location}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Duration
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {educationData[activeTab].duration}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Description
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {educationData[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;