"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const slides = [
  {
    image: assets.cer1,
  },
  {
    image: assets.cer2,
  },
  {
    image: assets.cer3,
  },
  {
    image: assets.cer4,
  },
  {
    image: assets.cer5,
  },
  {
    image: assets.cer1,
  },
  {
    image: assets.cer2,
  },
  {
    image: assets.cer3,
  },
  {
    image: assets.cer4,
  },
  {
    image: assets.cer5,
  },

];
const Certifications = () => {

    const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <section className="pt-0 md:pt-[30px] lg:pt-[60px] pb-[50px] md:pb-[60px] lg:pb-[120px] relative  ">
      <div className="container">
        <div className=" ">
          <div className=" ">
            <h2 className="text-30 md:text-50 text-secondary font-medium mb-3 md:mb-[50px] lg:mb-[84px] uppercase">
             Certifications & Accreditation
            </h2>
      <Swiper
  modules={[Autoplay, Grid]}
  autoplay={{ delay: 4000 }}
  loop
  slidesPerView={1}
  grid={{
    rows: 5,
    fill: 'row', // ensures slides fill by row
  }}
  breakpoints={{
    320: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    1280: {
      slidesPerView: 5,
      grid: {
        rows: 1,
      },
    },
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}

  className="w-full h-full"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index} className="border-x  border-[#00000015] ">
      <div className=" bg-white flex items-center justify-center   h-[90px] group px-3">
        <Image
          src={slide.image}
          alt={''}
          className="     "
        />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
             {/* Custom Pagination */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
