"use client"
import { motion } from "framer-motion";
import { moveUp } from "@/app/components/motionVarients";
import { mainDesc } from "./data";
import Image from "next/image";
const MainDesc = () => {
  return ( 
    <section className="py-[50px] md:py-[50px] lg:py-[97px]">
      <div className="container">
          <div className="flex items-center gap-20">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="hidden lg:block w-1/2 rounded-lg overflow-hidden">
             <Image width={794} height={760} src={mainDesc.image} alt={mainDesc.alt} className="w-full h-auto" />
            </motion.div>
          <motion.div variants={moveUp(0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full lg:w-1/2">
              <h2 className="text-50 font-medium leading-[1.3] uppercase text-secondary mb-4 lg:mb-[37px]">{mainDesc.title}</h2>
              <p className="text-19 mb-4 lg:mb-6 leading-[1.526315789473684]">{mainDesc.desc1}</p>
              <p className="text-19 leading-[1.526315789473684]">{mainDesc.desc2}</p>
            </motion.div>
          </div>
      </div>
    </section>
   );
}
 
export default MainDesc;