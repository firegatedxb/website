"use client";

import React  from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const LetsCollaborate = () => {

  return (
    <section className="py[50px] md:py-[50px] lg:pt-[99px]  lg:pb-[111px] relative bg-EFEFEF ">
      <div className="container">
        <div className="border-b mb-6 md:mb-[87px]">
         <p className="text-32 font-semibold mb-[17px] uppercase text-black leading-[2.1875]">Let’s Collaborate</p>
        </div>
        <div className="flex justify-between items-end">
          <div>

        <h3><p className="text-60 text-black font-semibold">+971 4 432 7677</p>
            <p className="text-60 text-black font-semibold">info<span className="text-primary">@</span>firegate.ae</p></h3>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 group cursor-pointer">
            <p className="text-19 text-black">Facebook</p>
            <Image src={assets.redarrow} className="brightness-0 group-hover:brightness-[1] transition-all duration-400 " alt=""/>
            </div>
            <div className="flex gap-2 group cursor-pointer">
            <p className="text-19 text-black">Instagram</p>
            <Image src={assets.redarrow} className="brightness-0 group-hover:brightness-[1] transition-all duration-400 " alt=""/>
            </div>
            <div className="flex gap-2 group cursor-pointer">
            <p className="text-19 text-black">Linkedin</p>
            <Image src={assets.redarrow} className="brightness-0 group-hover:brightness-[1] transition-all duration-400 " alt=""/>
            </div>
            <div className="flex gap-2 group cursor-pointer">
            <p className="text-19 text-black">X</p>
            <Image src={assets.redarrow} className="brightness-0 group-hover:brightness-[1] transition-all duration-400 " alt=""/>
            </div>
            <div className="flex gap-2 group cursor-pointer">
            <p className="text-19 text-black">Youtube</p>
            <Image src={assets.redarrow} className="brightness-0 group-hover:brightness-[1] transition-all duration-400 " alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsCollaborate;
