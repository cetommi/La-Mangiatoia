/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import BookingForm from './components/BookingForm';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import { RESTAURANT_INFO } from './data';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('prenotazioni');
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
    <div id="website-app-shell" className="min-h-screen bg-[#121212] text-white font-sans antialiased text-[15px] selection:bg-gold/20 selection:text-gold">
      
      {/* Structural Components Stack */}
      <Navbar />
      <Hero />
      <InfoBar />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <BookingForm />
      <ContactsSection />
      <Footer />

      {/* High-Converting Floating Mobile Sticky CTA Ribbon */}
      <div
        id="floating-mobile-action-ribbon"
        className="fixed bottom-0 left-0 right-0 z-30 bg-[#0F0F0F]/95 backdrop-blur-md border-t border-white/10 py-3.5 px-4 md:hidden shadow-2xl flex items-center justify-between gap-4"
      >
        <a
          id="mobile-ribbon-phone"
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex-1 py-3 border border-gold/15 bg-gold/5 hover:bg-gold/10 text-gold font-bold uppercase tracking-wider rounded-none text-center flex items-center justify-center space-x-2 text-xs transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Chiamaci</span>
        </a>
        <button
          id="mobile-ribbon-booking"
          onClick={handleScrollToBooking}
          className="flex-1 py-3 bg-gold hover:bg-gold-light text-black font-bold uppercase tracking-wider rounded-none text-center flex items-center justify-center space-x-2 text-xs transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Prenota Tavolo</span>
        </button>
      </div>

    </div>
  );
}
