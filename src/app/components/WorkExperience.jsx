"use client";

import { useState } from 'react';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "LightningChart®",
      location: "Tampere, Finland",
      duration: "January 2023 - August 2023",
      description: "Developed and maintained high-performance charting libraries for data visualization.",
      responsibilities: [
        "Implemented new chart types and features for the LightningChart library",
        "Optimized rendering performance for large datasets",
        "Collaborated with the design team to improve user experience",
        "Fixed bugs and improved code quality"
      ],
      achievements: [
        "Reduced rendering time by 40% for complex visualizations",
        "Implemented 3 new chart types that were requested by customers",
        "Improved test coverage from 65% to 85%"
      ],
      skills: ["JavaScript", "TypeScript", "WebGL", "Canvas API", "React", "Git"],
      website: "https://www.lightningchart.com/"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "BOVI Oy",
      location: "Hämeenlinna, Finland",
      duration: "June 2022 - December 2022",
      description: "Developed and maintained web applications for a local business.",
      responsibilities: [
        "Built responsive web interfaces using modern frameworks",
        "Integrated payment gateways and third-party APIs",
        "Implemented user authentication and authorization",
        "Optimized website performance and SEO"
      ],
      achievements: [
        "Increased website traffic by 35% through SEO improvements",
        "Reduced page load time by 50%",
        "Implemented a new booking system that increased conversions by 25%"
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      website: "https://www.bovi.fi/"
    }
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline tabs */}
          <div className="flex flex-col md:flex-row mb-6 border-b border-gray-200 dark:border-gray-700">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-left transition-colors duration-300 ${
                  activeTab === index
                    ? "border-b-2 border-primary text-primary dark:text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <div className="font-medium">{job.company}</div>
                <div className="text-xs">{job.duration}</div>
              </button>
            ))}
          </div>
          
          {/* Job details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {jobs[activeTab].title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {jobs[activeTab].company}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <a
                  href={jobs[activeTab].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {jobs[activeTab].location} • {jobs[activeTab].duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {jobs[activeTab].description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Responsibilities</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {jobs[activeTab].responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Achievements</h4>
                <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {jobs[activeTab].achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {jobs[activeTab].skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 