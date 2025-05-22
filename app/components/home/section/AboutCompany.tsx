"use client";

import React from "react";

import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";


import { Home } from '@/public/types/Common';

const AboutCompany = ({ data }: { data: Home }) => {
  return (
    <section className="py-[50px]  md:py-[50px] lg:pt-[97px] lg:pb-[131px]  relative">
      <div className="container">
        <div className="flex">

            <div className="lg:w-1/2 lg:pr-15 xl:pr-[84px]">
              <h2 className="text-50 text-secondary font-medium mb-3 md:mb-[18px] uppercase">
{data.aboutSection.title}
            </h2>
              <div className="pb-2 lg:pb-8"  >
              <div className=" "  >
                <p className="text-graytext text-19 mb-5">
                 {data.aboutSection.description}
                </p>

              </div>
              </div>
              <Link href="/about">
                <button className="flex cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group">
                  <span>READ MORE</span>
                  <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center ">
                    <Image src={assets.bluearrowRight} width={14} height={28} alt="read-more" className="w-full h-[14px] object-contain group-hover:animate-pulse"></Image>
                  </span>
                </button>
              </Link>
              <div className="grid grid-cols-2 mt-8 lg:mt-[94px]">
                {data.aboutSection.items.map((item, index) => (
                  <div
                    key={index}
                    className={`${index < 2 ? "border-b border-black/35 pb-4 md:pb-8 mb-4 md:mb-8" : ""
                      }`}
                  >
                    <p className="text-50 text-secondary font-medium">{item.number}</p>
                    <p className="font-medium text-30 text-graytext pr-2">{item.value}</p>
                  </div>
                ))}
              </div>

            </div>


        </div>

      </div>

       <div className="absolute right-0 bottom-0 z-[-1] w-1/2 invisible lg:visible">
             <Image src={data.aboutSection.image} alt={data.aboutSection.title} width={952} height={904}  className="w-full h-full object-cover" />
        </div>
    </section>
  );
};

export default AboutCompany;
