"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const OurSystems = () => {
  const services = [
    {
      image: assets.sys1,
    title: 'Firefighting System',
   },
    {
      image: assets.sys2,
    title: 'Fire Alarm Detection System',
   },
    {
      image: assets.sys3,
    title: 'Voice Evacuation System',
   },
    {
      image: assets.sys4,
    title: 'Emergency Exit Lighting System',
   },
];
  return (

    <section  >
      <div className="container ">
        <div className="py[50px] md:py-[50px] lg:pt-[108px]  lg:pb-[121px] relative border-b border-[#00000020] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[8px]">

          {services.map((item, index) => (
            <div key={index}>
              <div className="relative group rounded-[20px] overflow-hidden h-full group bg-EFEFEF hover:bg-secondary hover:text-white   transition-all duration-500">
                <div className=" relative transition-all duration-500 ">
                  <figure className=" ">
                    <Image
                      src={item.image}
                      alt=""
                      className="   w-full object-cover"
                    />
                  </figure>
                </div>
                <div className="">
                  <div className="px-5 py-5 lg:px-[28px] lg:py-8 ">
                    <p className="text-32 font-medium  leading-[1.3]">{item.title}</p>
                    <div className="mt-4 md:mt-8 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-[-20px] group-hover:translate-x-0">
                      <button className="flex py-[7px] px-[20px] cursor-pointer items-center text-15 text-black w-fit font-medium rounded-[20px] space-x-5 text-xs leading-[1.87] uppercase bg-white">
                      <span>READ MORE</span>
                      <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
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
