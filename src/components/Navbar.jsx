import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Mail, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

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
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'HT/LT Electrical', path: '/services/ht-lt' },
        { name: 'Plumbing Service', path: '/services/plumbing' },
        { name: 'MEP Maintenance', path: '/services/mep-maintenance' },
        { name: 'MEP Facility Management', path: '/services/facility-management' },
        { name: 'Solar & Inverter Installations', path: '/services/solar-inverter-installations' },
        { name: 'MEP Designing', path: '/services/mep-designing' },
        { name: 'PWD Civil Contractor', path: '/services/pwd-civil-contractor' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Clients', path: '/clients' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white border-b border-slate-200 shadow-md' 
        : 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
    }`}>
      {/* Top Bar with Marquee */}
      <div className="bg-[#002f6c] text-white py-1.5 px-4 border-b border-[#001f4d] overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-marquee font-medium tracking-wide">
              Navadurga Electricals is honoured and proud to be a Govt. Authorised Class I Electrical Contractor. <span className="mx-4 text-sky-400">|</span> Reliable Electrical Solutions for Every Project. <span className="mx-4 text-sky-400">|</span> Contact us for transparent quotation for HT/LT & Building MEP.
            </div>
          </div>
          <div className="flex items-center shrink-0 ml-4 pl-4 border-l border-white/20">
            <a
              href="mailto:info@navadurgaelectricals.com"
              className="flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors mr-4 pr-4 border-r border-white/20 hidden sm:flex"
            >
              <Mail className="w-3 h-3 text-sky-300" />
              <span>info@navadurgaelectricals.com</span>
            </a>
            <a
              href="tel:7338591198"
              className="flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-300" />
              <span>+91 73385 91198</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="medium" />
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-[13px] uppercase tracking-wider transition-colors py-4 ${isActive ? 'text-[#002f6c] font-black' : 'text-slate-700 font-bold hover:text-[#002f6c]'
                    }`
                  }
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#002f6c] transition-colors" />}
                </NavLink>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="p-2 space-y-1">
                      {link.dropdownItems.map((item, i) => (
                        <NavLink
                          key={i}
                          to={item.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-[#002f6c]'}`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-sm bg-[#002f6c] text-white font-bold text-[13px] uppercase tracking-wider hover:bg-[#001f4d] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#002f6c]" /> : <Menu className="w-6 h-6 text-[#002f6c]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200/80 px-4 py-4 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link, idx) => (
            <div key={idx}>
              <NavLink
                to={link.path}
                onClick={link.hasDropdown ? (e) => e.preventDefault() : () => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-3 text-sm font-bold rounded-lg ${isActive && !link.hasDropdown ? 'bg-blue-50 text-[#002f6c]' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </NavLink>
              {link.hasDropdown && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.dropdownItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm font-semibold rounded-lg ${isActive ? 'text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block px-5 py-3 rounded-sm bg-[#002f6c] text-white font-bold text-sm uppercase tracking-wider text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
