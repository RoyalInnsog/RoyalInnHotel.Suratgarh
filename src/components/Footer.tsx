import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#1B263B] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(224,216,166,0.05)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-[#E0C9A6] rounded-sm flex items-center justify-center">
                <span className="font-serif font-bold text-[#E0C9A6] text-xl block">R</span>
              </div>
              <span className="font-serif text-2xl tracking-tight font-light">
                Royal Inn <span className="text-[#E0C9A6]">Hotel</span>
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-8">
              Experience the finest comfort and bespoke 24/7 service in the heart of Suratgarh. A masterclass in highway luxury.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#E0C9A6] mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-[#E0C9A6] mb-6 font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li>+91 8209526458</li>
              <li className="break-words">royal.inn.hotel.suratgarh@gmail.com</li>
              <li>Shop No. 8, 9, Upper Floor, Behind Lahoti Petrol Pump, Near New Bus Stand, Suratgarh, Rajasthan 335804</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium font-sans">
          <span>© 2026 Royal Inn Suratgarh</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
