"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Home , systems } from '@/public/types/Common';

const OurSystems = ({ data }: { data: Home }) => {

  const [systemss, setSystemss] = useState<{
    metaTitle: string,
    metaDescription: string,
    pageTitle: string,
    title: string,
    description: string,
    banner: string,
    bannerAlt: string,
    componentTitle: string,
    introTitle: string,
        introDescription: string,
    componentDescription: string,
         components: [
          {
            title: string,
            description: string,
            image: string,
            imageAlt: string
          }
        ],
    systems: [
      {
        image: string,
        imageAlt: string,
        title: string,
        description: string,
        logo: string,
        logoAlt: string,
        banner: string,
        bannerAlt: string,
homeImage: string,
        homeImageAlt: string,
        slug: string,
        metaTitle: string,
        metaTitleAlt: string,
        metaDescription: string
      }
    ]
  }[]>([]);

   const handleFetchSystem = async () => {
      try {
        const response = await fetch("/api/admin/systems");
        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          setSystemss(data.data);
        } else {
          const data = await response.json();
          alert(data.message);
        }
      } catch (error) {
        console.log("Error fetching industry", error);
      }
    }

    useEffect(() => {
      handleFetchSystem();
    }, [])
console.log(systemss)
  return (

    <section className="pt-[50px]  md:pt-[50px] lg:pt-[108px] ">
      <div className="container ">
        <h2 className="text-50 text-secondary font-medium mb-3 md:mb-8 uppercase">{data.systems.title}</h2>
        <div className=" relative border-b border-[#00000020] pb-[50px] md:pb-[70px] lg:pb-[121px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[8px]">
          {systemss[0]?.systems?.map((item, index) => (
            <div key={index}>
              <div className="relative group rounded-[20px] overflow-hidden h-full group bg-EFEFEF hover:bg-secondary hover:text-white flex flex-col  transition-all duration-500">
                <div className=" relative transition-all duration-500 overflow-hidden">
                    <Image src={item.homeImage} alt={item.homeImageAlt} width={399} height={381}  className="w-full object-cover group-hover:scale-105 transition-all duration-400"/>
                </div>
                <h3 className="text-32 font-medium leading-[1.3] text-black group-hover:text-white duration-400 transition-colors px-5 pt-5   lg:px[28px] lg:pt-8 ">{item.title}</h3>
                <div className="mt-auto">
                  <div className="px-5 py-5 lg:py-8 lg:px[28px]">
                    <div className="mt-auto cursor-pointer transition-all duration-400">

                       <Link href={item.slug}> <button className="flex py-[7px] px-[20px] cursor-pointer items-center justify-between text-15 text-black bg-white group-hover:bg-primary group-hover:text-white font-medium
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
