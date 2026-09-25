import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import slideElectrical from '../assets/electrical_hero_bg.png';
import slidePlumbing from '../assets/plumbing_pipes_1789710473426.png';
import slideMaintenance from '../assets/service_mgmt.png';
import slideDesign from '../assets/mep_blueprint_1789710498568.png';
import slideFacility from '../assets/projects/facility_team.jpg';
import slidePwdCivil from '../assets/pwd_civil_contractor.jpg';

export default function Banner({ onOpenQuoteModal }) {
  const slides = [
    {
      image: slideElectrical,
      title: 'HT/LT Electrical Services',
      subtitle: 'Govt. Authorised Class-I Transformer, Substation & Power Distribution',
      buttonText: 'Explore Service',
      buttonLink: '/services/ht-lt',
      align: 'center'
    },
    {
      image: slidePlumbing,
      title: 'Plumbing Services',
      subtitle: 'Commercial & Industrial Heavy Duty Piping Systems',
      buttonText: 'Explore Service',
      buttonLink: '/services/plumbing',
      align: 'center'
    },
    {
      image: slideMaintenance,
      title: 'MEP Maintenance',
      subtitle: '24/7 Preventive & Emergency MEP AMC Maintenance',
      buttonText: 'Explore Service',
      buttonLink: '/services/mep-maintenance',
      align: 'center'
    },
    {
      image: slideDesign,
      title: 'MEP Designing',
      subtitle: 'CAD Blueprints, Electrical Load Schemes & Mechanical Layouts',
      buttonText: 'Explore Service',
      buttonLink: '/services/mep-designing',
      align: 'center'
    },
    {
      image: slideFacility,
      title: 'Facility Management',
      subtitle: 'Complete Building Utilities & Infrastructure Management',
      buttonText: 'Explore Service',
      buttonLink: '/services/facility-management',
      align: 'center'
    },
    {
      image: slidePwdCivil,
      title: 'Civil Maintenance',
      subtitle: 'Govt. Authorised PWD Civil Maintenance & Infrastructure Upkeep',
      buttonText: 'Explore Service',
      buttonLink: '/services/pwd-civil-contractor',
      align: 'center'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section id="banner" className="relative w-full bg-slate-900 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20">
              <div
                className={`w-full max-w-3xl ${slide.align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
              >
                <div className="animate-[fade-in-up_1s_ease-out_forwards]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-8 drop-shadow">
                    {slide.subtitle}
                  </p>

                  <div className={`flex flex-wrap gap-4 ${slide.align === 'center' ? 'justify-center' : 'justify-start'}`}>
                    {slide.buttonAction ? (
                      <button
                        onClick={slide.buttonAction}
                        className="px-8 py-3.5 rounded-sm border-2 border-white/80 bg-transparent text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#002f6c] transition-all shadow-lg flex items-center gap-2 group"
                      >
                        <span>{slide.buttonText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        to={slide.buttonLink}
                        className="px-8 py-3.5 rounded-sm border-2 border-white/80 bg-transparent text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#002f6c] transition-all shadow-lg flex items-center gap-2 group"
                      >
                        <span>{slide.buttonText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Dark Blue Metrics Bar */}
      <div className="relative z-20 bg-[#002f6c] text-white py-6 sm:py-8 border-t border-[#001f4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
                <span className="text-2xl sm:text-4xl font-black tracking-tight">{stat.value}</span>
                <span className="text-[11px] sm:text-sm text-sky-200 font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
