import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GithubActivity } from './components/GithubActivity';
import { Contact } from './components/Contact';
import { QuickConnect } from './components/QuickConnect';
import { Footer } from './components/Footer';
import { Starfield } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC] relative selection:bg-[#3B82F6]/25 selection:text-[#F8FAFC]">
      <CustomCursor />
      <Starfield />

      <Navbar />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubActivity />
        <Contact />
        <QuickConnect />
        <Footer />
      </main>
    </div>
  );
}
