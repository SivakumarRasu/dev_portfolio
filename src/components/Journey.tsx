import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GraduationCap, Smartphone, Layers, Rocket, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-sky-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-emerald-600" />;
      default: return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Development <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-4">
            How I evolved from foundational computer science theory into building published production mobile applications and cloud backends.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 via-sky-400 to-emerald-400 opacity-40"></div>

          <div className="space-y-12">
            {JOURNEY_MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md z-20">
                    {getIcon(item.iconName)}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="glass-panel p-6 rounded-3xl border border-slate-200 glass-panel-hover relative space-y-3">
                      
                      {/* Year & Subtitle Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold">
                          {item.year}
                        </span>
                        <span className="text-xs font-mono text-slate-500">{item.subtitle}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Milestone Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
