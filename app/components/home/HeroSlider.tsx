
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
    image: assets.slider,
    title: `<span class="text-primary">Over 20 Years</span> of Expertise in Fire & Security Solutions`,
   /*  description:
      "Safe Tech, a subsidiary of UNEC, delivers innovative construction solutions with advanced precast, prestress, and GRC products, tailored to meet diverse project needs", */
  },
 
];

const HeroSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden h-[calc(100vh-120px)]">
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full ">
              <Image src={slide.image} alt={slide.title} width={1500} height={1000} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/75"/>
              <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-36 gap-8 text-white">
                <h1 className="text-2xl font-bold uppercase 3xl:mr-[35%]" dangerouslySetInnerHTML={{ __html: slide.title }}>
                  {/* {slide.title} */}
                </h1>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-[10%] z-20 w-full">
        <div className="container">
          <div className="flex gap-3 justify-end">
            {slides.map((_, index) => (
              <button key={index} className={`w-[50px] h-[2px] rounded-full transition-all duration-300 ${activeIndex === index ? "bg-white scale-125" : "bg-white/50" }`}
                onClick={() => swiperRef.current?.slideToLoop(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
