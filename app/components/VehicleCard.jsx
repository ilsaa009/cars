import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function VehicleCard({
  id,
  imageUrl,
  title,
  name,
  yearOfRelease,
  location,
  latestBid,
  timeLeft,
  favoritesCount,
  auctionStartDate,
}) {
  const [city, country] = location.split(", ");

  return (
    <Link href={`/vehicle/${id}`} passHref>
      <div className="bg-white p-4 border-1.5 border-gray-300 w-full max-w-[480px] cursor-pointer">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={name}
            width={1000}
            height={600}
            className="object-cover w-full h-[600px] m-0 p-0"
          />
          <div className="absolute top-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full flex items-center gap-2">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm">{favoritesCount}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">{yearOfRelease}</p>
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-sm">{title}</p>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right leading-tight">
              <p className="text-sm">{city}</p>
              <p className="text-sm">{country}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-4 flex justify-between items-center">
            <div>
              {latestBid ? (
                <>
                  <p className="text-xs text-gray-400">Latest bid</p>
                  <p className="text-lg font-bold text-black">{latestBid}</p>
                </>
              ) : (
                <p className="text-black flex justify-center items-center text-lg">
                  Auction Begins: <span className=" px-2 font-bold">{auctionStartDate}</span>
                </p>
              )}
            </div>
            {timeLeft && (
              <div>
                <p className="text-xs text-gray-400 text-right">Time left</p>
                <p className="text-lg font-bold" style={{ color: '#be9b52' }}>{timeLeft}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
