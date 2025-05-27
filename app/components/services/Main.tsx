"use client"
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";

import { Services } from '@/public/types/Common';
import { fadeInUpsec } from "@/public/frameranimation/animation";


const Main = ({ data }: { data: Services }) => {
  const serviceArray = Array.isArray(data.services) ? data.services : [data.services];

  return (
    <section className="">
      <div className="container py-[50px] lg:py-25 border-b border-graylit">
      {serviceArray.map((service, index) => (
          <div key={index}>
            <div className="mb-4">
              <Sbttl title={service.title} />
            </div>
          <motion.p
            className="text-gray font-19"
            variants={fadeInUpsec}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
           {service.description} </motion.p>
    </div>
      ))}
      </div>
    </section>
   );
}

export default Main;