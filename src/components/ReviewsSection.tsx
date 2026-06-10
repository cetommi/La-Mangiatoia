import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from '../data';
import { Quote, Star, Award, ChevronLeft, ChevronRight, PenTool } from 'lucide-react';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="recensioni" className="py-24 bg-[#161616] relative overflow-hidden border-t border-b border-white/10">
      {/* Absolute decorative backdrops */}
      <div id="reviews-backdrop-top" className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -translate-y-12 translate-x-12" />
      <div id="reviews-backdrop-bottom" className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Grid for stats summary */}
        <div id="reviews-layout-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          <div id="reviews-intro-column" className="lg:col-span-15 text-center lg:text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Un'esperienza approvata</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-white mt-3 mb-4 italic">
              L'Affetto dei <span className="text-gold not-italic">Nostri Clienti.</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto lg:mx-0 mb-6" />
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
              La felicità dei nostri tavoli è la spinta che ci guida ogni giorno. 
              Siamo orgogliosi di essere un punto di riferimento genuino a Sesto ed Uniti.
            </p>

            {/* Google review scorecard block */}
            <div id="reviews-scorecard" className="mt-8 p-6 bg-[#0F0F0F] border border-white/10 rounded-none inline-block lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
              <div className="bg-gold/5 text-gold p-4 mt-1 border border-gold/15 inline-flex flex-shrink-0 justify-center">
                <Star className="w-6 h-6 fill-gold text-gold" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-center lg:justify-start space-x-1">
                  <span className="font-serif text-3xl font-extrabold text-white">4.3</span>
                  <span className="text-xs text-white/40 font-semibold">/ 5,0</span>
                </div>
                <div className="flex justify-center lg:justify-start text-gold gap-0.5 text-xs font-semibold my-1.5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-white/20">★</span>
                </div>
                <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                  Valutazione aggregata su <b>{RESTAURANT_INFO.ratings.totalCount} recensioni</b> Google
                </p>
              </div>
            </div>
          </div>

          {/* Interactive slider column */}
          <div id="reviews-slider-column" className="lg:col-span-12">
            <div id="reviews-card-container" className="bg-[#0F0F0F] border border-white/10 p-8 sm:p-10 rounded-none relative min-h-[340px] flex flex-col justify-between shadow-2xl">
              
              <div id="reviews-card-quote" className="absolute top-6 right-8 text-gold/10 pointer-events-none">
                <Quote className="w-12 h-12 transform rotate-180" />
              </div>

              <div>
                {/* Active review header */}
                <div id="reviews-card-meta" className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10">
                    <img
                      id="reviewer-avatar"
                      src={GOOGLE_REVIEWS[currentIndex].avatarUrl}
                      alt={GOOGLE_REVIEWS[currentIndex].author}
                      className="w-full h-full object-cover scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">
                      {GOOGLE_REVIEWS[currentIndex].author}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex text-gold text-xs">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < GOOGLE_REVIEWS[currentIndex].rating ? "text-gold" : "text-white/20"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-white/40">· {GOOGLE_REVIEWS[currentIndex].timeAgo}</span>
                      {GOOGLE_REVIEWS[currentIndex].isLocalGuide && (
                        <span className="bg-gold/5 text-gold text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border border-gold/15">
                          Local Guide
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Highlight text */}
                <p className="font-serif text-lg text-gold italic font-normal mb-4 leading-relaxed">
                  "{GOOGLE_REVIEWS[currentIndex].accentQuote}"
                </p>

                {/* Core text */}
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  {GOOGLE_REVIEWS[currentIndex].text}
                </p>
              </div>

              {/* Slider interactions */}
              <div id="reviews-card-nav" className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div id="reviews-card-dots" className="flex space-x-2">
                  {GOOGLE_REVIEWS.map((_, idx) => (
                    <button
                      id={`dot-btn-${idx}`}
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-none transition-all duration-300 ${
                        idx === currentIndex ? 'bg-gold w-6' : 'bg-white/10 hover:bg-white/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div id="reviews-card-nav-arrows" className="flex items-center space-x-2">
                  <button
                    id="reviews-prev-btn"
                    onClick={prevReview}
                    className="p-2.5 border border-white/15 bg-white/5 text-gold hover:bg-gold hover:text-black transition-colors focus:outline-none cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    id="reviews-next-btn"
                    onClick={nextReview}
                    className="p-2.5 border border-white/15 bg-white/5 text-gold hover:bg-gold hover:text-black transition-colors focus:outline-none cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
