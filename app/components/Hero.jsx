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
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[50%] h-[400px] sm:h-[350px] md:h-[400px] lg:h-[300px] xl:h-[250px] mb-10 lg:mb-16">
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
