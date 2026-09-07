import React, { useEffect } from 'react';
import { X, ExternalLink, Smartphone, ShieldCheck, Sparkles, CheckCircle2, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container: Flex Column capped at 85vh */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200 my-auto">
        
        {/* Header Bar: shrink-0 */}
        <div className="p-4 sm:p-5 pb-3 border-b border-slate-200 flex items-start justify-between gap-4 shrink-0 bg-white">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200 mb-1 font-semibold">
              {project.isExperimental ? (
                <Sparkles className="w-3 h-3 text-amber-600" />
              ) : (
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
              )}
              <span>{project.badge || project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-blue-700 font-semibold">{project.category}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body Scrollable: flex-1 overflow-y-auto */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 text-slate-700">
          
          {/* Full Description */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 font-semibold">
              Overview &amp; Architecture
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlight Features */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2.5 flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Key Technical Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlightFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2 text-xs text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5 font-semibold">
              <Code className="w-3.5 h-3.5 text-indigo-600" />
              <span>Technologies &amp; Libraries</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experimental Note Disclaimer if Musico */}
          {project.isExperimental && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Experimental / Independent Project Notice
              </div>
              <p className="text-[11px]">
                This project represents an independent technical experiment exploring backend microservices, REST APIs, and cloud media streaming architecture.
              </p>
            </div>
          )}

        </div>

        {/* Modal Action Footer: shrink-0 */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-end gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
          >
            Close
          </button>

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>View on Google Play</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          )}

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-sm flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Explore Live Project</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
