import VehicleCard from './components/VehicleCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { promises as fs } from 'fs';
import path from 'path';

export default async function HomePage() {
  // Read the JSON file from the file system
  const filePath = path.join(process.cwd(), 'public', 'data', 'vehicleslider.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const vehicles = JSON.parse(fileContents);

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <section id="vehicles" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8 text-black">Our Vehicles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
