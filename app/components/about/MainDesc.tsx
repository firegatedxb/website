"use client"
import { motion } from "framer-motion";
import { moveUp } from "@/app/components/motionVarients";
import Image from "next/image";
import { About } from '@/public/types/Common';


const MainDesc = ({ data }: { data: About }) => {
  return (
    <section className="py-[50px] md:py-[50px] lg:py-[97px]">
      <div className="container">
          <div className="xl:flex items-center gap-20">
          <motion.div variants={moveUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="  lg:block xl:w-1/2  overflow-hidden">
             <Image   src={data.firstSection.image} alt={data.firstSection.imageAlt} width={794} height={760} className="w-full h-[350px] lg:h-[500px] xl:h-auto  mb-8 xl:mb-0 rounded-lg  object-cover " />
            </motion.div>
          <motion.div variants={moveUp(0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="w-full xl:w-1/2">
              <h2 className="text-50 font-medium leading-[1.3] uppercase text-secondary mb-4 lg:mb-[37px]" >{data.firstSection.title}</h2>

            <div className="text-19 mb-4 lg:mb-6 leading-[1.526315789473684] text-gray" dangerouslySetInnerHTML={{__html: data.firstSection.description}}></div>
            </motion.div>
          </div>
      </div>
    </section>
   );
}

export default MainDesc;