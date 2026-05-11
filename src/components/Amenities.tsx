import { motion } from 'motion/react';
import { PawPrint, Wifi, Car, Bell, Clock } from 'lucide-react';

const amenitiesList = [
  { name: 'Pet Friendly', icon: PawPrint },
  { name: 'Free Wi-Fi', icon: Wifi },
  { name: 'Free Parking', icon: Car },
  { name: '24/7 Room Service', icon: Bell },
  { name: 'Check-out: 10 AM', icon: Clock },
];

export default function Amenities() {
  return (
    <section id="amenities" className="pt-32 pb-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-[#C4A97D] mb-6">
            <div className="h-[1px] w-12 bg-[#C4A97D]/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium font-sans">Signature Comforts</span>
            <div className="h-[1px] w-12 bg-[#C4A97D]/40"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1B263B]">
            Core <span className="text-[#C4A97D] italic">Amenities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenitiesList.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px -10px rgba(224,201,166,0.4)"
                }}
                className="group bg-[#faf9f6] border border-[#1B263B]/5 p-8 flex flex-col items-center justify-center text-center gap-5 rounded-2xl cursor-pointer transition-colors duration-300 hover:border-[#E0C9A6]/50"
              >
                <div className="text-[#1B263B]/70 group-hover:text-[#C4A97D] transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} className="group-hover:animate-pulse" />
                </div>
                <span className="font-serif text-base tracking-wide text-[#1B263B]">{amenity.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
