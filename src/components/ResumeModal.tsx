import React, { useEffect } from 'react';
import { X, Download, FileText, Smartphone, Award, GraduationCap, Mail, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION_LIST, ACHIEVEMENTS } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Sivakumar_R_Software_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container: Flex Column capped at 85vh */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200 my-auto">
        
        {/* Header Bar: shrink-0 */}
        <div className="p-4 sm:p-5 pb-3 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs font-mono text-blue-700 font-semibold">Sivakumar R &bull; Software Engineer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Resume Preview Sheet: flex-1 overflow-y-auto */}
        <div className="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 font-sans text-slate-700">
          
          {/* Header Info Box with User Photo */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-blue-600 shadow-xs shrink-0">
                  <img
                    src="/assets/profile.jpg"
                    alt="Sivakumar R"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{PERSONAL_INFO.name}</h2>
                  <p className="text-xs text-slate-500 font-mono">
                    B.Tech Information Technology Student &bull; Mobile &amp; Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-blue-100 text-blue-800 border border-blue-200 text-xs font-mono flex items-center gap-1.5 font-semibold"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3 py-1 rounded-lg bg-slate-200 text-slate-800 border border-slate-300 text-xs font-mono flex items-center gap-1.5 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-700 pt-1 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5 font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h4>
            <div className="space-y-2">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{edu.degree}</div>
                    <div className="text-xs text-slate-600">{edu.institution}</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xs font-mono text-blue-700 font-semibold">{edu.period}</div>
                    {edu.grade && <div className="text-xs font-bold text-emerald-700">{edu.grade}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Published Apps Section */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5 font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Published Applications &amp; Projects</span>
            </h4>
            <div className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{proj.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 font-semibold">
                      {proj.badge || proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{proj.shortDescription}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-800 mb-0.5">{cat.title}</div>
                  <div className="text-[11px] text-slate-600 leading-normal">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications &amp; Achievements</span>
            </h4>
            <div className="space-y-1.5">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">{ach.title}: </span>
                    <span className="text-slate-600">{ach.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions: shrink-0 */}
        <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
            Updated CV &bull; 2026 Edition
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 transition-colors"
            >
              Close
            </button>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm flex items-center gap-1.5 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
