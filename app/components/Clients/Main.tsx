"use client"
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";
import { Clients } from '@/public/types/Common';
import { fadeInUpsec } from "@/public/frameranimation/animation";


const Main = ({ data }: { data: Clients }) => {
  return (
    <section className="">
      <div className="container py-15 lg:py-25  pb-0 lg:pb-0  ">
        <div className="mb-4">
          <Sbttl title={data.title} />
        </div>
        <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          </motion.div>
      </div>
    </section>
   );
}

export default Main;