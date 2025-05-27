"use client";
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";

import {systems } from '@/public/types/Common';
import { fadeInUpsec } from "@/public/frameranimation/animation";


const Main = ({ data }: { data: systems }) => {
;
  return (
    <section className="">
      <div className="container py-15 lg:py-25    ">

          <div>
            <div className="mb-4">
              <Sbttl title={data.introTitle} />
            </div>
            <motion.p className="text-gray" variants={fadeInUpsec}
                                initial="hidden"
                                whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}>{data.introDescription}</motion.p>
          </div>

          </div>
    </section>
  );
}

export default Main;