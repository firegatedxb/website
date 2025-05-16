"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";
const OurSystems = () => {
  const services = [
    {
      id: 1,
      image: assets.sys1,
    title: 'Firefighting System',
    url: 'fire-fighting-system',
   },
    {
      id: 2,
      image: assets.sys2,
    title: 'Fire Alarm Detection System',
    url: 'systems',
   },
    {
      id: 3,
      image: assets.sys3,
      title: 'Voice Evacuation System',
      url: 'systems',
   },
    {
      id: 4,
      image: assets.sys4,
    title: 'Emergency Exit Lighting System',
    url: 'emergency-exit-lighting-system',
   },
];
  return (

    <section className="pt-[50px]  md:pt-[50px] lg:pt-[108px] pb-[0px] lg:pb-[121px]">
      <div className="container ">
        <h2 className="text-50 text-secondary font-medium mb-3 md:mb-8 uppercase">Our Systems</h2>
        <div className=" relative border-b border-[#00000020] pb-[50px] md:pb-[70px] lg:pb-[121px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[8px]">
          {services.map((item, index) => (
            <div key={index}>
              <div className="relative group rounded-[20px] overflow-hidden h-full group bg-EFEFEF hover:bg-secondary hover:text-white flex flex-col  transition-all duration-500">
                <div className=" relative transition-all duration-500 overflow-hidden">
                    <Image src={item.image} alt="" className="w-full object-cover group-hover:scale-105 transition-all duration-400"/>
                </div>
                <h3 className="text-32 font-medium leading-[1.3] text-black group-hover:text-white duration-400 transition-colors px-5 pt-5   lg:px[28px] lg:pt-8 ">{item.title}</h3>
                <div className="mt-auto">
                  <div className="px-5 py-5 lg:py-8 lg:px[28px]">
                    <div className="mt-auto cursor-pointer transition-all duration-400">
                      
                       <Link href={item.url}> <button className="flex py-[7px] px-[20px] cursor-pointer items-center justify-between text-15 text-black bg-white group-hover:bg-primary group-hover:text-white font-medium
                      rounded-[20px] space-x-5 text-xs leading-[1.87] uppercase w-full">
                      <span>READ MORE</span>
                      <span className="rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                        <svg className="w-4 h-4 text-secondary group-hover:stroke-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      </button>
                        </Link>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          </div>
      </div>
    </section>
  );
};

export default OurSystems;
