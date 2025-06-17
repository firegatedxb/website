"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";

import { Home,Partners } from '@/public/types/Common';
import { motion } from "framer-motion";
import {  slideInLeft } from "@/public/frameranimation/animation";
import { assets } from "@/public/assets/assets";

const TechnologyPartners = ({ data, pdata }: { data: Home, pdata: Partners}) => {

const [showPagination, setShowPagination] = useState(false);

  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
  const swiper = swiperRef.current;
  if (!swiper) return;

  const updatePaginationVisibility = () => {
    const totalSlides = swiper.slides.length;
    const visibleSlides = swiper.params.slidesPerView;

    const gridRows = swiper.params.grid?.rows || 1;
    const visibleCount = (typeof visibleSlides === 'number' ? visibleSlides : 1) * gridRows;

    setShowPagination(totalSlides > visibleCount);
  };

  updatePaginationVisibility();

  swiper.on('resize', updatePaginationVisibility);
  return () => swiper.off('resize', updatePaginationVisibility);
}, []);

  return (
    <section className="py-[50px]  md:py-[50px] lg:pt-[70px]  lg:pb-[70px] 2xl:pt-[108px]  2xl:pb-[78px] relative bg-EFEFEF">
      <div className="container">
        <div className=" ">
          <div className=" ">
<motion.h2
  className="text-50 text-secondary font-medium mb-3 md:mb-8 uppercase"
  variants={slideInLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  custom={2}
>
  {data.partners.title}
</motion.h2>
          <Swiper
  modules={[Autoplay, Grid]}
  autoplay={{ delay: 4000 }}
  loop
  slidesPerView={1}
  grid={{ rows: 1, fill: 'row' }}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 8, grid: { rows: 1 } },
    768: { slidesPerView: 2, spaceBetween: 8, grid: { rows: 1 } },
    1024: { slidesPerView: 3, spaceBetween: 8, grid: { rows: 1 } },
    1280: { slidesPerView: 4, spaceBetween: 8, grid: { rows: 1 } },
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="w-full h-full"
>
  {pdata.partners.map((slide, index) => (
    <SwiperSlide key={index}>
          <a href={slide.website}   target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative bg-white flex items-center justify-center rounded-[20px] h-[200px] md:h-[226px] lg:h-[286px] group"
      >
        <div>
          <Image src={slide.logo} alt={slide.logoAlt} width={240} height={70} />
        </div>
            <div className="w-[50px] h-[50px] rounded-full border border-black flex items-center justify-center absolute top-[10px] right-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <Image src={assets.redarrow} alt="" />
            </div>
      </motion.div>
      </a>
    </SwiperSlide>
  ))}
</Swiper>
            {/* Custom Pagination */}
            {showPagination && (
  <div className="w-full">
    <div className="container">
      <div className="flex gap-2 justify-center mt-4 md:mt-[42px]">
        {data.partners.items.map((_, index) => (
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
)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
