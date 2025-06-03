"use client";
import { motion } from "framer-motion";
import PrimaryCard from "../common/PrimaryCard";
import Sbttl from "../common/Sbttl";

import {systems } from '@/public/types/Common';
import { cardVariants, fadeInUpsec } from "@/public/frameranimation/animation";


const ContentArea = ({ data }: { data: systems }) => {
  return (
    <section className="pb-[50px] lg:pb-25">
      <div className="container">
          <div>
            <div className="mb-4">
              <Sbttl title={data.componentTitle} />
          </div>
          {data.componentDescription &&
             <motion.p className="text-gray" variants={fadeInUpsec}
                                initial="hidden"
              whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}>
             {data.componentDescription}</motion.p>
          }

          </div>
        <div className="mt-10 lg:mt-[70px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.components.map((item, index) => (
        <motion.div
          key={index}
          {...cardVariants(index)}
          viewport={{ once: true, amount: 0.3 }}
        >
          <PrimaryCard
            crdImg={item.image}
            crdTitle={item.title}
            crdDesc={item.description}
          />
        </motion.div>
      ))}
    </div>
        </div>
      </div>
    </section>
   );
}

export default ContentArea;