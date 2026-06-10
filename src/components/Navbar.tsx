import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on section visibility
      const sections = ['home', 'menu', 'chi-siamo', 'recensioni', 'prenotazioni', 'contatti'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menù', href: '#menu', id: 'menu' },
    { name: 'La Nostra Storia', href: '#chi-siamo', id: 'chi-siamo' },
    { name: 'Dicono di Noi', href: '#recensioni', id: 'recensioni' },
    { name: 'Prenota', href: '#prenotazioni', id: 'prenotazioni' },
    { name: 'Contatti', href: '#contatti', id: 'contatti' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10 shadow-black/45'
            : 'bg-gradient-to-b from-black/90 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex flex-col select-none group"
          >
            <span
              className={`font-serif text-2xl lg:text-3xl font-bold tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-white'
              }`}
            >
              {RESTAURANT_INFO.name}
            </span>
            <span
              className={`font-sans text-[10px] tracking-[0.3em] uppercase leading-none font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-white/60' : 'text-gold'
              }`}
            >
              {RESTAURANT_INFO.tagline} dal 1984
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.id}`}
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`font-sans text-xs tracking-widest uppercase transition-colors relative py-1 hover:text-gold ${
                  isScrolled
                    ? activeSection === link.id
                      ? 'text-gold'
                      : 'text-charcoal/80'
                    : activeSection === link.id
                    ? 'text-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Call and Book CTA Buttons */}
          <div id="nav-actions-desktop" className="hidden md:flex items-center space-x-6">
            <a
              id="cta-call-nav"
              href={`tel:${RESTAURANT_INFO.phone}`}
              className={`flex items-center space-x-2 text-xs tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-charcoal/80 hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              <Phone id="phone-icon-nav" className="w-3.5 h-3.5 text-gold" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <a
              id="cta-book-nav"
              href="#prenotazioni"
              onClick={(e) => handleScrollTo(e, '#prenotazioni')}
              className={`flex items-center space-x-2 px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-md ${
                isScrolled
                  ? 'bg-gold text-black hover:bg-gold-dark shadow-gold/10'
                  : 'bg-white text-black hover:bg-gold shadow-white/5'
              }`}
            >
              <Calendar id="calendar-icon-nav" className="w-4 h-4" />
              <span>Prenota</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div id="mobile-toggle-container" className="md:hidden flex items-center space-x-3">
            <a
              id="cta-book-nav-mobile"
              href="#prenotazioni"
              onClick={(e) => handleScrollTo(e, '#prenotazioni')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-bold flex items-center space-x-1.5 transition-all ${
                isScrolled
                  ? 'bg-gold text-black hover:bg-gold-dark'
                  : 'bg-white text-black hover:bg-gold'
              }`}
            >
              <Calendar id="calendar-icon-nav-mobile" className="w-3.5 h-3.5" />
              <span>Prenota</span>
            </a>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X id="mobile-menu-close" className="w-6 h-6" />
              ) : (
                <Menu id="mobile-menu-open" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-55 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-ivory-dark border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div id="mobile-drawer-inner">
                <div id="mobile-drawer-header" className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-widest uppercase text-gold leading-none">
                      {RESTAURANT_INFO.name}
                    </h3>
                    <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/50 font-semibold mt-1.5">
                      {RESTAURANT_INFO.tagline}
                    </p>
                  </div>
                  <button
                    id="mobile-drawer-close-btn"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 px-2 text-xs uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 hover:bg-white/5"
                  >
                    X
                  </button>
                </div>

                <nav id="mobile-nav" className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      id={`mobile-nav-link-${link.id}`}
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`font-sans text-xs uppercase tracking-widest py-2 border-b border-white/5 flex justify-between items-center ${
                        activeSection === link.id
                          ? 'text-gold border-gold/30 font-bold'
                          : 'text-charcoal-light'
                      }`}
                    >
                      <span>{link.name}</span>
                      {activeSection === link.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                    </a>
                  ))}
                </nav>
              </div>

              <div id="mobile-drawer-footer" className="space-y-4 pt-6 border-t border-white/10">
                <a
                  id="mobile-call-link"
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gold uppercase tracking-wider font-bold transition-all text-xs"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  id="mobile-book-link"
                  href="#prenotazioni"
                  onClick={(e) => handleScrollTo(e, '#prenotazioni')}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 bg-gold hover:bg-gold-dark text-black uppercase tracking-wider font-extrabold transition-all text-xs shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prenota un Tavolo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
