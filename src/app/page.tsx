import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50 pointer-events-none" />
        
        {/* Main content sections with glass effect and animations */}
        <section className="relative z-10">
          <Hero />
        </section>

        <section>
          <div className="container mx-auto px-4">
            <div>
              <Projects />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 animate-fadeIn">
              <Skills />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 animate-fadeIn">
              <Languages />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 animate-fadeIn">
              <Education />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 animate-fadeIn">
              <WorkExperience />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 animate-fadeIn">
              <Contact />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}