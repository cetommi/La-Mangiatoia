import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, Phone, AlertCircle, CheckCircle, Trash2, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';
import { Booking } from '../types';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);
  
  // Local list of existing bookings for the current browser session
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);

  // Load existing bookings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lamangiatoia_bookings');
    if (stored) {
      try {
        setPastBookings(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load bookings from past sessions", e);
      }
    }
  }, []);

  // Save bookings to localStorage
  const saveBookings = (bookings: Booking[]) => {
    localStorage.setItem('lamangiatoia_bookings', JSON.stringify(bookings));
    setPastBookings(bookings);
  };

  const getDayOfWeek = (dateString: string) => {
    if (!dateString) return null;
    const d = new Date(dateString);
    return d.getDay(); // 0 is Sunday, 6 is Saturday
  };

  const dayOfWeek = getDayOfWeek(date);

  // Generate available times based on day of week
  const getAvailableTimeSlots = () => {
    if (dayOfWeek === null) return [];
    
    // Saturday (6) - Only Dinner
    if (dayOfWeek === 6) {
      return ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
    }
    // Sunday (0) - Only Lunch
    if (dayOfWeek === 0) {
      return ['12:00', '12:30', '13:00', '13:35', '14:00', '14:30'];
    }
    // Monday to Friday (1-5) - Both Lunch & Dinner
    return [
      '12:00', '12:30', '13:00', '13:30', '14:00',
      '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
    ];
  };

  const timeSlots = getAvailableTimeSlots();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !time) {
      alert("Si prega di compilare tutti i campi obbligatori per completare la prenotazione.");
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const newBooking: Booking = {
        id: "RES-" + Math.floor(100000 + Math.random() * 900000),
        name,
        email,
        phone,
        date,
        time,
        guests,
        specialRequests,
        status: 'confermata',
        createdAt: new Date().toISOString()
      };

      const updatedList = [newBooking, ...pastBookings];
      saveBookings(updatedList);
      
      setCreatedBooking(newBooking);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setGuests(2);
      setSpecialRequests('');
    }, 1200);
  };

  const handleCancelBooking = (id: string) => {
    if (window.confirm("Sei sicuro di voler cancellare questa prenotazione?")) {
      const updated = pastBookings.map(b => b.id === id ? { ...b, status: 'annullata' as const } : b);
      saveBookings(updated);
    }
  };

  const handleDeleteRecord = (id: string) => {
    const updated = pastBookings.filter(b => b.id !== id);
    saveBookings(updated);
  };

  const formatDateItalian = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <section id="prenotazioni" className="py-24 bg-[#0F0F0F] scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div id="booking-section-heading" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">Un Tavolo per Te</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-white mt-3 mb-4 italic">
            Modulo di Prenotazione <span className="text-gold not-italic">Istantanea.</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Riserva il tuo posto comodamente online. Riceverai una conferma immediata sul browser con codice di prenotazione univoco.
          </p>
        </div>

        {/* Content columns */}
        <div id="booking-layout-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Informative column (Left) */}
          <div id="booking-info-sidebar" className="lg:col-span-4 space-y-8">
            
            {/* Opening Hours Card */}
            <div id="hours-card" className="bg-[#161616] border border-white/10 p-6 sm:p-8">
              <h3 className="font-serif text-xl font-normal text-gold mb-6 uppercase tracking-wider">Orari di Apertura</h3>
              <div className="space-y-4">
                {RESTAURANT_INFO.hours.map((g, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3.5 last:border-0 last:pb-0">
                    <div className="flex justify-between items-baseline font-serif">
                      <span className="font-normal text-white uppercase tracking-wider text-xs">{g.days}</span>
                      <span className="text-gold text-xs font-semibold">{g.note}</span>
                    </div>
                    <div className="flex justify-between font-sans text-xs text-white/50 mt-1.5 uppercase tracking-wide">
                      <span>Pranzo: {g.lunch}</span>
                      <span>Cena: {g.dinner}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Telephone call shortcut card */}
            <div id="phone-booking-card" className="bg-gold text-black p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="bg-black/10 text-black font-sans text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 inline-block">
                  PREFERISCI CHIAMARE?
                </span>
                <h3 className="font-serif text-2xl font-normal mt-4 mb-2 italic">
                  Prenota via telefono
                </h3>
                <p className="font-sans text-xs text-black/85 leading-relaxed mb-6 font-medium">
                  Se hai richieste speciali o il sistema online risulta al completo, chiamaci direttamente al nostro recapito feriale.
                </p>
              </div>
              <a
                id="phone-btn-booking"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full py-3.5 bg-black text-gold hover:bg-black/90 font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Core Booking Form (Right) */}
          <div id="booking-form-panel" className="lg:col-span-8 bg-[#161616] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
            
            {/* Display Success Screen */}
            {submitSuccess && createdBooking && (
              <div id="success-screen" className="text-center py-8">
                <div className="w-16 h-16 bg-gold/5 text-gold border border-gold/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-white mb-2">
                  Tavolo Prenotato con Successo!
                </h3>
                <p className="font-sans text-sm text-white/70 max-w-md mx-auto mb-6 font-light">
                  Gentile <b>{createdBooking.name}</b>, la tua prenotazione per <b>{createdBooking.guests} persone</b> in data <b>{formatDateItalian(createdBooking.date)}</b> alle ore <b>{createdBooking.time}</b> è confermata. Ti aspettiamo!
                </p>

                {/* Voucher detailing details */}
                <div className="bg-[#0F0F0F] border border-dashed border-gold/25 p-6 max-w-md mx-auto text-left mb-8 space-y-3 font-mono text-xs shadow-inner relative">
                  <div className="absolute top-0 left-6 right-6 -translate-y-1.5 h-1 bg-[#161616]" />
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 font-sans">CODICE PRENOTAZIONE:</span>
                    <span className="font-bold text-gold">{createdBooking.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-sans">Cliente:</span>
                    <span className="font-bold text-white">{createdBooking.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-sans">Telefono:</span>
                    <span className="font-bold text-white">{createdBooking.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-sans">Coperti:</span>
                    <span className="font-bold text-white">{createdBooking.guests} persone</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-sans">Richieste:</span>
                    <span className="font-bold text-white line-clamp-1 italic max-w-[200px]">{createdBooking.specialRequests || 'Nessuna'}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-2">
                    <span className="text-white/40 font-sans">Stato:</span>
                    <span className="px-2.5 py-0.5 bg-gold/10 text-gold border border-gold/15 font-bold uppercase tracking-widest text-[9px]">
                      Confermata Istantaneo
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    id="new-booking-btn"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-8 py-3.5 bg-gold text-black font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer"
                  >
                    Prenota un altro tavolo
                  </button>
                  <a
                    id="success-nav-cta"
                    href="#menu"
                    className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 font-bold uppercase tracking-widest text-xs transition-colors"
                  >
                    Sfoglia il Menù in attesa
                  </a>
                </div>
              </div>
            )}

            {/* Real Submission Form */}
            {!submitSuccess && (
              <form id="booking-form" onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Visual Header */}
                <div className="border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center space-x-2 text-gold">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-gold leading-none">
                      Verificato al 100% sicuro
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white mt-2 italic">
                    Compila i dettagli del tavolo
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="es. Alessandro Conti"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/10 text-sm font-medium transition-all text-white placeholder:text-white/20"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                      Numero di Telefono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="es. 380 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/10 text-sm font-medium transition-all text-white placeholder:text-white/20"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                      Indirizzo E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="es. nome@esempio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/10 text-sm font-medium transition-all text-white placeholder:text-white/20"
                    />
                  </div>

                  {/* Guests Selector */}
                  <div className="flex flex-col">
                    <label htmlFor="guests" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                      Numero di Ospiti (Coperti)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold/60">
                        <Users className="w-4 h-4" />
                      </div>
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full pl-9 pr-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold text-sm font-medium text-white transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                           <option key={num} value={num} className="bg-[#161616] text-[#FAF8F5]">
                            {num} {num === 1 ? 'Persona' : 'Persone'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col">
                    <label htmlFor="date" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                      Scegli Data della Prenotazione *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold/60">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="date"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          setTime(''); // reset time when date changes
                        }}
                        className="w-full pl-9 pr-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold font-medium text-sm text-white transition-all [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Time Picker */}
                  <div className="flex flex-col">
                    <label htmlFor="time" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2 flex items-center justify-between">
                      <span>Orario disponibile *</span>
                      {!date ? (
                        <span className="text-[10px] text-gold uppercase font-bold tracking-widest flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> Scegli prima data
                        </span>
                      ) : null}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold/60">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="time"
                        required
                        disabled={!date}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-9 pr-4 py-3.5 bg-[#0F0F0F] disabled:opacity-40 disabled:text-white/20 border border-white/10 rounded-none focus:outline-none focus:border-gold font-medium text-sm text-white transition-all"
                      >
                        <option value="" className="bg-[#161616]">Seleziona Orario</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#161616]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    {date && timeSlots.length === 0 && (
                      <span className="text-xs text-gold mt-1.5 font-light">
                        Siamo chiusi in questa data. Scegli un altro giorno!
                      </span>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col">
                  <label htmlFor="specialRequests" className="font-sans text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                    Richieste Speciali / Allergie / Intolleranze
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={3}
                    placeholder="es. Allergia alle noci, seggiolone per bimbo feriale, anniversario..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="px-4 py-3.5 bg-[#0F0F0F] border border-white/10 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/10 text-sm font-medium transition-all text-white placeholder:text-white/20"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="booking-submit-btn"
                  type="submit"
                  disabled={isSubmitting || (date !== '' && timeSlots.length === 0)}
                  className="w-full py-4.5 bg-gold text-black font-sans font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-gold/10 flex items-center justify-center space-x-2 cursor-pointer disabled:bg-white/10 disabled:text-white/20 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Verifica disponibilità...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Conferma Prenotazione Istantanea</span>
                    </>
                  )}
                </button>

                <p className="font-sans text-[10px] tracking-wide text-center text-white/40 leading-relaxed font-light">
                  Compilando questo modulo acconsenti a salvare temporaneamente la prenotazione locale per visualizzarli nel browser. Non condividiamo i tuoi recapiti con terze parti.
                </p>

              </form>
            )}

            {/* Existing session bookings listing (For testing and visualization) */}
            {pastBookings.length > 0 && (
              <div id="past-bookings-list-container" className="mt-12 pt-8 border-t border-white/10">
                <h4 className="font-serif text-lg font-normal text-white mb-6 flex items-center space-x-2.5">
                  <span className="italic">I Miei Tavoli Prenotati</span>
                  <span className="px-2.5 py-0.5 bg-gold/10 text-gold text-3xs font-extrabold uppercase tracking-wide border border-gold/15">
                    {pastBookings.length}
                  </span>
                </h4>
                <div id="past-bookings-list" className="space-y-4 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                  {pastBookings.map((b) => (
                    <div
                      id={`booking-list-row-${b.id}`}
                      key={b.id}
                      className="bg-[#0F0F0F] border border-white/10 p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-gold">{b.id}</span>
                          <span className="text-white/25">·</span>
                          <span className="font-semibold text-[#F5F5F0]">{b.guests} {b.guests === 1 ? 'persona' : 'persone'}</span>
                        </div>
                        <p className="font-sans text-white/60 mt-1.5 font-light">
                          Data: <b>{formatDateItalian(b.date)}</b> alle ore <b>{b.time}</b>
                        </p>
                        {b.specialRequests && (
                          <p className="font-sans text-white/40 italic mt-1 max-w-sm truncate font-light">
                            Nota: "{b.specialRequests}"
                          </p>
                        )}
                      </div>

                      <div className="flex items-center space-x-3 flex-shrink-0 self-end sm:self-center">
                        {b.status === 'confermata' ? (
                          <>
                            <span className="bg-gold/10 text-gold text-[9px] border border-gold/15 font-bold uppercase tracking-widest px-2.5 py-1">
                              Confermata
                            </span>
                            <button
                              id={`cancel-btn-${b.id}`}
                              onClick={() => handleCancelBooking(b.id)}
                              className="text-white/50 hover:text-gold px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                            >
                              Annulla
                            </button>
                          </>
                        ) : (
                          <>
                            <span className="bg-red-950/20 text-red-500 border border-red-900/30 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                              Annullata
                            </span>
                            <button
                              id={`delete-btn-${b.id}`}
                              onClick={() => handleDeleteRecord(b.id)}
                              className="text-white/30 hover:text-[#FAF8F5] p-2 hover:bg-white/5 transition-colors cursor-pointer"
                              title="Rimuovi dallo storico"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
