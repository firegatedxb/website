"use client";

import React from "react";

import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";


import { Home } from '@/public/types/Common';
import { motion } from "framer-motion";
import { fadeUp, slideInLeft } from "@/public/frameranimation/animation";

const AboutCompany = ({ data }: { data: Home }) => {
  return (
    <section className="py-[50px] pb-0 md:pb-0  md:py-[50px] lg:pt-[97px] lg:pb-[131px]  relative">
      <div className="container">
        <div className="flex">

            <motion.div
      className="lg:w-1/2 lg:pr-15 xl:pr-[84px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
          >
             <motion.h2 variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            custom={2}className="text-50 text-secondary font-medium mb-3 md:mb-[18px] uppercase" >

        {data.aboutSection.title}
      </motion.h2>

      <motion.div className="pb-2 lg:pb-8" variants={fadeUp} custom={1}>
        <div
          className="text-graytext text-19 mb-5"
          dangerouslySetInnerHTML={{ __html: data.aboutSection.description }}
        />
      </motion.div>

      <motion.div variants={fadeUp} custom={2} className="w-fit">
       <Link href="/about">
  <button className="flex cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group transition">
    <span>About Us</span>
    <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
      <Image
        src={assets.bluearrowRight}
        width={14}
        height={28}
        alt="read-more"
        className="w-full h-[14px] object-contain"
      />
    </span>
  </button>
</Link>

      </motion.div>

      <motion.div
        className="grid grid-cols-2 mt-8 lg:mt-[94px]"
        variants={fadeUp}
        custom={3}
      >
        {data.aboutSection.items.map((item, index) => (
          <motion.div
            key={index}
            className={`${
              index < 2 ? "border-b border-black/35 pb-4 md:pb-8 mb-4 md:mb-8" : ""
            }`}
            variants={fadeUp}
            custom={4 + index}
          >
            <p className="text-50 text-secondary font-medium">{item.number}</p>
            <p className="font-medium text-30 text-graytext pr-2">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>


        </div>

      </div>

       <motion.div
  className="lg:absolute right-0 bottom-0 z-[-1] lg:w-1/2  "
  initial={{ opacity: 0, y: 100, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }} // only animate once when 30% is in view
  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
>
  <motion.img
    src={data.aboutSection.image}
    alt={data.aboutSection.title}
    width={952}
    height={904}
    className="w-full h-full object-cover mt-6 lg:mt-0"
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 3,
      ease: "easeInOut",
    }}
  />
</motion.div>
    </section>
  );
};

export default AboutCompany;
