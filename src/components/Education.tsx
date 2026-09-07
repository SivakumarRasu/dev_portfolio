import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education <span className="text-gradient">&amp; Academics</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Education Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50/50 rounded-full blur-2xl group-hover:bg-indigo-100/50 transition-colors"></div>

              {/* Period & Grade Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.period}</span>
                </div>

                {item.grade && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.grade}</span>
                  </div>
                )}
              </div>

              {/* Degree & College */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.degree}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-4">
                <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{item.institution}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{item.location}</span>
              </div>

              {/* Bullet highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
