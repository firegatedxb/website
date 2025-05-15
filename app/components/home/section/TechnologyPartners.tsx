"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const slides = [
  {
    image: assets.partner1,
  },
  {
    image: assets.partner2,
  },
  {
    image: assets.partner3,
  },
  {
    image: assets.partner4,
  },

];
const TechnologyPartners = () => {

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-[50px]  md:py-[50px] lg:pt-[108px]  lg:pb-[78px] relative bg-EFEFEF">
      <div className="container">
        <div className=" ">
          <div className=" ">
            <h2 className="text-50 text-secondary font-medium mb-3 md:mb-8 uppercase">Our Technology Partners</h2>
            <Swiper
              modules={[Autoplay, Grid]}
              autoplay={{ delay: 4000 }}
              loop
              slidesPerView={1}
              grid={{
                rows: 4,
                fill: 'row', // ensures slides fill by row
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                  grid: {
                    rows: 2,
                  },
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                  grid: {
                    rows: 2,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                  grid: {
                    rows: 2,
                  },
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                  grid: {
                    rows: 1,
                  },
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className=" bg-white flex items-center justify-center rounded-[20px] h-[200px] md:h-[226px] lg:h-[286px] group">
                    <Image src={slide.image} alt={''}/>
                    <div className="w-[50px] h-[50px] rounded-full border border-black flex items-center justify-center absolute top-[10px] right-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out  ">
                      <Image src={assets.redarrow} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Pagination */}
            <div className="w-full">
              <div className="container">
                <div className="flex gap-2 justify-center mt-4 md:mt-[42px]">
                  {slides.map((_, index) => (
                    <button key={index} className={`w-[50px] h-[3px] cursor-pointer rounded-full transition-all duration-300 ${activeIndex === index ? "bg-primary scale-125 max-w-[27px]" : "bg-white max-w-[9px]"}`}
                      onClick={() => swiperRef.current?.slideToLoop(index)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
