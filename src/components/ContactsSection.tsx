import { Phone, Mail, MapPin, Copy, ExternalLink, Calendar, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { RESTAURANT_INFO } from '../data';

export default function ContactsSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contatti" className="py-24 bg-[#161616] scroll-mt-10 relative overflow-hidden border-b border-white/10">
      
      {/* Visual top abstract shape */}
      <div id="contacts-backdrop-line" className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div id="contacts-section-heading" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Vieni a Trovarci</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-white mt-3 mb-4 italic">
            Contatti & <span className="text-gold not-italic">Posizione.</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Ci trovi a Sesto ed Uniti, pronti ad accoglierti con piatti caldi e vini sinceri. Consulta i dettagli sottostanti o calcola il percorso su Maps.
          </p>
        </div>

        {/* Info Grid Container */}
        <div id="contacts-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Contacts details card (Left) */}
          <div id="contacts-sidebar" className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards Block */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div id="contact-addr-card" className="bg-[#0F0F0F] border border-white/10 rounded-none p-6 sm:p-8 shadow-2xl flex items-start space-x-4">
                <div className="p-3 px-3.5 bg-gold/5 text-gold border border-gold/15 rounded-none flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-white/40 block">Indirizzo Sede</span>
                  <h4 className="font-serif text-lg font-normal text-white mt-1">{RESTAURANT_INFO.name}</h4>
                  <p className="font-sans text-sm text-white/70 mt-2 leading-relaxed font-light">
                    {RESTAURANT_INFO.address}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <button
                      id="copy-addr-btn"
                      onClick={copyToClipboard}
                      className="inline-flex items-center space-x-1.5 text-[10px] text-gold hover:text-white bg-gold/5 hover:bg-gold/10 font-bold uppercase tracking-wider py-1.5 px-3 rounded-none border border-gold/15 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copiato!' : 'Copia Indirizzo'}</span>
                    </button>
                    
                    <a
                      id="open-maps-btn"
                      href="https://maps.google.com/?q=Via+Cavatigozzi+26,+26028+Sesto+ed+Uniti,+CR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[10px] text-white hover:text-gold bg-white/5 hover:bg-white/10 font-bold uppercase tracking-wider py-1.5 px-3 rounded-none border border-white/15 transition-colors"
                    >
                      <span>Google Maps Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Telephone & Email card */}
              <div id="contact-phone-card" className="bg-[#0F0F0F] border border-white/10 rounded-none p-6 sm:p-8 shadow-2xl space-y-5">
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 px-3.5 bg-gold/5 text-gold border border-gold/15 rounded-none flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-white/40 block">Chiama o prenota</span>
                    <a
                      id="phone-link-contact-row"
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="font-serif text-lg font-bold text-gold hover:text-white transition-colors mt-1 block"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mt-0.5">Sempre attivo negli orari di servizio</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5 flex items-start space-x-4">
                  <div className="p-3 px-3.5 bg-gold/5 text-gold border border-gold/15 rounded-none flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-white/40 block">Email Informazioni</span>
                    <a
                      id="email-link-contact-row"
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="font-serif text-lg font-bold text-gold hover:text-white transition-colors mt-1 block"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick characteristics list display */}
            <div id="contact-meta-characteristics" className="bg-[#161616] border border-dashed border-white/10 rounded-none p-6 shadow-sm">
              <h4 className="font-serif text-sm font-normal italic text-gold mb-2 uppercase tracking-wide">Informazioni per i tuoi eventi</h4>
              <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
                Il locale riserva un'ala per piccole cerimonie, comunioni, compleanni e cene aziendali feriali. Contattaci via e-mail con almeno 7 giorni di preavviso per ricevere preventivi personalizzati ed evocativi.
              </p>
            </div>

          </div>

          {/* Interactive Google maps iframe card (Right) */}
          <div id="contacts-map-panel" className="lg:col-span-7 bg-[#0F0F0F] border border-white/10 rounded-none p-4 shadow-2xl min-h-[420px] flex flex-col justify-between overflow-hidden">
            <div className="w-full flex-1 rounded-none overflow-hidden border border-white/10 min-h-[340px] relative">
              <iframe
                id="maps-iframe"
                title="La Mangiatoia Osteria Locanda - Via Cavatigozzi 26 Sesto ed Uniti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.401140026226!2d9.923837912448386!3d45.3992569709772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47813a48e7e1f4ef%3A0xe963abfc3ed654f5!2sVia%20Cavatigozzi%2C%2026%2C%2026028%20Sesto%20ed%20Uniti%20CR!5e0!3m2!1sit!2sit!4v1718012345678!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter invert contrast-[0.9] hue-rotate-[180deg] brightness-[0.7]"
              />
            </div>
            
            <div id="map-panel-footer" className="pt-4 px-2 flex justify-between items-center text-[10px] uppercase tracking-wider text-white/50">
              <span className="font-sans flex items-center">
                <HelpCircle className="w-4 h-4 text-gold mr-1.5" />
                <span>Plus Code: <b className="text-white lowercase">{RESTAURANT_INFO.googlePlusCode}</b></span>
              </span>
              <a
                id="footer-gps-link"
                href="https://maps.google.com/?q=45.399257,9.923838"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gold hover:text-white transition-colors"
              >
                Invia coordinate a GPS
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
