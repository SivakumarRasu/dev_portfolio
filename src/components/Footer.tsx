import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md shadow-blue-600/20">
              {PERSONAL_INFO.brandLogo}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 tracking-tight">{PERSONAL_INFO.name}</h4>
              <p className="text-xs text-slate-500 font-mono">Software Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all active:scale-95 flex items-center gap-2 text-xs font-mono shadow-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. Built with passion and curiosity.
          </div>

          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Designed &amp; Developed by</span>
            <span className="text-blue-700 font-semibold">{PERSONAL_INFO.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
