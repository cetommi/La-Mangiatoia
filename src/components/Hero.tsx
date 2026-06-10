import { Calendar, ChevronDown, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';

export default function Hero() {
  const handleScrollToSection = (targetId: string) => {
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
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0F0F0F] overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div id="hero-background-wrapper" className="absolute inset-0 z-0">
        <img
          id="hero-img"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
          alt="La Mangiatoia osteria locanda - atmosfera calda della cucina tipica italiana"
          className="w-full h-full object-cover scale-102 filter brightness-[0.35] contrast-105"
        />
        {/* Subtle color overlays for deep elegant warm dark tones */}
        <div id="hero-gradient-1" className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-[#0F0F0F]/70" />
        <div id="hero-gradient-2" className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div id="hero-content" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 pb-20">
        
        {/* Floating badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-5 py-2 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-gold leading-none">
            Cucina Autentica Cremonese
          </span>
        </motion.div>

        {/* Big Serif Heading */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#F5F5F0] mb-8 italic"
        >
          Dove ogni piatto <br />
          <span className="text-gold not-italic">racconta una storia.</span>
        </motion.h1>

        {/* Emotional Subtitle */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {RESTAURANT_INFO.subheadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            id="hero-cta-book"
            onClick={() => handleScrollToSection('prenotazioni')}
            className="w-full sm:w-auto px-10 py-4 bg-terracotta text-black font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-lg shadow-gold/10 hover:bg-terracotta-dark flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Prenota un Tavolo</span>
          </button>
          
          <button
            id="hero-cta-menu"
            onClick={() => handleScrollToSection('menu')}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          >
            <span>Scopri il Nostro Menù</span>
          </button>
        </motion.div>

        {/* Google Reviews Summary Badge */}
        <motion.div
          id="hero-review-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 inline-flex items-center space-x-6 text-left py-3.5 px-6 bg-[#161616] border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col border-r border-white/10 pr-6">
            <div className="flex items-center text-gold space-x-1">
              <Award className="w-4 h-4 text-gold" />
              <span className="font-serif text-lg font-bold">4.3</span>
              <span className="text-xs text-white/40">/ 5</span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/50 font-semibold mt-1">Valutazione Google</span>
          </div>
          <div>
            <div className="flex text-gold gap-0.5 text-xs">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-white/20">★</span>
            </div>
            <p className="font-sans text-xs text-white/80 font-medium">Oltre 420 recensioni positive</p>
          </div>
        </motion.div>
      </div>

      {/* Down arrow anchor */}
      <div
        id="hero-scroll-btn-wrapper"
        onClick={() => handleScrollToSection('menu')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 transition-transform hover:translate-y-1"
      >
        <motion.div
          id="hero-scroll-btn-inner"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-2.5 bg-[#161616] border border-white/15 hover:border-gold/50"
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
