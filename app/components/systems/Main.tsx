"use client";
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";
import { systems } from "@/public/types/Common";
import { fadeInUpsec } from "@/public/frameranimation/animation";

const Main = ({ data }: { data: systems }) => {
  const serviceArray = Array.isArray(data.systems)
    ? data.systems
    : [data.systems];
  ;
  console.log(serviceArray);
  return (
    <section className="">
      <div className="container pt-[50px] lg:pt-25 ">
        <div className="mb-4">
          <Sbttl title={data.title} />
        </div>
        <motion.div  variants={fadeInUpsec}
                    initial="hidden"
                    whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
           className="text-595959"
          dangerouslySetInnerHTML={{ __html: data.description }}></motion.div>
      </div>
    </section>
  );
};

export default Main;
