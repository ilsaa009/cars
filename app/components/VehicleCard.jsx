import Image from "next/image";

export default function VehicleCard({ imageUrl, title, name, yearOfRelease, description }) {
  return (
    <div className="bg-white p-6 shadow-xl rounded-md hover:shadow-2xl transition-shadow duration-300 relative w-full md:w-[500px] lg:w-[700px]">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={name}
          width={1000}
          height={600}
          className="object-cover w-full h-[400px] lg:h-[500px]"
        />
        <div className="absolute bottom-8 left-0 w-full p-6 text-lg font-semibold">
          {yearOfRelease}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-2xl font-bold">
          {name}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 mt-4 text-lg">{description}</p>
      </div>
    </div>
  );
}
