"use client"
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";
import { Clients } from '@/public/types/Common';
import { fadeInUpsec } from "@/public/frameranimation/animation";


const Main = ({ data }: { data: Clients }) => {
  return (
    <section className="">
      <div className="container py-[50px] lg:py-[70px] 2xl:py-[100px]  pb-0 lg:pb-0  ">
        <div className="mb-4">
          <Sbttl title={data.title} />
        </div>
        <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
          <div className="text-gray" dangerouslySetInnerHTML={{ __html: data.description }}></div>
          </motion.div>
      </div>
    </section>
   );
}

export default Main;