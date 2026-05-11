import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    aadhaar: '',
    rooms: '1',
    checkIn: '',
    checkOut: '',
    city: '',
  });

  const [mobileError, setMobileError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'mobile') {
      setMobileError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setMobileError('Please enter exactly 10 digits.');
      return;
    }

    const text = `Hello Royal Inn, I want to book a room. Name: ${formData.name}, Mobile: ${formData.mobile}, Rooms: ${formData.rooms}, Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut}.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918209526458?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1B263B]/20 py-3 text-[#1B263B] font-light placeholder:text-[#1B263B]/30 focus:outline-none focus:border-[#C4A97D] transition-colors rounded-none appearance-none";
  const labelClass =
    "text-[10px] uppercase tracking-widest text-[#1B263B]/60 font-semibold mb-1 block";

  return (
    <section id="booking" className="py-24 md:py-32 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-[#C4A97D] mb-6">
            <div className="h-[1px] w-12 bg-[#C4A97D]/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium font-sans">
              Reserve Your Stay
            </span>
            <div className="h-[1px] w-12 bg-[#C4A97D]/40"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1B263B] leading-[1.1]">
            Secure your <span className="italic text-[#C4A97D]">Reservation.</span>
          </h2>
        </div>

        <div className="relative">
          <motion.form
            key="booking-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="bg-[#faf9f6] p-8 md:p-12 rounded-2xl shadow-[0_20px_60px_rgba(27,38,59,0.05)] border border-[#1B263B]/5 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>WhatsApp / Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`${inputClass} ${mobileError ? 'border-red-500/50' : ''}`}
                maxLength={10}
              />
              {mobileError && (
                <span className="text-red-500 text-[10px] uppercase tracking-widest mt-2 block font-medium">
                  {mobileError}
                </span>
              )}
            </div>

            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Aadhaar / ID Number</label>
              <input
                type="text"
                name="aadhaar"
                required
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="XXXX-XXXX-XXXX"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>City of Origin</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. New Delhi"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Check-In Date</label>
              <input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Check-Out Date</label>
              <input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Number of Rooms</label>
              <select
                name="rooms"
                required
                value={formData.rooms}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4+">4+ Rooms</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#1B263B] text-white py-4 rounded-xl uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-xl hover:bg-[#C4A97D] hover:shadow-[0_0_20px_rgba(224,201,166,0.4)]"
              >
                Proceed to Payment
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
