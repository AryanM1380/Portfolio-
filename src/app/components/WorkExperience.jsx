"use client";

import { useState } from 'react';

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "LightningChart® oy, Finland",
      position: "Data Analyst Intern",
      period: "May 2024 - August 2024",
      location: "Remote",
      description: "During my experience with lighting chart projects, I excelled in conducting DVP testing, creating demo dashboards, and performing data analytics. I played a crucial role in ensuring the reliability and functionality of lighting charts through meticulous DVP testing procedures. Additionally, I leveraged my expertise to design and develop demo dashboards that effectively showcased the capabilities of our lighting solutions to potential clients. Through extensive data analytics, I provided valuable insights and recommendations to optimize performance and enhance user experience. My proficiency in these areas significantly contributed to the success and innovation of lighting chart projects, showcasing my ability to drive results through rigorous testing, compelling demonstrations, and insightful data analysis.",
      skills: ["Data Analysis", "DVP Testing", "Dashboard Development", "Data Visualization", "Performance Optimization"]
    },
    {
      company: "BOVI Oy, Finland",
      position: "Web Developer Intern",
      period: "February 2024 - April 2024",
      location: "Remote",
      description: "During my time at Bovi oy , I specialized in crafting advertisements for restaurants, cafes, and bars. My role involved designing and developing engaging websites using WordPress, collaborating closely with clients to understand their brand identity and marketing objectives. I leveraged innovative strategies to create compelling digital campaigns that exceeded expectations and helped clients attract new patrons in the competitive hospitality industry.",
      skills: ["WordPress", "Web Design", "Digital Marketing", "Client Communication", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My professional journey and contributions
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {exp.company.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="relative">
            {experiences.map((exp, index) => (
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
                        {exp.position}
                      </h3>
                      <p className="text-primary text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end mt-4 md:mt-0">
                      <span className="text-gray-500 dark:text-gray-400 font-medium">
                        {exp.period}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default WorkExperience; 