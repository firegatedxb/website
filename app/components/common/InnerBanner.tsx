"use client"
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import Image from "next/image";
import {Commitments, About,Clients } from '@/public/types/Common';


const InnerBanner = ({ data }: { data: About | Clients | Commitments }) => {
  console.log(data)
  return (

    <section className="relative w-full h-[50dvh] lg:h-[580px] bg-secondary">
      <Image src={data.banner} alt={data.bannerAlt} width={1920} height={540} className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
      <div className={`absolute top-0 left-0 w-full h-full ${data.banner ? "bg-gradient-to-b from-transparent via-black/10 to-black" : ""} z-1`}></div>
      <div className="container relative z-2 h-full">
        <div className="flex flex-col justify-end h-full pb-10 lg:pb-20">
          <motion.h1 variants={moveUp(0)} initial="hidden" animate="show" viewport={{ once: true, amount: 0.2 }}
           className={`text-white uppercase text-65 max-w-6xl font-bold leading-[1.3] ws-sm`}>{data.pageTitle}</motion.h1>
        </div>
      </div>
    </section>
  );
}

export default InnerBanner;