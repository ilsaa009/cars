'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const CustomSwiper = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute bottom-4 left-4 w-full p-6 md:block lg:block hidden">
                <div className="text-sm text-gray-200">{slide.yearOfRelease}</div>
                <div className="text-4xl font-bold text-white">{slide.name}</div>
                <div className="text-sm text-gray-200">{slide.title}</div>
                <div className="flex space-x-2 mt-4">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-8 h-1 cursor-pointer rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 p-6 md:block lg:block hidden">
                {slide.button && (
                  <button className="bg-white text-black px-8 py-4 shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                    {slide.button}
                  </button>
                )}
              </div>  
            </div>
            <div className="block md:hidden lg:hidden w-full p-0 py-8">
                <div className="text-lg text-gray-900">{slide.yearOfRelease}</div>
                <div className="text-3xl font-bold text-black">{slide.name}</div>
                <div className="text-lg text-gray-900">{slide.title}</div>
                <div className="absolute bottom-4 right-4 p-6">
                {slide.button && (
                  <button className="bg-gray-200 text-black px-8 py-4 shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                    {slide.button}
                  </button>
                )}
              </div>  
              </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2  shadow-lg hover:bg-gray-200 transition-all bg-transparent"></div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2  shadow-lg hover:bg-gray-200 transition-all bg-transparent"></div>
    </div>
  );
};

export default CustomSwiper;
