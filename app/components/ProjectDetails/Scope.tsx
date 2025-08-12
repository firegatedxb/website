"use client";
import React from "react";
import "swiper/css";

import { Project } from "@/public/types/Project";
import { motion } from "framer-motion";
import { fadeInUpsec, slideInLeft } from "@/public/frameranimation/animation";
interface FrameworkSectionProps {
  data: Project;
}

const PjtBanner: React.FC<FrameworkSectionProps> = ({
  data,

}) => {
  return (
    <div className="">
      <div className="container">
        <div className="pt-[40px] md:pt-[50px] lg:pt-[86px] pb-[40px] md:pb-[50px] lg:pb-[70px] border-b border-[#cccccc]">

  <motion.h1  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={2}  className="mb-4 md:mb-[28px] text-secondary text-50 font-bold uppercase">
    {data.data.title}
  </motion.h1>
<motion.div className="text-595959" variants={fadeInUpsec}
                    initial="hidden"
                    whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
  <div  dangerouslySetInnerHTML={{ __html: data.data.description }}>
            </div>
            </motion.div>
</div>

      </div>
    </div>
  );
};

export default PjtBanner;
