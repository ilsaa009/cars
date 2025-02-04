import VehicleCard from './components/VehicleCard';;
import Footer from './components/Footer';
import Hero from './components/Hero';
import { promises as fs } from 'fs';
import path from 'path';

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'vehicles.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const vehicles = JSON.parse(fileContents);

  return (
    <>
    <Hero />
    <section id="vehicles" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-8 text-black">Our Vehicles</h3>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-screen-xl">
          {vehicles.map((vehicle) => (
            <div className="flex justify-center p-0 m-0" key={vehicle.id}>
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>
      </section>
    <Footer />
  </>
  );
}
