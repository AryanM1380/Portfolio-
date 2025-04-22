"use client";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:aryanm.work@gmail.com" className="text-primary hover:underline">
                    aryanm.work@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                  <a href="https://wa.me/358415707884" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    +358 41 570 7884
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/aryan-mohammadi/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    aryan-mohammadi
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                  <a href="https://github.com/AryanM1380" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    AryanM1380
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

export default Contact; 