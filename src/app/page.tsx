import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <br></br>
      <WorkExperience />
      <br></br>
      {/* <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with other developers, share your thoughts, and engage in meaningful discussions.
          </p>
          <Link 
            href="/community" 
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg font-medium"
          >
            Visit Community
          </Link>
        </div>
      </div> */}
      <Contact />
      <Footer />
    </main>
  );
}