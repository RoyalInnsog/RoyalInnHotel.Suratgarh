import { motion } from 'motion/react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function BookingBar() {
  const [guests, setGuests] = useState(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="absolute bottom-0 left-0 right-0 w-full z-30 px-4 md:px-12 translate-y-1/2"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1B263B]/80 text-white backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 md:px-8 md:py-6 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
          
          <div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-3/4">
            {/* Check-in Group */}
            <div className="flex flex-col gap-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
              <label className="text-[10px] uppercase tracking-widest text-[#E0C9A6] mb-2">Check-In</label>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-light text-white group-hover:text-white/80 transition-colors">Oct 24, 2026</span>
                <Calendar size={18} className="text-[#E0C9A6] opacity-50" />
              </div>
            </div>

            {/* Check-out Group */}
            <div className="flex flex-col gap-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:px-6">
              <label className="text-[10px] uppercase tracking-widest text-[#E0C9A6] mb-2">Check-Out</label>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-light text-white group-hover:text-white/80 transition-colors">Oct 27, 2026</span>
                <Calendar size={18} className="text-[#E0C9A6] opacity-50" />
              </div>
            </div>

            {/* Guests Group */}
            <div className="flex flex-col gap-1 relative group cursor-pointer md:pl-6">
              <label className="text-[10px] uppercase tracking-widest text-[#E0C9A6] mb-2">Guests</label>
              <div className="flex items-center justify-between w-full" onClick={() => setGuests(guests === 4 ? 1 : guests + 1)}>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-light text-white group-hover:text-white/80 transition-colors">{guests} Adult{guests !== 1 && 's'}</span>
                </div>
                <div className="flex items-center gap-1 text-[#E0C9A6]">
                  <Users size={16} className="opacity-50" />
                  <ChevronDown size={14} className="opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="w-full lg:w-auto mt-4 lg:mt-0 flex-none px-0 md:px-6">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full lg:w-auto h-14 bg-[#E0C9A6] hover:bg-white text-[#1B263B] rounded-xl uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group px-10"
            >
              Check Availability
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
