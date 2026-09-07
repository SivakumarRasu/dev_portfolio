import { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Achievements } from './components/Achievements';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 selection:bg-brand-blue/30 selection:text-brand-cyan font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Effects */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
