import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Code2, Music, Wallet, Mic, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, index }) => {
  const [imageError, setImageError] = useState(false);

  const getThemeClasses = (themeColor: Project['themeColor']) => {
    switch (themeColor) {
      case 'blue':
        return {
          bg: 'bg-blue-50/50',
          badge: 'bg-blue-100 border-blue-200 text-blue-800',
          button: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20',
          iconBg: 'bg-blue-100 text-blue-700',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50/50',
          badge: 'bg-emerald-100 border-emerald-200 text-emerald-800',
          button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20',
          iconBg: 'bg-emerald-100 text-emerald-700',
        };
      case 'purple':
        return {
          bg: 'bg-purple-50/50',
          badge: 'bg-purple-100 border-purple-200 text-purple-800',
          button: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20',
          iconBg: 'bg-purple-100 text-purple-700',
        };
      case 'amber':
        return {
          bg: 'bg-amber-50/50',
          badge: 'bg-amber-100 border-amber-200 text-amber-800',
          button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20',
          iconBg: 'bg-amber-100 text-amber-700',
        };
    }
  };

  const theme = getThemeClasses(project.themeColor);

  const renderProjectIcon = (id: string) => {
    switch (id) {
      case 'heamix': return <Music className="w-6 h-6" />;
      case 'speney': return <Wallet className="w-6 h-6" />;
      case 'lyrewave': return <Mic className="w-6 h-6" />;
      case 'musico': return <Play className="w-6 h-6" />;
      default: return <Smartphone className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-panel rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        {/* Visual Header / Device Placeholder Mockup */}
        <div className={`relative h-60 w-full overflow-hidden ${theme.bg} border-b border-slate-200 flex items-center justify-center p-4`}>
          
          {/* Top Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono border font-semibold flex items-center gap-1.5 shadow-xs ${theme.badge}`}>
              {project.isExperimental ? (
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              ) : (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              )}
              {project.badge || project.category}
            </span>
          </div>

          {/* Project Screenshot or Fallback Visual */}
          {!imageError ? (
            <img
              src={project.imagePlaceholder}
              alt={`${project.title} screenshot`}
              onError={() => setImageError(true)}
              className="max-h-52 w-auto object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 z-0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-3 z-10">
              <div className={`p-4 rounded-2xl ${theme.iconBg} shadow-sm`}>
                {renderProjectIcon(project.id)}
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">{project.title}</h4>
                <p className="text-xs text-slate-600 font-mono mt-1">{project.category}</p>
              </div>
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="p-6 sm:p-7 space-y-4">
          
          {/* Title & Category */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-blue-700 mt-0.5 font-semibold">{project.category}</p>
            </div>

            <button
              onClick={() => onOpenModal(project)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors"
              title="View Architecture & Features"
            >
              <Code2 className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-1.5 pt-2">
            {project.highlightFeatures.slice(0, 3).map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-2 pt-3">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold ${theme.button} shadow-md flex items-center justify-center gap-2 transition-all duration-200 active:scale-95`}
          >
            <Smartphone className="w-4 h-4" />
            <span>View on Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        )}

        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold ${theme.button} shadow-md flex items-center justify-center gap-2 transition-all duration-200 active:scale-95`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Explore Project</span>
          </a>
        )}

        <button
          onClick={() => onOpenModal(project)}
          className="py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-colors"
        >
          Details
        </button>
      </div>
    </motion.div>
  );
};
