"use client";

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming & Software Development',
      skills: [
        'Python',
        'Java',
        'Object-Oriented Programming',
        'Software Development Tools',
        'HTML',
        'CSS',
        'JavaScript (Advanced)',
        'Web Frameworks',
        'React Native',
        'Cross-platform Development',
        'Game Programming',
        'Game Development'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development & Databases',
      skills: [
        'SQL',
        'NoSQL',
        'Node JS',
        'Next JS',
        'PHP',
        'REST APIs',
        'GraphQL',
        'Web Services',
        'Web Accessibility'
      ]
    },
    {
      id: 'data',
      name: 'Data Analysis & AI',
      skills: [
        'Data Analysis',
        'NumPy',
        'Pandas',
        'Machine Learning',
        'Predictive Analytics',
        'Digital Analytics',
        'Social Media Analytics',
        'Business Analytics',
        'Data Engineering'
      ]
    },
    {
      id: 'automation',
      name: 'Automation & Software Testing',
      skills: [
        'Software Robotics (RPA)',
        'Software Testing',
        'Business Process Automation',
        'Test Automation'
      ]
    },
    {
      id: 'fundamentals',
      name: 'Computer Science Fundamentals',
      skills: [
        'Operating Systems',
        'Computer Networks',
        'Network Security',
        'Virtualization Techniques'
      ]
    },
    {
      id: 'web',
      name: 'Web & UI/UX Development',
      skills: [
        'Static Website Development',
        'WordPress',
        'Drupal',
        'Web Accessibility',
        'WCAG Compliance',
        'UI/UX Design'
      ]
    },
    {
      id: 'game',
      name: 'Game Development & 3D Modelling',
      skills: [
        '3D Modelling (Blender)',
        'Unity',
        'Game Engine Development',
        'Game Development'
      ]
    },
    {
      id: 'management',
      name: 'Communication & Project Management',
      skills: [
        'Customer Communication',
        'Agile',
        'Scrum',
        'Project Management',
        'Research'
      ]
    },
    {
      id: 'languages',
      name: 'Languages',
      skills: [
        'Finnish (Basic)',
        'English (Fluently)',
        'German (Intermediate)',
        'Farsi (Native)'
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
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
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
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 