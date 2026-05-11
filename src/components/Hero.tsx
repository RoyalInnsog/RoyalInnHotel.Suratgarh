import { motion } from 'motion/react';
import BookingBar from './BookingBar';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-40 text-center bg-[#1B263B] text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542314831-c6a4d27eceee?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury hotel room at Royal Inn"
          className="w-full h-full object-cover scale-105"
        />
        {/* Editorial gradient overlays over the image */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(224,216,166,0.1)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1B263B]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-12 max-w-4xl mx-auto mt-12 md:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-6 flex items-center gap-4 text-[#E0C9A6]"
        >
          <div className="h-[1px] w-12 bg-[#E0C9A6]/40"></div>
          <span className="text-xs uppercase tracking-[0.4em] font-medium">
            Welcome to the Heart of Suratgarh
          </span>
          <div className="h-[1px] w-12 bg-[#E0C9A6]/40"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-serif text-6xl md:text-[84px] leading-[0.95] font-light mb-8 max-w-4xl"
        >
          <span className="italic">Stay</span> in Style,<br />
          Rest in <span className="text-[#E0C9A6]">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-lg text-white/60 font-light max-w-xl mb-12 leading-relaxed"
        >
          Experience the finest comfort, breathtaking design, and bespoke 24/7 impeccable service 
          at our premium highway retreat.
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex flex-col items-center gap-2 absolute bottom-32 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50 rotate-90 mb-4 inline-block">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>

      </div>

      {/* Floating Booking Bar */}
      <BookingBar />

    </section>
  );
}
