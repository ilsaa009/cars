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
    <div className="bg-white min-h-[60vh] flex justify-center items-center">
      <div className="w-full max-w-[56vw] lg:max-w-[64vw] xl:max-w-[68vw]">
        {slides.length > 0 ? (
          <Carousel slides={slides} />
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}
