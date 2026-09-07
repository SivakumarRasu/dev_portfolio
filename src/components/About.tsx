import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Award, CheckCircle2, Terminal, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-4"></div>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Developer Card with Profile Photo & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors"></div>
              
              {/* Profile Header with User Photo */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-md shrink-0">
                  <img
                    src="/assets/profile.jpg"
                    alt="Sivakumar R"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-blue-700 font-mono font-semibold">B.Tech Information Technology</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="py-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Sri Krishna College of Technology</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Mobile App Architect &amp; Developer</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3+ Published Play Store Apps</span>
                </div>
              </div>

              {/* Animated Stat Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Professional Description & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Passionate Developer Engineering <span className="text-gradient">Real-World Software</span>
            </h3>

            <p className="text-base text-slate-700 leading-relaxed">
              {PERSONAL_INFO.aboutDetailed}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              My engineering philosophy revolves around building clean, high-performance applications that deliver real value to users. Whether optimizing native Android memory consumption, designing intuitive Jetpack Compose components, or provisioning cloud APIs on AWS, I focus on write-once, scale-anywhere principles.
            </p>

            {/* Focus Pills Grid */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2 font-semibold">
                <Code className="w-4 h-4 text-blue-600" />
                <span>Primary Areas of Focus</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Android Development',
                  'Flutter Development',
                  'Jetpack Compose',
                  'Full Stack Systems',
                  'FastAPI & Spring Boot',
                  'Cloud & AWS',
                  'UI/UX Aesthetics',
                  'RESTful APIs'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 text-xs font-medium text-slate-800 shadow-sm transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
