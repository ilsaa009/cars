import React from 'react';
import Link from 'next/link';

const Navbar1 = () => {
  return (
    <nav className="bg-white text-gray-900 mb-0">
      <div className="container mx-auto py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#auctions" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              Auction
            </Link>
          </li>
          <li>
            <Link href="#preview" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              Preview
            </Link>
          </li>
          <li>
            <Link href="#results" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              Results
            </Link>
          </li>
          <li>
            <Link href="#sell" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              Sell
            </Link>
          </li>
          <li>
            <Link href="#faq" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-lg text-gray-600 hover:border-b-4 hover:border-black hover:pb-2">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
