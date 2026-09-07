import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { CURRENT_FOCUS_TOPICS } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Active Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Currently <span className="text-gradient">Exploring</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3"></div>
        </div>

        {/* Floating Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CURRENT_FOCUS_TOPICS.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-panel p-5 rounded-3xl border border-slate-200 relative overflow-hidden flex flex-col justify-between group bg-white hover:border-blue-300 shadow-sm"
            >
              <div className="relative z-10 space-y-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 w-fit shadow-xs flex items-center justify-center min-w-[52px] min-h-[52px]">
                  {topic.icon.startsWith('/') || topic.icon.endsWith('.png') || topic.icon.endsWith('.svg') ? (
                    <img src={topic.icon} alt={topic.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <span className="text-2xl">{topic.icon}</span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 flex items-center gap-1.5 text-[10px] font-mono text-blue-700 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
                <span>Active Research</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
