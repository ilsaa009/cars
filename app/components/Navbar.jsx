"use client";

import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery(""); 
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const clearSearch = () => {
    setSearchQuery("");  
    setIsSearchOpen(false); 
  };
  return (
    <nav className="bg-white min-w-full text-gray-900 sticky top-0 z-10 py-6">
      <div className="container mx-auto flex justify-between items-center py-2 sticky top-0 bg-white z-50">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="w-8 h-8 bg-transparent rounded-full focus:outline-none"
          >
            <CiMenuBurger className="w-5 h-5 text-gray-900" />
          </button>
        </div>
        <div className="flex justify-center items-center flex-shrink-0">
          <Image 
            src="/sbx-cars-sb-2024.svg" 
            alt="SBX Cars Logo" 
            width={0} 
            height={0} 
            className="w-[25vw] sm:w-[20vw] md:w-[20vw] lg:w-[12vw] h-auto" 
          />
        </div>


        <div className="flex items-center gap-4">
          {!isSearchOpen && (
            <button
              onClick={toggleSearch}
              className="w-8 h-8 bg-transparent rounded-full"
            >
              <CiSearch className="w-5 h-5 text-gray-900" />
            </button>
          )}
          {isSearchOpen && (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for a vehicle"
                value={searchQuery}
                onChange={handleSearchChange}
                className="ml-2 p-1 border border-gray-500 bg-gray-200 pr-10"
              />
              <button
                onClick={clearSearch}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>
          )}

          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-black py-1 px-4 hover:text-blue-700 hidden lg:block"
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-black text-2xl lg:hidden"
          >
            <BsPersonFill />
          </button>
        </div>
      </div>
        {isLoginOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 shadow-lg w-96 relative">
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <p className="text-center text-gray-600 mb-4">
                  Please log in to watch, bid, comment, or sell
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-gray-400"
                />
                <div className="relative w-full mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-400 pr-16" 
                  />
                  <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-sm text-black font-bold cursor-pointer">
                  | Forget?
                  </span>
                </div>
                <button
                  className="w-full text-black py-2 hover:opacity-80"
                  style={{ backgroundColor: "#baa158" }}
                >
                  Log In
                </button>
                <p className="text-center mt-4 text-gray-600">
                  Don&apos;t have an account?{" "}
                  <button
                
                    className="text-black font-bold underline"
                  >
                    Sign up here
                  </button>
                </p>
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-2 text-gray-500">or</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <button className="w-full bg-white text-black py-3 mb-4 border border-gray-400">
                  Continue with Google
                </button>
                <button className="w-full bg-white text-black py-3 border border-gray-400">
                  Continue with Facebook
                </button>
              </div>
            </div>
          )}

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <button
              onClick={toggleMenu}
              className="absolute top-4 left-4 text-gray-900 text-2xl"
            >
              ✕
            </button>

            <ul className="mt-20 space-y-10 px-6">
              <li>
                <Link href="#auctions">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Auctions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#preview">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Preview
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#results">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Results
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#sell">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Sell Your Vehicle
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#team">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#press">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Press
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#careers">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span className="text-[16px] text-gray-600 hover:border-b-4 hover:border-black hover:pb-2 font-['Proxima_Nova_Regular']">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>


            <div className="px-6 mt-14 text-gray-500">
              <span className="block text-sm">Powered by</span>
              <div className="relative w-40 h-8">
                <Image
                  src="/supercar-blondie.svg" 
                  alt="SupercarBlondie"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}