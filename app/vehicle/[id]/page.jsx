import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { CiStar, CiShare2 } from "react-icons/ci";

const VehicleDetailsPage = async ({ params }) => {
  const { id } = params;

  // Read and parse the JSON file
  const filePath = path.join(process.cwd(), "public", "data", "vehiclesDetails.json");
  const data = await fs.readFile(filePath, "utf-8");
  const vehiclesData = JSON.parse(data);
  const vehicles = vehiclesData.vehicles;

  // Find the vehicle by ID
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return <p className="text-center text-red-500">Vehicle not found.</p>;
  }

  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-40 mx-auto bg-white">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl">
          <span className="text-gray-500">{vehicle.yearOfRelease}</span>{" "}
          <span className="text-black font-bold">{vehicle.name}</span>{" "}
          <span className="text-gray-500">{vehicle.title}</span>{" "}
          <span className="text-gray-500 font-bold"> | </span>{" "}
          <span className="text-lg text-black">Reserve Not Met</span>
        </h1>
      </div>

      <div
        className="sticky top-0 z-50 bg-white flex items-center gap-6 text-lg font-semibold py-3 px-6 w-screen"
      >
        <p className="text-black">Latest Bid: {vehicle.latestBid || "Not Available"}</p>
        <p className="text-red-500">{vehicle.auctionTime || "Time Not Set"}</p>
        <p className="text-black">{vehicle.commentsCount || 0} Comments</p>
        <p className="text-black">{vehicle.bidsCount || 0} Bids</p>

        <button
          className="border px-4 py-2 flex items-center gap-2"
          style={{
            color: "#be9b52",
            borderColor: "#be9b52",
            backgroundColor: "transparent",
          }}
        >
          <CiStar className="inline" />
          Watch
        </button>

        <button
          className="border px-4 py-2 flex items-center gap-2"
          style={{
            color: "#be9b52",
            borderColor: "#be9b52",
            backgroundColor: "transparent",
          }}
        >
          <CiShare2 className="inline" />
          Share
        </button>

        <button
          className="border px-4 py-2 flex items-center gap-2"
          style={{
            color: "black",
            borderColor: "black",
            backgroundColor: "#baa158",
          }}
        >
          Place a Bid
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="col-span-3">
          <Image
            src={vehicle.images[0].url}
            alt={vehicle.title}
            width={901}
            height={540}
          />
        </div>
        <div className="flex flex-col gap-2">
          {vehicle.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              width={120}
              height={80}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="mt-6 border-b">
        <nav className="flex gap-6 text-lg text-black font-semibold">
          <span className="border-b-2 border-gray-600 pb-2 cursor-pointer">
            All
          </span>
          <span className="cursor-pointer">Exterior</span>
          <span className="cursor-pointer">Interior</span>
          <span className="cursor-pointer">Mechanical</span>
          <span className="cursor-pointer">Documentation</span>
          <span className="cursor-pointer">Other</span>
          <span className="cursor-pointer">Videos</span>
        </nav>
      </div>

      <div className="mt-6">
        <p className="text-lg">{vehicle.description}</p>
      </div>

      <div className="mt-6">
        <button
          className="border px-4 py-2"
          style={{
            color: "black",
            borderColor: "black",
            backgroundColor: "#baa158",
          }}
        >
          Schedule Viewing
        </button>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
