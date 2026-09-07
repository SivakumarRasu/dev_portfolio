import React from 'react';
import { motion } from 'framer-motion';
import { Award, Smartphone, Cloud, ShieldCheck, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default: return <Award className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recognitions &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key <span className="text-gradient-subtle">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-3"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200 glass-panel-hover flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
