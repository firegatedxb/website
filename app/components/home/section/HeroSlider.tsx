"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";

import { Home } from '@/public/types/Common';

const HeroSlider = ({ data }: { data: Home }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden h-[calc(100vh-120px)] xl:h-screen ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {data.banners.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full slideroverlay">
                <Image src={slide.image} alt={slide.title} width={1500} height={1000} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 " />
                <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-[22dvh] gap-[52px] text-white">
                  <h1 className="text-65 font-bold uppercase max-w-[29ch] leading-[1.230769230769231]" dangerouslySetInnerHTML={{ __html: slide.title }}>
                    {/* {slide.title} */}
                  </h1>
                  <Link href="/about">
                  <button className="flex cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87]
                  uppercase group">
                    <span>READ MORE</span>
                    <span className="bg-white rounded-full p-1 w-7 h-7 flex items-center justify-center">
                      <Image src={assets.bluearrowRight} width={14} height={28} alt="read-more" className="w-full h-[14px] object-contain group-hover:animate-pulse"></Image>
                    </span>
                    </button>
                    </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="absolute bottom-[128px] z-20 w-full">
          <div className="container">
            <div className="flex gap-2 justify-end">
              {data.banners.map((_, index) => (
                <button key={index} className={`w-[50px] h-[3px] cursor-pointer rounded-full transition-all duration-300 ${activeIndex === index ? "bg-primary scale-125 max-w-[27px]" : "bg-white max-w-[9px]"}`}
                  onClick={() => swiperRef.current?.slideToLoop(index)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
