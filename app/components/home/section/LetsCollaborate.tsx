"use client";

import React  from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const LetsCollaborate = () => {

  return (
    <section className="py-[50px] md:py-[50px] lg:pt-[99px]  lg:pb-[111px] relative bg-EFEFEF ">
      <div className="container">
        <div className="border-b mb-6 lg:mb-[87px]">
         <p className="text-32 font-semibold mb-[17px] uppercase text-black leading-[2.1875]">Let’s Collaborate</p>
        </div>
        <div className="lg:flex justify-between items-end">
          <div>

        <h3><p className="text-40 xl:text-60 text-black font-semibold">+971 4 432 7677</p>
            <p className="text-40 xl:text-60 text-black font-semibold">info<span className="text-primary">@</span>firegate.ae</p></h3>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mt-8 lg:mt-0">
  {["Facebook", "Instagram", "Linkedin", "X", "Youtube"].map((platform) => (
    <div
      key={platform}
      className="flex gap-2 items-center group cursor-pointer w-max"
    >
      <p className="text-[19px] text-black">{platform}</p>
      <Image
        src={assets.redarrow}
        alt={`${platform} arrow`}
        className="brightness-0 group-hover:brightness-100 transition-all duration-400"
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default LetsCollaborate;
