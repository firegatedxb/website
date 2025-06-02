"use client"
import React from "react";
import Image from "next/image";

import { Commitments } from '@/public/types/Common';
import { motion } from "framer-motion";
import { containerserVariants, itemVariantsser, sideVariants } from '@/public/frameranimation/animation';


const Built = ({ data }: { data: Commitments }) => {
  return (
    <div className="relative">
      <div className="container">
          <motion.div
      className="lg:grid grid-cols-13  "
      initial="hidden"
      animate="visible"
      variants={containerserVariants}
    >
      {/* Left Image */}
      < div
        className="col-span-6"
      >
        <div
          className="lg:w-[42%] mt-10 lg:mt-0 h-[350px] lg:h-full lg:absolute left-0 object-cover rounded-xl lg:rounded-tl-[0px] lg:rounded-bl-[0px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${data.firstSection.image})` }}
        />
      </div>

      {/* Right Content */}
      <motion.div
        className="col-span-7 lg:pl-4  flex flex-col gap-5 pt-[50px] md:pt-[70px] lg:pt-[100px] pb-[20px] md:pb-[30px] lg:pb-[70px]"
        variants={sideVariants}
      >
        <div className="flex flex-col">
          <h2 className="text-50 text-site-blue font-medium uppercase mb-5 max-w-[20ch]">
            {data.firstSection.title.split(".").map((part, i) => (
              <span key={i}>
                {part}
                {i < data.firstSection.title.split(".").length - 1 && (
                  <span className="text-primary">.</span>
                )}
              </span>
            ))}
          </h2>

          <p className="text-gray text-19 mb-5">{data.firstSection.description}</p>

          {data.firstSection.items.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center py-8 group border-b border-[#59595920] last:border-b-0 gap-3 transition-all duration-300 ease-in-out"
              variants={itemVariantsser}
            >
              <p className="text-gray text-19 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </p>
              <div className="bg-primary flex justify-center items-center rounded-lg min-w-[36px] min-h-[36px] md:min-w-[50px] md:min-h-[50px] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:bg-site-blue">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={25}
                  height={25}
                  className="transition-transform duration-300 ease-in-out group-hover:translate-y-[2px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
      </div>
    </div>
  );
};

export default Built;
