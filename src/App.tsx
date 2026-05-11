import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Showcase from './components/Showcase';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-royal-gold/30 flex flex-col bg-royal-white">
      <Navbar />
      <Hero />
      <Amenities />
      <Showcase />
      <BookingForm />
      <Footer />
    </div>
  );
}

