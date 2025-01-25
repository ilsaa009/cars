'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const Carousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); 
      }
    };

    const autoplayInterval = setInterval(autoplay, 3000); 

    return () => clearInterval(autoplayInterval); 
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => {
            return (
              <div className="embla__slide relative" key={slide.id}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 w-full p-6">
                  <div className="text-sm text-gray-200">
                    {slide.yearOfRelease}
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {slide.name}
                  </div>
                  <div className="text-sm text-gray-200">
                    {slide.title}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-6">
                  {slide.button && (
                    <button className="bg-white text-black px-8 py-4 shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                      {slide.button}
                    </button>
                  )}
                </div>
              </div>

            );
          })}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-transparent hover:text-gray-300"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <FaAngleLeft size={35} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-transparent hover:text-gray-300"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <FaAngleRight size={35} />
      </button>
    </div>
  );
};

export default Carousel;
