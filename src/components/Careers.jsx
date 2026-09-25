import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import careerImg from '../assets/career_engineer_1789710523840.png';
import bgImg from '../assets/career_engineer_1789710523840.png';


export default function Careers() {
  const benefits = [
    'Work on exciting infrastructure projects',
    'Learn and grow with senior Class I engineers',
    'Supportive work environment & safety gear',
    'Competitive salary & performance bonuses',
  ];

  return (
    <section id="careers" className="bg-white border-t border-slate-200">
      <PageHeader title="Careers" breadcrumb="Careers" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Join Our Team</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans'] mt-1">
                Be a part of our growing team and build your career with Navadurga Electricals.
              </h3>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md"
              >
                <span>View Openings →</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl max-w-sm">
              <img
                src={careerImg}
                alt="Navadurga Electricals Career Opportunities"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Company Culture Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans']">Life at Navadurga</h3>
            <p className="text-slate-600 text-sm mt-4 max-w-2xl mx-auto">
              We believe that our team is our biggest asset. Working with us means you get hands-on experience on some of the largest electrical and MEP projects in the region, with a strong emphasis on continuous learning and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Continuous Training', desc: 'Regular workshops on the latest MEP software, safety protocols, and new Indian Electricity (IE) rules.' },
              { title: 'Career Progression', desc: 'Clear paths for growth from Junior Technicians to Senior Project Managers.' },
              { title: 'Work-Life Balance', desc: 'Flexible leave policies and robust health insurance for you and your family.' }
            ].map((culture, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">{culture.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{culture.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="mt-24" id="open-positions">
          <h3 className="text-2xl font-black text-slate-900 mb-8 font-['Plus_Jakarta_Sans']">Current Openings</h3>
          
          <div className="space-y-4">
            {[
              { title: 'Senior Electrical Engineer', exp: '5-7 Years', type: 'Full-time', location: 'Bangalore' },
              { title: 'MEP Draftsman (AutoCAD/Revit)', exp: '3-5 Years', type: 'Full-time', location: 'Bangalore' },
              { title: 'Site Supervisor (Plumbing)', exp: '2-4 Years', type: 'Full-time', location: 'On-site' },
              { title: 'Plumbers', exp: '2-4 Years', type: 'Full-time', location: 'On-site' },
              { title: 'Merchants Manager', exp: '3-5 Years', type: 'Full-time', location: 'Bangalore' }
            ].map((job, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{job.title}</h4>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded">Exp: {job.exp}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">{job.type}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">{job.location}</span>
                  </div>
                </div>
                <Link to="/contact" className="mt-4 md:mt-0 px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-blue-600 transition-colors">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-slate-600">
            Don't see a role that fits? Send your resume to <a href="mailto:careers@navadurgaelectricals.com" className="text-blue-600 font-bold hover:underline">careers@navadurgaelectricals.com</a>
          </div>
        </div>

      </div>
    </section>
  );
}
