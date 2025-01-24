// app/page.js or app/page.jsx

import VehicleCard from './components/VehicleCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default async function HomePage() {
  // Fetch the vehicles data from the /public/data/vehicleslider.json file
  const res = await fetch('http://localhost:3000/data/vehicleslider.json');
  const vehicles = await res.json();

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <section id="vehicles" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8 text-black">Our Vehicles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
