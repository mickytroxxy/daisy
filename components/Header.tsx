
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#003366] leading-none">Daisy</span>
              <span className="text-[10px] uppercase tracking-widest text-[#76bc21] font-bold">Service Booker</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#76bc21] ${
                  '#' + location.pathname === link.href ? 'text-[#76bc21]' : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-[#76bc21] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#65a31c] transition-all shadow-lg active:scale-95">
              Book Service
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#003366] p-2 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-lg font-bold text-[#003366] hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#003366] text-white py-4 rounded-xl text-lg font-bold">
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
