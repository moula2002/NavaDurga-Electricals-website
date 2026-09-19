import React from 'react';
import PageHeader from './PageHeader';
import bgImg from '../assets/building_facade_1789710711412.png';


export default function Testimonials() {
  const reviews = [
    {
      text: "Excellent service and on-time delivery. Highly professional team!",
      author: "Rakesh Kumar",
      role: "Project Manager",
      rating: 5,
    },
    {
      text: "Reliable and quality electrical execution. Recommend them for any project.",
      author: "Priya R",
      role: "Site Engineer",
      rating: 5,
    },
    {
      text: "Good support and maintenance service. Very satisfied with their work.",
      author: "Anand K",
      role: "Client",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white border-t border-slate-200">
      <PageHeader title="Testimonials" breadcrumb="Testimonials" bgImage={bgImg} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform"
              style={{ borderRadius: '25px 8px 25px 8px' }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.author}</h4>
                  <span className="text-[10px] text-slate-500">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
