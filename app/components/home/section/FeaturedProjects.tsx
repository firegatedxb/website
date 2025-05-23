"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";

import { Home } from '@/public/types/Common';


const FeaturedProjects = ({ data }: { data: Home,  }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
 const [projectList, setProjectList] = useState<{ _id: string, name: string;
    slug:string;
    client: string;
    sector: string;
    consultant: string;
    location: string;
    title: string;
    description: string;
    thumbnail: string;
    thumbnailAlt: string;
    coverPhoto: string;
    coverPhotoAlt: string;
    status:string;
    metaTitle: string;
    metaDescription: string;
    featuredProject:string; }[]>([]);

 const handleFetchProjects = async () => {
    try {
      const response = await fetch("/api/admin/project");
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setProjectList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching industry", error);
    }
  }

  useEffect(() => {
    handleFetchProjects();
  }, [])



 useEffect(() => {
  if (sourceRef.current && window.innerWidth >= 768) {
    const updateHeight = () => {
      const newHeight = sourceRef.current?.offsetHeight || 0;
      setHeight(newHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }
}, [projectList]); // re-run when projectList changes

  return (
    <section className="py-[50px]  md:py-[50px] lg:pt-[120px] lg:pb-[120px] relative bg-secondary text-white">
      <div className={`container relative z-10   `} style={{ height: `${height}px` }}>
        <div className="flex md:gap-[45px] lg:gap-[108px] h-full">
          <div className="lg:w-1/4">
            <div className="flex flex-col md:justify-between md:h-full">
              <div>
                <h2 className="text-50 font-medium mb-4 md:mb-[55px] max-w-[10ch] leading-[1.2]">{data.projects.title}</h2>
                <p className="text-19">{data.projects.description}</p>
              </div>
             {/*  <button className="flex mt-6 cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase">
                <span>More projects</span>
                <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1.5L8.5 8.5L1.5 15.5" stroke="#263967" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button> */}
            </div>
          </div>

        </div>
      </div>
      <div className=" w-full lg:w-2/3 curslider mt-10 lg:mt-0 lg:absolute right-0 top-10 lg:top-[120px] pl-8 lg:px-0" ref={sourceRef}>
        {projectList.length > 0 && (
          <div>
            <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {projectList.map((project) => (
            <SwiperSlide key={project._id}>
              <div className="flex flex-col justify-center mnsuy group">
                <div className="relative mb-8">
                  <Image src={project.coverPhoto} alt={""} width={487} height={536} className="w-full lg:h-[536px] object-cover rounded-3xl" />
                  <div className="w-[50px] h-[50px] rounded-full border flex items-center justify-center absolute bottom-[0px] left-[0px]   trst  ">
                    <Image src={assets.redarrow} alt="" />
                  </div>
                </div>
                <h3 className="text-white text-30 font-medium leading-[1.3] mb-3">{project.name}</h3>
                <p className="text-[#bebebe] text-19 font-normal leading-[1.526315789473684]">{project.sector}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()} className="invisible lg:visible absolute top-2/5 right-40 transform -translate-y-1/2 bg-white text-black rounded-full py-3 px-8 lg:py-[13.5px] shadow-lg z-10 cursor-pointer">
          <Image src={assets.bluearrowRight} alt="Next" width={7} height={14} className="w-full h-auto" />
        </button>
          </div>
        )}
        {/* Custom right nav button*/}

      </div>
    </section>
  );
};

export default FeaturedProjects;
