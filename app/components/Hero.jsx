'use client';
import React, { useEffect, useState } from 'react';
import CustomSwiper from './CustomSwiper'; 

export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('/data/vehicleslider.json');
        if (!response.ok) {
          throw new Error('Failed to fetch the slider data');
        }
        const data = await response.json();
        setSlides(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="bg-white flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-[600px] sm:w-[800px] md:w-[900px] lg:w-[1400px] xl:w-[1270px] h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : slides.length > 0 ? (
          <CustomSwiper slides={slides} /> 
        ) : (
          <p className="text-center text-gray-500">No slides available.</p>
        )}
      </div>
    </div>
  );
}
