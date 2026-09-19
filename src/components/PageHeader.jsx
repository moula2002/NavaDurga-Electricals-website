import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultBg from '../assets/building_facade_1789710711412.png';

export default function PageHeader({ title, breadcrumb, bgImage }) {
  const bg = bgImage || defaultBg;
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) {
    return (
      <div className="relative w-full h-[180px] sm:h-[240px] flex items-center justify-center my-6">
        {/* Wavy Ribbon SVG Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-95 drop-shadow-lg">
          <svg preserveAspectRatio="none" className="w-full h-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Thicker wave path */}
            <path d="M0,20 C360,-30 1080,70 1440,20 L1440,100 C1080,150 360,50 0,100 Z" fill="url(#blueGradient)" />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284c7" />
                <stop offset="0.5" stopColor="#2563eb" />
                <stop offset="1" stopColor="#0369a1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 mt-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-['Plus_Jakarta_Sans'] uppercase tracking-widest drop-shadow-lg text-white">
            {title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative text-white py-14 px-6 overflow-hidden pt-32 shadow-inner border-b border-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#0B1120]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-['Plus_Jakarta_Sans'] text-white">
          {title}
        </h2>
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium mt-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-slate-400 font-black">›</span>
          <span className="text-sky-400 font-bold">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
}
