"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Home } from "@/public/types/Common";
import { motion } from "framer-motion";
import {  containerVariants, fadeSlideUp, itemVariants, slideInLeft } from "@/public/frameranimation/animation";
const LetsCollaborate = ({ data }: { data: Home }) => {
  const [username, domain] = data.socials.email.split("@");
  return (
    <section className="py-[50px] md:py-[50px] lg:py-[70px] 2xl:pt-[99px]  2xl:pb-[111px] relative bg-EFEFEF ">
      <div className="container">
        <div className="border-b mb-6 lg:mb-[87px]">
          <motion.p  variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} className="text-32 font-semibold mb-[17px] uppercase text-black leading-[2.1875]">
            {data.socials.title}
          </motion.p>
        </div>

        <div className="lg:flex justify-between items-end">
           <motion.div
      initial="hidden"
            variants={fadeSlideUp}
              whileInView="visible"
      className="space-y-4"
    >
      <p className="text-40 xl:text-60 text-black font-semibold">
        {data.socials.phone}
      </p>
      <p className="text-40 xl:text-60 text-black font-semibold">
        {username}
        <span className="text-primary">@</span>
        {domain}
      </p>
    </motion.div>

          <motion.div
      className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-8 lg:mt-0"
      variants={containerVariants}
      initial="hidden"
              whileInView="visible"
    >
      {data.socials.items.map((platform, index) => (
        <motion.div key={index} variants={itemVariants}>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 items-center group cursor-pointer w-max">
              <p className="text-[19px] uppercase text-black">{platform.title}</p>

              <Image
                src={assets.redarrow}
                alt={`${platform.title} arrow`}
                className="brightness-0 group-hover:brightness-100 transition-all duration-400"
              />
            </div>
          </a>
        </motion.div>
      ))}
    </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsCollaborate;
