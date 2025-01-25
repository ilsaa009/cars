'use client'
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Hero() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/data/vehicleslider.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the slider data");
        }
        return response.json();
      })
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error loading slider data:", error));
  }, []);

  return (
    <div className="bg-white min-h-[60vh] flex justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {slides.length > 0 ? (
          <Carousel slides={slides} />
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
