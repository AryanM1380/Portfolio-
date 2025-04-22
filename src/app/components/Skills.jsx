"use client";

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming & Software Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: 'Object-Oriented Programming', icon: '🔄' },
        { name: 'Software Development Tools', icon: '🛠️' },
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript (Advanced)', icon: '⚡' },
        { name: 'Web Frameworks', icon: '🌐' },
        { name: 'React Native', icon: '📱' },
        { name: 'Cross-platform Development', icon: '🔄' },
        { name: 'Game Programming', icon: '🎮' },
        { name: 'Game Development', icon: '🎮' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development & Databases',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: [
        { name: 'SQL', icon: '🗄️' },
        { name: 'NoSQL', icon: '📊' },
        { name: 'Node JS', icon: '🟢' },
        { name: 'Next JS', icon: '▶️' },
        { name: 'PHP', icon: '🐘' },
        { name: 'REST APIs', icon: '🔌' },
        { name: 'GraphQL', icon: '📈' },
        { name: 'Web Services', icon: '🌐' },
        { name: 'Web Accessibility', icon: '♿' }
      ]
    },
    {
      id: 'data',
      name: 'Data Analysis & AI',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        { name: 'Data Analysis', icon: '📊' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'Machine Learning', icon: '🤖' },
        { name: 'Predictive Analytics', icon: '🔮' },
        { name: 'Digital Analytics', icon: '📱' },
        { name: 'Social Media Analytics', icon: '📱' },
        { name: 'Business Analytics', icon: '📈' },
        { name: 'Data Engineering', icon: '⚙️' }
      ]
    },
    {
      id: 'automation',
      name: 'Automation & Software Testing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: [
        { name: 'Software Robotics (RPA)', icon: '🤖' },
        { name: 'Software Testing', icon: '🧪' },
        { name: 'Business Process Automation', icon: '⚙️' },
        { name: 'Test Automation', icon: '🔁' }
      ]
    },
    {
      id: 'fundamentals',
      name: 'Computer Science Fundamentals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'Operating Systems', icon: '💻' },
        { name: 'Computer Networks', icon: '🌐' },
        { name: 'Network Security', icon: '🔒' },
        { name: 'Virtualization Techniques', icon: '🖥️' }
      ]
    },
    {
      id: 'web',
      name: 'Web & UI/UX Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: [
        { name: 'Static Website Development', icon: '🌐' },
        { name: 'WordPress', icon: '📝' },
        { name: 'Drupal', icon: '🌐' },
        { name: 'Web Accessibility', icon: '♿' },
        { name: 'WCAG Compliance', icon: '♿' },
        { name: 'UI/UX Design', icon: '🎨' }
      ]
    },
    {
      id: 'game',
      name: 'Game Development & 3D Modelling',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: '3D Modelling (Blender)', icon: '🎨' },
        { name: 'Unity', icon: '🎮' },
        { name: 'Game Engine Development', icon: '⚙️' },
        { name: 'Game Development', icon: '🎮' }
      ]
    },
    {
      id: 'management',
      name: 'Communication & Project Management',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: [
        { name: 'Customer Communication', icon: '💬' },
        { name: 'Agile', icon: '🔄' },
        { name: 'Scrum', icon: '📋' },
        { name: 'Project Management', icon: '📊' },
        { name: 'Research', icon: '🔍' }
      ]
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      skills: [
        { name: 'Finnish', level: 'Basic' },
        { name: 'English', level: 'Fluently' },
        { name: 'German', level: 'Intermediate' },
        { name: 'Farsi', level: 'Native' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors flex items-center ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories
            .find(category => category.id === activeCategory)
            ?.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  {activeCategory === 'languages' ? (
                    <div className="flex items-center w-full">
                      <div className="flex-1">
                        <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({skill.level})</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 