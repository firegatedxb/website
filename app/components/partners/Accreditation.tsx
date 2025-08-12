"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";

import { Home,Partners } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { fadeInUpsec, slideInLeft } from '@/public/frameranimation/animation';


const Accreditation = ({ data ,homeData}: { data: Partners ,homeData:Home }) => {

  console.log(homeData)
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
    <div className='container'>
        <div className='py-[30px] md:py-[40px] 2xl:py-[100px] '>
        <div className='flex flex-col  '>
          <motion.h2 variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            custom={2} className='text-50 text-site-blue font-medium mb-3 lg:mb-[30px] uppercase'>{data.accreditTitle}</motion.h2>
           <motion.div  variants={fadeInUpsec}
                              initial="hidden"
                              whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}>
            <p className='text-19 text-gray'>{data.accreditDescription}</p>
            </motion.div>
            </div>
<motion.div  variants={fadeInUpsec}
                              initial="hidden"
                              whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}>
              <div className='py-[30px] md:py-[50px] lg:py-[70px] '>
                  <Swiper
  modules={[Autoplay, Grid]}
  autoplay={{ delay: 3000 }}
  loop
  slidesPerView={1}
  grid={{
    rows: 4,
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
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}

  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  className="w-full h-full"
>
  {homeData.certifications.items.map((item, index) => (
    <SwiperSlide key={index} className="border-x  border-[#00000015] ">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div className=" bg-white flex items-center justify-center   h-[230px] group px-3">
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={150}
          height={150}
        />

      </div>
      </a>
    </SwiperSlide>
  ))}
</Swiper>
 {showPagination && (
  <div className="w-full">
    <div className="container">
      <div className="flex gap-2 justify-center mt-4 md:mt-[42px]">
        {homeData.certifications.items.map((_, index) => (
          <button
            key={index}
            className={`w-[50px] h-[3px] cursor-pointer rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-primary scale-125 max-w-[27px]"
                : "bg-gray max-w-[9px]"
            }`}
            onClick={() => swiperRef.current?.slideToLoop(index)}
          />
        ))}
      </div>
    </div>
  </div>
)}
          </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Accreditation