"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Home  } from '@/public/types/Common';
import { motion } from "framer-motion";
import { containerVariants } from "@/public/frameranimation/animation";

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
  } | null>(null);

   const handleFetchSystem = async () => {
      try {
        const response = await fetch("/api/admin/systems");
        if (response.ok) {
          const data = await response.json();
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
  }, []);

  return (
    <section className="pt-10   lg:pt-12 2xl:pt-17 ">
      <div className="container ">
        <motion.h2
  className="text-50 text-secondary font-medium mb-3 md:mb-8 uppercase"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {data?.systems.title}
</motion.h2>

 <motion.div
  className="relative border-b border-[#00000020] pb-10] md:pb-12 2xl:pb-17"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[8px]">
    {systemss?.systems?.map((item, index) => (
      <div key={index}>
        <div className="relative group rounded-[20px] overflow-hidden h-full bg-EFEFEF hover:bg-secondary active:bg-secondary hover:text-white active:text-white flex flex-col transition-all duration-500">

          <motion.div
            className="relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={item.homeImage}
              alt={item.homeImageAlt}
              width={399}
              height={381}
              className="w-full object-cover group-hover:scale-105 group-active:scale-105 transition-all duration-400 h-[250px]"
            />
          </motion.div>

          <h3 className="text-19 font-medium leading-[1.3] text-black group-hover:text-white group-active:text-white duration-400 transition-colors px-5 pt-5 lg:px[28px] lg:pt-8">
            {item.title}
          </h3>

          <div className="mt-auto px-5 py-5 lg:py-8 lg:px[28px]">
            {item.slug !== "#" ? (
              <Link href={`systems/${item.slug}`}>
                <button className="cursor-pointer flex py-[7px] px-[20px] items-center justify-between text-15 text-black bg-white group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white font-medium rounded-[20px] space-x-5 text-xs leading-[1.87] uppercase w-full">
                  <span>READ MORE</span>
                  <span className="rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                    <svg className="w-4 h-4 text-secondary group-hover:stroke-white group-active:stroke-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Link>) : (
                <div></div>
              )}
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>

        </div>
    </section>
  );
};

export default OurSystems;
