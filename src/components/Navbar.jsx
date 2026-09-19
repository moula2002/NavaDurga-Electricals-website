import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { WhatsAppIcon, PhoneCallIcon } from './Icons';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#f5f5f5] border-b border-slate-200/80 shadow-md' 
        : 'bg-[#f5f5f5] border-b border-slate-200/40 shadow-sm'
    }`}>
      {/* Sleek Top Bar matching image */}
      <div className="bg-[#0b1320]/90 backdrop-blur-md text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 text-center">
          <span className="font-medium tracking-wide">
            Govt. Authorised Class I Electrical Contractor- Nagarabhavi, Bangalore-560072.
          </span>
          <a
            href="tel:7338591198"
            className="flex items-center gap-1.5 font-bold text-white hover:text-sky-400 transition-colors shrink-0"
          >
            <Phone className="w-3 h-3 text-sky-400" />
            <span>+91 73385 91198</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="medium" />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-blue-600 font-black' : 'text-slate-700 font-extrabold hover:text-blue-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-4 py-4 space-y-2 shadow-2xl">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-xs font-bold rounded-lg ${isActive ? 'bg-blue-50 text-blue-600 font-extrabold' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 block px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs text-center"
          >
            Get a Quote →
          </Link>
        </div>
      )}
    </header>
  );
}
