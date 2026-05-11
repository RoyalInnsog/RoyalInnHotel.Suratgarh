import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 flex flex-col justify-center ${
        isScrolled
          ? 'h-20 bg-[#1B263B]/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'h-24 bg-white/5 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="w-full flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 border-2 border-[#E0C9A6] rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="font-serif font-bold text-[#E0C9A6] text-xl block">R</span>
          </div>
          <span className="font-serif text-2xl tracking-tight font-light hidden sm:block">
            Royal Inn <span className="text-[#E0C9A6]">Hotel</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E0C9A6] transition-colors border-b border-transparent hover:border-[#E0C9A6] pb-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E0C9A6] text-[#1B263B] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(224,201,166,0.3)] hover:scale-105 transition-transform"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-[#E0C9A6] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-[#1B263B] z-40 flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-white hover:text-[#E0C9A6] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="mt-8 bg-[#E0C9A6] text-[#1B263B] font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase w-full max-w-xs"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
