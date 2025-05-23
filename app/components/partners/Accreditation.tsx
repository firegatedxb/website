"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";

import { Partners } from '@/public/types/Common';


const Accreditation = ({ data }: { data: Partners }) => {
    const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div className='container'>
        <div className='py-[50px] md:py-[70px] lg:py-[100px] '>
            <div className='flex flex-col  '>
                <h2 className='text-50 text-site-blue font-medium mb-3 lg:mb-[30px] uppercase'>Accreditation</h2>
                <p className='text-19 text-black'>Our Products & Systems comply below Certifications, Codes and Authority Requirements</p>
            </div>

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

  className="w-full h-full"
>
  {data.accredit.map((item, index) => (
    <SwiperSlide key={index} className="border-x  border-[#00000015] ">
      <div className=" bg-white flex items-center justify-center   h-[230px] group px-3">
        <Image
          src={item.accreditImage}
          alt={item.accreditImageAlt}
          width={150}
          height={150}
        />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
               </div>
        </div>
    </div>
  )
}

export default Accreditation