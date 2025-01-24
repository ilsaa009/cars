import { CiSearch } from 'react-icons/ci';
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-900">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          <button className="w-8 h-8 bg-transparent rounded-full">
            <CiMenuBurger className="w-5 h-5 text-gray-900" />
          </button>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <Image
            src="/sbx-cars-sb-2024.svg"
            alt="SBX Cars Logo"
            width={200}
            height={200}
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="w-8 h-8 bg-transparent rounded-full">
            <CiSearch className="w-5 h-5 text-gray-900" />
          </button>
          <button className="text-black py-1 px-4 rounded-md hover:text-blue-700">
            Sign In
          </button>
        </div>
      </div>

      <div className="container mx-auto py-4 mt-4"> 
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#auctions">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                Auctions
              </span>
            </Link>
          </li>
          <li>
            <Link href="#preview">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                Preview
              </span>
            </Link>
          </li>
          <li>
            <Link href="#results">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                Results
              </span>
            </Link>
          </li>
          <li>
            <Link href="#sell">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                Sell
              </span>
            </Link>
          </li>
          <li>
            <Link href="#faq">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                FAQ
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <span className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
                About
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
