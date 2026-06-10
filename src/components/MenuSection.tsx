import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES, CATEGORY_IMAGES } from '../data';
import { Sparkles, Utensils, Percent } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('antipasti');
  const menuListRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (categoryId: string) => {
    setActiveTab(categoryId);
    // Smooth scroll menu items container into view briefly on mobile
    if (window.innerWidth < 768 && menuListRef.current) {
      menuListRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const currentCategory = MENU_CATEGORIES.find((cat) => cat.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <section id="menu" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Decorative olive branch elements or abstract warm backdrops */}
      <div id="menu-decor-1" className="absolute top-10 left-0 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl -translate-x-1/2" />
      <div id="menu-decor-2" className="absolute bottom-10 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div id="menu-section-heading" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-bold">Un Viaggio nei Sapori</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-white mt-3 mb-4 italic">
            Il Nostro Menù <span className="text-gold not-italic">Artigianale.</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Ogni mattina impastiamo la farina, accendiamo i fuochi e tagliamo i formaggi locali. 
            Prepariamo piatti autentici nel rispetto totale della stagionalità e del territorio lombardo-emiliano.
          </p>
        </div>

        {/* Promo Bar for "Pranzo di Lavoro" (Menù Fisso) */}
        <div
          id="menu-promo-banner"
          className="bg-[#161616] border border-gold/25 text-white p-6 md:p-8 max-w-4xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-gold/5 border border-gold/15 text-gold flex-shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-gold text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  Pranzo Feriale
                </span>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">Lunedì - Venerdì a Mezzogiorno</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal mt-2 italic text-[#F5F5F0]">
                La Pausa Pranzo di un Tempo — Menù Fisso a 12€
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/60 mt-2 font-light leading-relaxed">
                Include un primo del giorno fatto in casa, secondo, contorno, acqua e caffè. Piatti freschi e genuini ogni giorno diversi.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center bg-gold text-black px-6 py-4 w-full md:w-auto">
            <span className="text-[9px] uppercase tracking-widest font-extrabold leading-none">Solo</span>
            <span className="font-serif text-3xl font-extrabold mt-1.5 leading-none">12,00 €</span>
            <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Tutto compreso</span>
          </div>
        </div>

        {/* Menu Tab Navigation */}
        <div id="menu-tabs-wrapper" className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          {MENU_CATEGORIES.map((category) => (
            <button
              id={`tab-btn-${category.id}`}
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 relative focus:outline-none ${
                activeTab === category.id
                  ? 'bg-gold text-black scale-102 border border-gold'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              <span>{category.title.split(' ')[2] || category.title}</span>
            </button>
          ))}
        </div>

        {/* Grid Container for Menu category description + Dishes card listing */}
        <div id="menu-items-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" ref={menuListRef}>
          
          {/* Category Editorial Banner (Left Side on Desktop, Top on Mobile) */}
          <div id="menu-category-banner" className="lg:col-span-4 sticky top-28 bg-[#161616] border border-white/10 p-6 flex flex-col justify-between min-h-[420px] shadow-lg">
            <div className="absolute inset-0 z-0">
              <img
                id="menu-category-img"
                src={CATEGORY_IMAGES[activeTab] || CATEGORY_IMAGES.antipasti}
                alt={`${currentCategory.title} - La Mangiatoia Osteria`}
                className="w-full h-full object-cover brightness-[0.35] contrast-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
            </div>

            <div className="relative z-10 text-white flex flex-col justify-between h-full">
              <div className="flex-grow pt-4">
                <Utensils className="w-8 h-8 text-gold mb-4" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Categoria</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1.5 italic">
                  {currentCategory.title}
                </h3>
                <p className="font-sans text-sm text-white/80 mt-4 leading-relaxed font-light">
                  {currentCategory.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block font-semibold">Specialità</span>
                  <span className="font-sans text-xs font-semibold text-gold">Tradizionale fatta a mano</span>
                </div>
                <span className="px-3 py-1 bg-white/10 text-[10px] uppercase tracking-widest font-bold text-white">
                  100% Fresco
                </span>
              </div>
            </div>
          </div>

          {/* Dishes Listing cards (Right Side on Desktop, Bottom on Mobile) */}
          <div id="menu-category-dishes" className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentCategory.items.map((item) => (
                  <div
                    id={`dish-card-${item.id}`}
                    key={item.id}
                    className="bg-[#161616] hover:bg-[#1C1C1C] border border-white/10 p-6 transition-all duration-300 hover:border-gold/30 group flex flex-col sm:flex-row justify-between items-start gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-serif text-lg sm:text-xl font-normal text-white group-hover:text-gold transition-colors">
                          {item.name}
                        </h4>
                        
                        {/* Badges / Tags */}
                        {item.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                              tag === 'Signature' || tag === 'Specialità'
                                ? 'bg-gold/10 text-gold border border-gold/15'
                                : tag === 'Popolare'
                                ? 'bg-gold/10 text-gold border border-gold/15'
                                : tag === 'Vegano' || tag === 'Vegetariano'
                                ? 'bg-white/5 text-white/70 border border-white/10'
                                : 'bg-white/5 text-white/60'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="font-sans text-xs sm:text-sm text-white/60 mt-2.5 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 text-right w-full sm:w-auto pt-1 sm:pt-0 border-t border-white/10 sm:border-none flex sm:block items-center justify-between">
                      <span className="font-serif text-lg font-bold text-gold block">
                        {item.price.toFixed(2)} €
                      </span>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 block mt-1">
                        Prezzo onesto
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Menu end badge / CTA call out */}
            <div id="menu-footer-callout" className="bg-[#161616] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
              <div className="flex items-center space-x-4 text-white/70">
                <Sparkles className="w-5 h-5 text-gold flex-shrink-0 animate-pulse" />
                <p className="font-sans text-xs leading-relaxed font-light">
                  Soffri di qualche allergia o intolleranza alimentare? Faccelo sapere durante la prenotazione o parlane con la nostra addetta in sala. Possiamo variare alcuni ingredienti per assecondare le tue esigenze!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
