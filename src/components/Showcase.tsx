import { motion } from 'motion/react';

export default function Showcase() {
  return (
    <section className="py-24 md:py-32 bg-[#faf9f6] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-8"
        >
          <div className="flex items-center gap-4 text-[#C4A97D]">
            <div className="h-[1px] w-12 bg-[#C4A97D]/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium font-sans">Our Story</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B263B] leading-[1.1]">
            A Sanctuary on the <br/>
            <span className="italic text-[#C4A97D]">Highway.</span>
          </h2>
          
          <div className="space-y-6 text-[#1B263B]/70 font-light leading-relaxed text-lg">
            <p>
              Whether you are a weary highway traveler seeking a safe haven or a family looking for a luxurious retreat, Royal Inn offers an uncompromising standard of comfort.
            </p>
            <p>
              Our signature 24/7 room service ensures that your needs are met at any hour. From the moment you step into our elegantly designed reception, every detail is orchestrated to provide a seamless, premium experience.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 border border-[#1B263B] text-[#1B263B] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1B263B] hover:text-white transition-colors duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Images - Offset Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative w-full h-[500px] sm:h-[600px]"
        >
          {/* Main Image - Hotel Front Elevation */}
          <div className="absolute top-0 right-0 w-4/5 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Hotel Front Elevation" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>
          
          {/* Offset Image - Reception Area */}
          <div className="absolute bottom-0 left-0 w-3/5 h-[60%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(27,38,59,0.2)] z-20 border-[6px] border-[#faf9f6]">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Luxurious Reception Area" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#E0C9A6]/30 rounded-full z-0 pointer-events-none"></div>
          <div className="absolute top-12 -left-6 w-16 h-16 bg-[#E0C9A6]/10 rounded-full z-0 blur-xl pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}
