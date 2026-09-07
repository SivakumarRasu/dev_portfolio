import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Layout, Cloud, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-sky-600" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-700" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
      default: return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const categoryNames = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tech Stack <span className="text-gradient">&amp; Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-4">
            Hands-on technical tools and frameworks leveraged to construct native mobile apps, robust backends, and cloud services.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryNames.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 border border-blue-600'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                        skill.isPrimary
                          ? 'bg-blue-50 border border-blue-200 text-blue-700 font-semibold shadow-xs hover:bg-blue-100'
                          : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-3 h-3 ${skill.isPrimary ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} Technologies</span>
                <span className="text-blue-700 font-semibold">Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
