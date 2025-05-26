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
    <main className="min-h-screen relative overflow-hidden">
      {/* Clean full-screen background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 animate-gradient" />
      
      {/* Main content sections - now full width */}
      <div className="relative z-10 w-full">
        <section className="w-full h-screen ">
          <Hero />
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-scaleIn">
              <Projects />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-fadeIn max-h-[80vh] overflow-y-auto hide-scrollbar">
              <Skills />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-fadeIn max-h-[80vh] overflow-y-auto hide-scrollbar">
              <Languages />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-fadeIn max-h-[80vh] overflow-y-auto hide-scrollbar">
              <Education />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-fadeIn max-h-[80vh] overflow-y-auto hide-scrollbar">
              <WorkExperience />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="px-4">
            <div className="glass rounded-3xl p-8 animate-fadeIn max-h-[80vh] overflow-y-auto hide-scrollbar">
              <Contact />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}