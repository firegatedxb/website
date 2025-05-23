"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay, Grid } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";

import { Home } from '@/public/types/Common';
import { motion } from "framer-motion";
import { fadeInUp } from "@/public/frameranimation/animation";
const Certifications = ({ data }: { data: Home }) => {

    const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <section className="pt-[30px] md:pt-[30px] lg:pt-[60px] pb-[50px] md:pb-[60px] lg:pb-[120px] relative  ">
      <div className="container">
        <div className=" ">
          <div className=" ">
             <motion.h2
              className="text-30 md:text-50 text-secondary font-medium mb-3 md:mb-[50px] lg:mb-[84px] uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            > {data.certifications.title}  {data?.systems.title}
            </motion.h2>
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
  {data.certifications.items.map((slide, index) => (
    <SwiperSlide key={index} className="border-x border-[#00000015]">
  <motion.div
    className="bg-white flex items-center justify-center group px-3"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Image
      src={slide.image}
      alt={slide.imageAlt}
      width={240}
      height={70}
    />
  </motion.div>
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
