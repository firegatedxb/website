"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const slides = [
  {
    image: assets.slideic1,
  },
  {
    image: assets.slideic2,
  },
  {
    image: assets.slideic1,
  },
  {
    image: assets.slideic1,
  },
  {
    image: assets.slideic1,
  },
  {
    image: assets.slideic1,
  },
];
const FeaturedProjects = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py[50px] md:py-[50px] lg:pt-[120px]  lg:pb-[150px] relative bg-secondary text-white">
      <div className="container">
        <div className="flex md:gap-[45px]  lg:gap-[108px]">
          <div className="w-1/4">
            <div className="flex flex-col justify-between h-full">
              <div>
              <h2 className="text-50 font-medium mb-4 md:mb-[55px] max-w-[10ch] leading-[1.2]">Our Featured
              Projects</h2>
            <p className="text-19">Our team of experts excels in designing, constructing, and maintaining fire-fighting systems (FFS), fire alarm systems (FAS), electrical evacuation lighting.</p>

            </div>
           <button className="flex mt-6 cursor-pointer items-center bg-red-600 hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase">
              <span>More projects</span>
              <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
            </div>
          </div>

        <div className="w-2/3 absolute right-0 curslider">
            <Swiper
                modules={[Autoplay]}
  autoplay={{ delay: 4000 }}
  loop
  slidesPerView={2}

            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 8,
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
                <div className="   flex items-center justify-center mnsuy group">
                  <Image src={slide.image} alt={""} className="     " />
                  <div className="w-[50px] h-[50px] rounded-full  border flex items-center justify-center absolute bottom-[0px] left-[0px]   trst  ">
                    <Image src={assets.redarrow} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="  w-full">
            <div className="container">
              <div className="flex gap-2 justify-center mt-4 md:mt-[42px]">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-[50px] h-[3px] cursor-pointer rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-primary scale-125 max-w-[27px]"
                        : "bg-white max-w-[9px]"
                    }`}
                    onClick={() => swiperRef.current?.slideToLoop(index)}
                  />
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

export default FeaturedProjects;
