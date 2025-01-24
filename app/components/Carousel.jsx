'use client'
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({loop: true});

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      {slides.map((slide, index) => (
        <div className="embla__slide" key={index}>
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            width={400} 
            height={200} 
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Carousel;
