"use client";

const Experience = () => {
  const experiences = [
    {
      company: "LightningChart® oy, Finland",
      position: "Data Analyst Intern",
      period: "May 2024 - August 2024",
      location: "Remote",
      description: "During my experience with lighting chart projects, I excelled in conducting DVP testing, creating demo dashboards, and performing data analytics. I played a crucial role in ensuring the reliability and functionality of lighting charts through meticulous DVP testing procedures. Additionally, I leveraged my expertise to design and develop demo dashboards that effectively showcased the capabilities of our lighting solutions to potential clients. Through extensive data analytics, I provided valuable insights and recommendations to optimize performance and enhance user experience. My proficiency in these areas significantly contributed to the success and innovation of lighting chart projects, showcasing my ability to drive results through rigorous testing, compelling demonstrations, and insightful data analysis."
    },
    {
      company: "BOVI Oy, Finland",
      position: "Web Developer Intern",
      period: "February 2024 - April 2024",
      location: "Remote",
      description: "During my time at Bovi oy , I specialized in crafting advertisements for restaurants, cafes, and bars. My role involved designing and developing engaging websites using WordPress, collaborating closely with clients to understand their brand identity and marketing objectives. I leveraged innovative strategies to create compelling digital campaigns that exceeded expectations and helped clients attract new patrons in the competitive hospitality industry."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col items-end mt-2 md:mt-0">
                  <span className="text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 