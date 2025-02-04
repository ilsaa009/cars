import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { CiStar, CiShare2 } from "react-icons/ci";

const VehicleDetailsPage = async ({ params }) => {
  const { id } = params;

  const filePath = path.join(process.cwd(), "public", "data", "vehiclesDetails.json");
  const data = await fs.readFile(filePath, "utf-8");
  const vehiclesData = JSON.parse(data);
  const vehicles = vehiclesData.vehicles;

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return <p className="text-center text-red-500">Vehicle not found.</p>;
  }

  return (
    <div className="px-4 sm:px-4md:px-8 lg:px-16 xl:px-32 mx-auto bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">
          <span className="text-gray-500">{vehicle.yearOfRelease}</span>{" "}
          <span className="text-black font-bold">{vehicle.name}</span>{" "}
          <span className="text-gray-500">{vehicle.title}</span>{" "}
          <span className="text-gray-500 font-bold"> | </span>{" "}
          <span className="text-sm sm:hidden text-black">Reserve Not Met</span>
        </h1>
      </div>

      <div className="sticky top-0 z-50 bg-white flex flex-col lg:flex-row justify-between py-6 w-full" style={{ zIndex: 50 }}>
        <div className="flex items-center gap-2 text-lg font-semibold text-black">
          <p>{vehicle.latestBid?.toLocaleString() || "Not Available"}</p>
          <span className="text-gray-400">|</span>
          <p>{vehicle.auctionTime || "00:00:00"}</p>
          <span className="text-gray-400">|</span>
          <p className="hidden sm:flex gap-1">
            <span className="font-bold">{vehicle.commentsCount || 0}</span> Comment
          </p>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <p className="hidden sm:flex gap-1">
            <span className="font-bold">{vehicle.bidsCount || 0}</span> Bids
          </p>
        </div>


        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 mt-4 lg:mt-0">
          <div className="flex gap-4 flex-wrap md:absolute md:mt-4 mb-4 md:top-0 md:right-0 lg:static lg:flex-nowrap lg:ml-auto sm:w-full sm:grid sm:grid-cols-2 sm:gap-4">
            <button
              className="border px-6 py-5 flex items-center justify-center gap-2"
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
              className="border px-6 py-5 flex items-center justify-center gap-2"
              style={{
                color: "#be9b52",
                borderColor: "#be9b52",
                backgroundColor: "transparent",
              }}
            >
              <CiShare2 className="inline" />
              Share
            </button>
          </div>

          
          <button
            className="border px-6 py-5 flex items-center justify-center gap-2 mt-4 md:mt-10 lg:mt-0 lg:w-auto"
            style={{
              color: "black",
              borderColor: "black",
              backgroundColor: "#baa158",
              minWidth: "410px",
            }}
          >
            Place a Bid
          </button>
        </div>
      </div>
      <div className="flex w-full gap-6 flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 mt-6">
          <Image
            src={vehicle.images[0].url}
            alt={vehicle.title}
            width={2058}
            height={600}
            className="w-full h-auto lg:h-[600px]" 
          />
        </div>

        <div className="w-full lg:w-1/4 mt-6 flex flex-col justify-between">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-2 lg:h-[600px] lg:overflow-hidden">
            {vehicle.images.slice(1).map((image, index) => (
              <div key={index} className="w-32 h-24 flex-shrink-0 lg:w-full lg:h-full">
                <Image
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  width={120}
                  height={80}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 pb-4 flex flex-col lg:flex-row justify-between items-center w-full">
        <nav className="flex gap-6 text-lg text-black font-semibold w-full lg:w-3/4 px-6 py-3 bg-gray-100">
          <span className="border-b-2 border-gray-600 pb-2 cursor-pointer">All</span>
          <span className="cursor-pointer">Exterior</span>
          <span className="cursor-pointer">Interior</span>
          <span className="cursor-pointer">Mechanical</span>
          <span className="cursor-pointer">Documentation</span>
          <span className="cursor-pointer">Other</span>
          <span className="cursor-pointer">Videos</span>
        </nav>
        <div className="w-full lg:w-1/4 flex justify-end lg:ml-0 mt-4 lg:mt-0">
          <button
            className="border w-full lg:w-1/2 px-12 py-5 flex items-center justify-center gap-4"
            style={{
              color: "black",
              borderColor: "black",
              backgroundColor: "#baa158",
              minWidth: "410px",
            }}
          >
            Schedule Viewing
          </button>
        </div>
      </div>
      <div className="mt-2 hidden lg:flex justify-between items-center gap-6 text-md text-gray-600">
        <div className="flex gap-6">
          <p>Auction views: <span className="text-black font-bold">{vehicle.auctionViews}</span></p>
          <span className="text-gray-400">|</span>
          <p>Watching: <span className="text-black font-bold">{vehicle.Watching}</span></p>
        </div>

        <div className="w-full lg:w-1/4 flex justify-end ml-6 lg:ml-0 mt-4 lg:mt-0">
          <button
            className="border w-full lg:w-1/2 px-12 py-5 flex items-center justify-center gap-4"
            style={{
              color: "black",
              borderColor: "black",
              backgroundColor: "#baa158",
              minWidth: "410px",
            }}
          >
            Ask seller a question
          </button>
        </div>
      </div>
      <div className="lg:hidden mt-4 mr-4 w-full">
        <button
          className="border w-full px-12 py-5 flex items-center justify-center gap-4"
          style={{
            color: "black",
            borderColor: "black",
            backgroundColor: "#baa158",
            minWidth: "410px",
          }}
        >
          Ask seller a question
        </button>
      </div>
      <div className="flex justify-start gap-6 text-md text-gray-600 lg:hidden mt-4">
        <p>Auction views: <span className="text-black font-bold">{vehicle.auctionViews}</span></p>
        <span className="text-gray-400">|</span>
        <p>Watching: <span className="text-black font-bold">{vehicle.Watching}</span></p>
      </div>

      <div className="w-full lg:w-3/4">
      <div className="mt-10 pt-6">
        <h2 className="text-xl font-semibold text-black mb-4">Highlights</h2>
        <ul className="list-disc pl-6 text-md text-gray-800">
          {vehicle.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10 pt-6">

        <h2 className="text-xl font-semibold text-black mb-4">Technical Data</h2>
        <div className="flex items-center gap-2 bg-gray-100 p-3 mb-4">
          <span className="text-gray-500 font-medium">Chassis No:</span>
          <span className="text-black font-semibold">{vehicle.ChassisNo}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-gray-600">
          <div>
            <span className="text-gray-500 text-sm">Seller:</span>
            <br />
            <span className="font-semibold" style={{ color: '#be9b52' }}>{vehicle.Seller}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Seller Type:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.SellerType}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Exterior:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.exterior}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Interior:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.interior}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Lot#:</span>
            <br />
            <span className="text-black font-semibold">{vehicle["Lot#"]}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Location:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.location}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Mileage:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.Mileage}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Vehicle Model:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.VehicleModel}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Drive Orientation:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.DriveOrientation}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Spec:</span>
            <br />
            <span className="text-black font-semibold">{vehicle.Spec}</span>
          </div>
          <div>
          <span className="text-gray-500 text-sm">Fuel Type:</span>
          <br />
          <span className="text-black font-semibold">{vehicle.fuelType}</span>
        </div>
        <div>
          <span className="text-gray-500 text-sm">Transmission:</span>
          <br />
          <span className="text-black font-semibold">{vehicle.Transmission}</span>
        </div>
        
      </div>
    </div>
    <h3 className="mt-6 p-6 text-xl font-semibold bg-gray-200 text-gray-600 mb-4">Description</h3>
        <div className="mt-6 bg-gray-50 p-6">
        

          <h3 className="text-lg font-semibold text-gray-600 mb-4">Overview</h3>
          <p className="text-md text-gray-800">{vehicle.overview}</p>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Notable Commentary</h3>
          <ul className="list-disc pl-6 text-md text-gray-800">
            {vehicle.notableCommentary.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Specifications & Options</h3>
          <p className="text-md text-gray-800">{vehicle.specificationsAndOptions}</p>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Exterior</h3>
          <ul className="list-disc pl-6 text-md text-gray-800">
            {vehicle.Exterior.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Interior</h3>
          <ul className="list-disc pl-6 text-lg text-gray-800">
            {vehicle.Interior.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Mechanical</h3>
          <ul className="list-disc pl-6 text-md text-gray-800">
            {vehicle.Mechanical.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Service History</h3>
          <p className="text-md text-gray-800">{vehicle.serviceHistory}</p>


          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Ownership History</h3>
          <p className="text-md text-gray-800">{vehicle.ownershipHistory}</p>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Noted Imperfections</h3>
          <p className="text-md text-gray-800">{vehicle.notedImperfections}</p>
 
          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Included in the Sale</h3>
          <ul className="list-disc pl-6 text-md text-gray-800">
            {Array.isArray(vehicle.includedInTheSale) && vehicle.includedInTheSale.length > 0 ? (
              vehicle.includedInTheSale.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No items included in the sale.</li> 
            )}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-gray-600 mb-4">Summary</h3>
          <p className="text-md text-gray-800">{vehicle.summary}</p>
          <button className="mt-6 p-6 block mx-auto justify-center items-center bg-gray-200 text-gray-600">
            Read Less
          </button>

        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-4 bg-gray-50">
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Auction Summary</h3>
            <div className="space-y-8">
              <p className="text-gray-700">Auction Ends: <span className="font-bold">{vehicle.auctionSummary.auctionEnds}</span></p>
              <p className="text-gray-700">Auction Views: <span className="font-bold">{vehicle.auctionSummary.auctionViews}</span></p>
              <p className="text-gray-700">Watching: <span className="font-bold">{vehicle.auctionSummary.watching}</span></p>
              <p className="text-gray-700">Location: <span className="font-bold">{vehicle.auctionSummary.location}</span></p>
              <p className="text-gray-700">Seller: <span className="font-bold">{vehicle.auctionSummary.seller}</span></p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Bid History</h3>
            <div className="space-y-8">
              {vehicle.bidHistory && vehicle.bidHistory.length > 0 ? (
                vehicle.bidHistory.map((bid, index) => (
                  <div key={index} className="flex justify-between text-gray-700">
                    <span className="font-semibold">{bid.bidder}</span>
                    <span>{bid.bidAmount} ({bid.timeAgo})</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No bid history available.</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center p-4 border-2 border-gray-100">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center space-y-2">
                <p className="text-md text-gray-600">Highest Bid</p>
              <span className="text-black font-bold text-2xl">{vehicle.highestBid}</span>
            </div>
            <div className="border-l-2 border-gray-300 h-full">|</div>

            <div className="flex flex-col items-center space-y-2 w-full">
              <p className="text-md text-gray-600">Time Left</p>
              <span className="text-black font-bold text-2xl">{vehicle.auctionTime}</span>
            </div>
          </div>

            <button className="py-4 px-4"
            style={{
              color: "black",
              borderColor: "black",
              backgroundColor: "#baa158",
              minWidth: "210px",
            }}
            >
            Place a Bid
            </button>
          </div>
          <div className="mt-6 pb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comments & Questions</h3>

            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="To write a comment, please sign in to your account" 
                className="w-full p-6 pr-24 border border-gray-300 text-gray-600 focus:outline-none"
                readOnly
              />
              
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black py-2 px-5 transition-colors">
                Sign In
              </button>
            </div>
          </div>
          </div>
    </div>
  );
};

export default VehicleDetailsPage;