"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProject = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      metrics: {
        performance: "98%",
        users: "10K+",
        revenue: "$500K+"
      },
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      testimonial: {
        text: "The platform has transformed our business operations and significantly improved our sales.",
        author: "John Doe",
        role: "CEO, Company Name"
      }
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for real-time data visualization and business intelligence.",
      image: "/project2.jpg",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "AWS"],
      metrics: {
        performance: "95%",
        users: "5K+",
        dataPoints: "1M+"
      },
      github: "https://github.com/yourusername/analytics",
      demo: "https://demo-analytics.com",
      testimonial: {
        text: "The insights provided by this dashboard have been invaluable for our decision-making process.",
        author: "Jane Smith",
        role: "Data Analyst, Company Name"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Check out some of my most impactful projects that demonstrate my skills and expertise
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Navigation */}
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`w-full p-4 rounded-lg transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </button>
              ))}
            </div>

            {/* Project Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-3">
                    Project Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(projects[activeProject].metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                      >
                        <p className="text-2xl font-bold text-primary">{value}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                    "{projects[activeProject].testimonial.text}"
                  </p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-white">
                    {projects[activeProject].testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {projects[activeProject].testimonial.role}
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={projects[activeProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject; 