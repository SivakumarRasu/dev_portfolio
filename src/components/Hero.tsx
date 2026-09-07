import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Smartphone, Terminal, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Greeting, Role, Subtitle, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>{PERSONAL_INFO.heroTagline}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none">
              {PERSONAL_INFO.name}
            </h1>

            {/* Dynamic Typewriter Professional Role */}
            <div className="h-12 sm:h-14 flex items-center">
              <span className="text-2xl sm:text-4xl font-bold text-gradient font-mono">
                {displayText}
              </span>
              <span className="w-0.5 h-8 sm:h-10 bg-blue-600 ml-1 animate-pulse"></span>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 hover:border-slate-400 shadow-sm transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                <span>Contact Me</span>
              </button>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 transition-all duration-200 shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-600">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 flex items-center gap-1.5 shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" /> Kotlin / Android
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 flex items-center gap-1.5 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-sky-600" /> Flutter
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 flex items-center gap-1.5 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" /> FastAPI / Spring Boot
              </span>
            </div>
          </motion.div>

          {/* Right Column: Frameless Cutout Portrait of Sivakumar R Standing Directly on Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[460px]"
          >
            {/* Ambient Background Halo Light Effect behind the portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-sky-100/40 to-indigo-200/50 rounded-full blur-3xl transform scale-110 pointer-events-none"></div>

            {/* The Cutout Image standing freely without card frames or borders */}
            <div className="relative z-10 flex items-center justify-center w-full max-w-[380px] sm:max-w-[420px]">
              <img
                src="/assets/profile_cutout.png"
                alt="Sivakumar R - Software Developer"
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
              />

              {/* Floating Badge 1: Top Left - Published Mobile Apps */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 -left-10 sm:-left-24 lg:-left-28 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center gap-3 z-20 pointer-events-auto hover:scale-105 transition-transform"
              >
                <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0 flex items-center justify-center">
                  <img src="/assets/playstore_icon.png" alt="Google Play Store" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">3 Published Apps</div>
                  <div className="text-[10px] text-slate-500 font-mono">Google Play Store</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right - Mobile Architect */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center gap-3"
              >
                <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0 flex items-center justify-center">
                  <img src="/assets/tech_badge_icon.png" alt="Kotlin &amp; Flutter" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Kotlin &amp; Flutter</div>
                  <div className="text-[10px] text-slate-500 font-mono">Mobile &amp; Cloud API</div>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
        <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 shadow-sm"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};
