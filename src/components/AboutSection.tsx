import { Heart, Landmark, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Row - Information Image & Core Story Description */}
        <div id="about-content-row" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid Block (Left) */}
          <div id="about-image-block" className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            {/* Background absolute ornament */}
            <div id="about-decor-circle" className="absolute -top-10 -left-10 w-48 h-48 bg-gold/5 rounded-full filter blur-xl -z-10" />
            
            {/* Big Main Image */}
            <div id="about-main-img-wrapper" className="col-span-8 overflow-hidden rounded-none shadow-2xl border border-white/10">
              <img
                id="about-main-img"
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt="Preparazione degli gnocchi fatti a mano de La Mangiatoia"
                className="w-full h-full object-cover aspect-[3/4] hover:scale-103 transition-transform duration-700 filter brightness-90"
              />
            </div>

            {/* Small Overlay Image */}
            <div id="about-sec-img-wrapper" className="col-span-4 flex flex-col justify-end space-y-4 pb-8">
              <div className="overflow-hidden rounded-none shadow-xl border border-white/10">
                <img
                  id="about-sec-img"
                  src="https://images.unsplash.com/photo-1595273670150-db0c3c392b70?auto=format&fit=crop&w=600&q=80"
                  alt="La fragrante Torta fritta sfornata calda a Sesto ed Uniti"
                  className="w-full h-full object-cover aspect-square hover:scale-103 transition-transform duration-500 filter brightness-90"
                />
              </div>

              {/* Floating Anniversary Stat */}
              <div id="about-stat-card" className="bg-gold text-black p-4 rounded-none shadow-xl flex flex-col items-center justify-center text-center">
                <span className="font-serif text-3xl font-extrabold text-black leading-none">30+</span>
                <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold mt-1 text-black/85">Anni di Storia</span>
              </div>
            </div>
          </div>

          {/* Core Story text Block (Right) */}
          <div id="about-text-block" className="lg:col-span-6">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">La Nostra Famiglia</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-2 mb-6 leading-[1.1] italic">
              Osteria autentica, <br /> gestita con <span className="text-gold not-italic">passione rustica.</span>
            </h2>
            
            <p className="font-serif text-lg text-gold font-normal leading-relaxed mb-6 italic">
              "{RESTAURANT_INFO.story.lead}"
            </p>

            <div id="about-paragraphs" className="space-y-4 font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
              {RESTAURANT_INFO.story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Values Bullets */}
            <div id="about-values" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gold/5 text-gold border border-gold/15">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-normal text-white leading-none uppercase tracking-wide">Festa del Territorio</h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-white/50 mt-1">Materie prime km zero</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gold/5 text-gold border border-gold/15">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-normal text-white leading-none uppercase tracking-wide">Donne Norcine</h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-white/50 mt-1">Ricette segrete della nonna</p>
                </div>
              </div>
            </div>

            {/* Chef Signature Row */}
            <div id="about-signature-row" className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 overflow-hidden flex items-center justify-center border border-white/10">
                  <img
                    id="chef-avatar"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="La Famiglia de La Mangiatoia"
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5F5F0]">
                    {RESTAURANT_INFO.story.chef}
                  </h4>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 font-semibold">Titolari e Chef de Cuisine</span>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <span className="font-serif text-2xl font-normal text-gold italic leading-none block">Osteria Locanda</span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#F5F5F0]/40 font-semibold block mt-1">Sesto ed Uniti</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
