"use client"
import Image from "next/image";

import { Clients } from '@/public/types/Common';
import { motion } from "framer-motion";
import { gridVariants, itemserVariants } from "@/public/frameranimation/animation";
 

const ClientLogo = ({ data }: { data: Clients }) => {

console.log(data);
  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 pb-[50px] lg:pb-20 border-b border-graylit">
        <div className="overflow-hidden">
           <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 scale-[1.01]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={gridVariants}
    >
      {data.clients.map((item, i) => (
        <motion.div
          key={i}
          className="border-b group border-r border-[#59595920]"
          variants={itemserVariants}
        >
          <a href={item.link} target="_blank">
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={315}
            height={216}
            className="grayscale-[1] group-hover:grayscale-0 transition-all duration-300"
          />
          </a>
        </motion.div>
      ))}
    </motion.div>
        </div>
        </div>
    </section>
   );
}

export default ClientLogo;