"use client";

import React from "react";

import Image from "next/image";
import { assets } from "@/public/assets/assets";

const AboutCompany = () => {
  return (
    <section className="py[50px] md:py-[50px] lg:pt-[97px]  lg:pb-[131px]  relative">
      <div className="container">
        <div className="flex">
          <div className="w-1/2 pr-15 xl:pr-[84px]">
            <h2 className="text-50 text-secondary font-medium mb-3 md:mb-[18px] uppercase">
              About Company
            </h2>
            <div className="pb-2 lg:pb-8">
              <p className="text-graytext text-19 mb-5">
                With over two decades of extensive experience in fire and
                security systems, customer relations, and satisfaction, our
                company is dedicated to delivering top-quality team services.
              </p>

              <p className="text-graytext text-19 mb-5">
                Our team of experts excels in designing, constructing, and
                maintaining fire-fighting systems (FFS), fire alarm systems
                (FAS), electrical evacuation lighting (EEL), and public address
                and voice evacuation (PAVA) systems. We have established strong
                relationships with renowned clients, consultants, and
                contractors across the UAE.
              </p>
            </div>
            <button className="flex cursor-pointer items-center bg-red-600 hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase">
              <span>READ MORE</span>
              <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
            <div className="grid grid-cols-2 mt-8 lg:mt-[94px]">
              <div className="border-b pb-4 md:pb-8 mb-4 md:mb-8">
                <p className="text-50 text-secondary font-medium">20+</p>
                <p className="font-medium text-30 text-graytext">Years of Expertise</p>
              </div>
              <div className="border-b pb-4 md:pb-8 mb-4 md:mb-8">
                <p className="text-50 text-secondary font-medium">1000+</p>
                <p className="font-medium text-30 text-graytext">Assets Secured</p>
              </div>
              <div className="">
                <p className="text-50 text-secondary font-medium">10+</p>
                <p className="font-medium text-30 text-graytext">Global Partners</p>
              </div>
              <div className="">
                <p className="text-50 text-secondary font-medium">250+</p>
                <p className="font-medium text-30 text-graytext">Assets Secured</p>
              </div>
            </div>
          </div>

        </div>

      </div>

       <div className="absolute right-0 bottom-0 z-[-1] w-1/2">
             <Image src={assets.aboutcompany} alt={''}   className="w-full h-full object-cover" />
            </div>
    </section>
  );
};

export default AboutCompany;
