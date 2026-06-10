import { Heart, Users, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function InfoBar() {
  return (
    <section id="info-bar-section" className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 pb-4">
      <div
        id="info-bar-grid-container"
        className="bg-[#161616] border border-white/10 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 shadow-2xl shadow-black/60"
      >
        <div id="info-item-1" className="flex items-start space-x-4">
          <div className="p-3.5 bg-gold/5 text-gold border border-gold/15 flex-shrink-0">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-wide uppercase text-gold font-normal">Vieni a Trovarci</h4>
            <p className="font-sans text-sm text-white/70 mt-1 leading-relaxed">
              Via Cavatigozzi, 26 <br />
              <span className="font-semibold text-gold">{RESTAURANT_INFO.address.split(',')[2].trim()}</span>
            </p>
          </div>
        </div>

        <div id="info-item-2" className="flex items-start space-x-4">
          <div className="p-3.5 bg-gold/5 text-gold border border-gold/15 flex-shrink-0">
            <Users className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-wide uppercase text-gold font-normal">Gestione Familiare</h4>
            <p className="font-sans text-sm text-white/70 mt-1 leading-relaxed">
              Gestito con amore da donne. Perfetto per coppie, famiglie e piccole compagnie d'eccezione.
            </p>
          </div>
        </div>

        <div id="info-item-3" className="flex items-start space-x-4">
          <div className="p-3.5 bg-gold/5 text-gold border border-gold/15 flex-shrink-0">
            <Heart className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-wide uppercase text-gold font-normal">Spazio Accogliente</h4>
            <p className="font-sans text-sm text-white/70 mt-1 leading-relaxed">
              Un locale caldo, autentico e sicuro per chiunque. <span className="font-semibold text-gold">LGBTQ+ Friendly</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Services pills list */}
      <div id="services-checklist" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-white/60 text-xs uppercase tracking-widest font-semibold">
        <div id="service-pill-1" className="flex items-center space-x-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
          <span>Consumazione sul posto</span>
        </div>
        <div id="service-pill-2" className="flex items-center space-x-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
          <span>Servizio Asporto (Takeout)</span>
        </div>
        <div id="service-pill-3" className="flex items-center space-x-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
          <span>Consegna a Domicilio</span>
        </div>
        <div id="service-pill-4" className="flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="text-gold">Pranzo Feriale: Menù Fisso a 12€</span>
        </div>
      </div>
    </section>
  );
}
