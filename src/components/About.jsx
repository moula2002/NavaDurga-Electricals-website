import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from './PageHeader';
import aboutImg from '../assets/about_engineer_1789710446645.png';
import bgImg from '../assets/about_engineer_1789710446645.png';
import ceoImg from '../assets/CEO Chethan.jpeg';
import techDirectorImg from '../assets/Technical Director.jpeg';
import gmImg from '../assets/General  manager.jpeg';


export default function About() {
  const highlights = [
    { title: 'Quality Work', desc: 'Govt Class I standards' },
    { title: 'On-Time Delivery', desc: 'Punctual project handover' },
    { title: 'Client Satisfaction', desc: '100+ satisfied clients' },
  ];

  return (
    <section id="about" className="bg-white border-t border-slate-200 overflow-hidden">
      <PageHeader title="About Us" breadcrumb="About Us" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Meet Our Leadership</h4>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Guided by visionaries with extensive industry experience, our leadership team ensures every project meets the highest standards of technical excellence, client satisfaction, and safety.
            </p>
          </div>
          
          <div className="space-y-20 max-w-5xl mx-auto">
            {/* CEO Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
            >
              <div className="w-full md:w-2/5 shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group border-4 border-white">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={ceoImg} 
                    alt="Chethan - CEO" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold tracking-widest uppercase mb-1">
                  Chief Executive Officer
                </div>
                <h5 className="text-3xl md:text-4xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Mr. Chethan</h5>
                <div className="w-16 h-1 bg-blue-600 rounded-full my-4"></div>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  With a visionary approach to the electrical contracting industry, Chethan has steered Navadurga Electricals toward becoming a highly trusted Govt. Class I Contractor. 
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  His leadership heavily focuses on integrating modern innovation, maximizing client satisfaction, and ensuring uncompromised safety standards across all projects. Under his guidance, the company has scaled new heights in delivering large-scale infrastructure deployments.
                </p>
              </div>
            </motion.div>

            {/* Technical Director Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-14"
            >
              <div className="w-full md:w-2/5 shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group border-4 border-white">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={techDirectorImg} 
                    alt="Naveen Kumar - Technical Director" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-4 md:text-right flex flex-col md:items-end">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold tracking-widest uppercase mb-1">
                  Technical Director
                </div>
                <h5 className="text-3xl md:text-4xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Mr. Naveen Kumar</h5>
                <div className="w-16 h-1 bg-blue-600 rounded-full my-4"></div>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  Spearheading our engineering and operational excellence, Naveen brings profound technical expertise to every project. He oversees the intricate technical requirements of massive industrial installations.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  He ensures that all MEP and electrical deployments are executed with absolute precision, strict regulatory compliance, and maximum efficiency. His hands-on approach guarantees that quality control is maintained at every level of execution.
                </p>
              </div>
            </motion.div>

            {/* General Manager Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
            >
              <div className="w-full md:w-2/5 shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group border-4 border-white">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={gmImg} 
                    alt="Mithun - General Manager" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold tracking-widest uppercase mb-1">
                  General Manager
                </div>
                <h5 className="text-3xl md:text-4xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Mr. Mithun</h5>
                <div className="w-16 h-1 bg-blue-600 rounded-full my-4"></div>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  With strong expertise in project management and operational leadership, Mr. Mithun plays a key role in driving the smooth execution and overall growth of Navadurga Electricals.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  His responsibilities focus on coordinating project teams, clients, contractors, and vendors while ensuring timely execution, effective resource management, and adherence to quality and safety standards. His strategic approach helps maintain operational efficiency and strengthens the company’s commitment to delivering reliable electrical and MEP solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-7 space-y-5"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] leading-tight">
              Building <br />
              <span className="text-blue-600">A Brighter Tomorrow</span> <br />
              With Trusted Electrical Solutions
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Navadurga Electricals is a Govt. Authorised Class I Electrical Contractor delivering reliable and high-quality electrical, plumbing, MEP and facility management solutions for residential, commercial and industrial projects across Bangalore and Karnataka.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="bg-white p-4 shadow-xl text-center flex flex-col items-center justify-center space-y-2 group hover:-translate-y-1 transition-transform border border-slate-100"
                  style={{ borderRadius: '25px 8px 25px 8px' }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">✓</div>
                  <h4 className="text-[11px] font-bold text-slate-900 leading-tight uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[9px] text-slate-500 font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 max-w-sm group">
              <img
                src={aboutImg}
                alt="Navadurga Technician Working"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Our Story & Values Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-black text-slate-900 mb-4 font-['Plus_Jakarta_Sans']">Our Story</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Since our inception, Navadurga Electricals has been driven by a singular goal: providing safe, reliable, and innovative electrical solutions. Over the years, we have grown from a small local contractor into a Govt. Authorised Class I Electrical Contractor, serving major industrial, commercial, and residential projects.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We take pride in our skilled team of engineers and technicians who ensure every project strictly adheres to safety standards and is delivered on time, making us a trusted partner across Karnataka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
              <p className="text-slate-600 text-sm">
                To deliver comprehensive MEP and electrical solutions that exceed client expectations through superior quality, timely execution, and unwavering commitment to safety.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h4>
              <p className="text-slate-600 text-sm">
                To be the most preferred and trusted electrical contracting firm in the region, known for innovation, technical excellence, and sustainable infrastructure development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Our Core Values</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Safety First', desc: 'Zero compromise on safety standards.' },
              { title: 'Quality Focus', desc: 'Govt. Class I approved materials & work.' },
              { title: 'Integrity', desc: 'Transparent pricing and honest timelines.' },
              { title: 'Innovation', desc: 'Modern MEP designs and techniques.' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center font-bold text-lg mb-4">
                  {idx + 1}
                </div>
                <h5 className="font-bold text-slate-900 mb-2">{value.title}</h5>
                <p className="text-xs text-slate-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
