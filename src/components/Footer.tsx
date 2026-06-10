import React from 'react';
import { Instagram, Facebook, ArrowUp, Flame, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0F0F0F] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      
      {/* Visual decorative golden circle overlay */}
      <div id="footer-decor-circle" className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-2xl translate-x-12 translate-y-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer row grids */}
        <div id="footer-row-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo Brand column */}
          <div id="footer-brand-col" className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-extrabold text-gold leading-none">
                {RESTAURANT_INFO.name}
              </h3>
              <p className="font-sans text-3xs uppercase tracking-widest text-gold font-bold mt-1">
                {RESTAURANT_INFO.tagline}
              </p>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
              La cucina di una volta, ogni giorno. Sapori autentici, ospitalità squisita e passione genuina a Sesto ed Uniti. Dal 1994, di stampo familiare e propriamente curata nei dettagli.
            </p>

            {/* Social icons */}
            <div id="footer-social-wrapper" className="space-y-3">
              <span className="font-sans text-4xs uppercase tracking-widest text-white/40 block font-semibold">Seguici su Instagram e Social</span>
              <div className="flex items-center space-x-3">
                <a
                  id="instagram-social-btn"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-gold hover:text-black rounded-none border border-white/5 transition-all text-white/80 cursor-pointer"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="facebook-social-btn"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-gold hover:text-black rounded-none border border-white/5 transition-all text-white/80 cursor-pointer"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div id="footer-links-col" className="lg:col-span-3 space-y-6 md:pl-8">
            <h4 className="font-serif text-base font-normal uppercase tracking-wider text-white border-b border-white/5 pb-2">Naviga</h4>
            <nav id="footer-navigation" className="flex flex-col space-y-3.5 text-xs uppercase tracking-wide">
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="font-sans text-white/70 hover:text-gold transition-colors">Home</a>
              <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')} className="font-sans text-white/70 hover:text-gold transition-colors">Il Nostro Menù</a>
              <a href="#chi-siamo" onClick={(e) => handleScrollTo(e, 'chi-siamo')} className="font-sans text-white/70 hover:text-gold transition-colors">La Nostra Storia</a>
              <a href="#recensioni" onClick={(e) => handleScrollTo(e, 'recensioni')} className="font-sans text-white/70 hover:text-gold transition-colors">Dicono di Noi</a>
              <a href="#prenotazioni" onClick={(e) => handleScrollTo(e, 'prenotazioni')} className="font-sans text-white/70 hover:text-gold transition-colors font-bold text-gold">Prenota Tavolo</a>
              <a href="#contatti" onClick={(e) => handleScrollTo(e, 'contatti')} className="font-sans text-white/70 hover:text-gold transition-colors">Posizione & Contatti</a>
            </nav>
          </div>

          {/* Specialities spotlight */}
          <div id="footer-specialities-col" className="lg:col-span-2 space-y-6">
            <h4 className="font-serif text-base font-normal uppercase tracking-wider text-white border-b border-white/5 pb-2">I Signature</h4>
            <ul className="space-y-3 font-sans text-sm text-white/70 font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Gnocchi alla Tognazzi</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Pisarei e Fasò</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Torta Fritta e Spalla Cotta</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold" />
                <span>Tiramisù al Cucchiaio</span>
              </li>
            </ul>
          </div>

          {/* Sesto ed Uniti contacts spotlight */}
          <div id="footer-contacts-spotlight" className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-base font-normal uppercase tracking-wider text-white border-b border-white/5 pb-2">Informazioni</h4>
            <div className="font-sans text-sm text-white/70 space-y-4 font-light">
              <p className="leading-relaxed">
                Via Cavatigozzi, 26 <br />
                26028 Sesto ed Uniti (CR)
              </p>
              <p className="font-semibold text-gold">
                Telefono: {RESTAURANT_INFO.phone}
              </p>
              <div className="pt-2 flex flex-col space-y-2">
                <span className="bg-gold/5 border border-gold/15 text-gold text-4xs font-bold uppercase tracking-widest px-2.5 py-1.5 inline-block max-w-[155px]">
                  Proprietà di Donne
                </span>
                <span className="bg-white/5 border border-white/10 text-[#FAF8F5]/80 text-4xs font-bold uppercase tracking-widest px-2.5 py-1.5 inline-block max-w-[155px]">
                  LGBTQ+ Friendly
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits & scroll back */}
        <div id="footer-bottom" className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 space-y-4 sm:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name} Sesto ed Uniti CR. Tutti i diritti riservati.</p>
            <p className="text-[10px] text-white/20 mt-1">Sviluppato con dedizione artigianale ed eleganza classica moderna lombarda.</p>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-gold hover:text-black rounded-none border border-white/5 hover:border-gold transition-all flex items-center justify-center cursor-pointer group"
            title="Torna all'inizio"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
