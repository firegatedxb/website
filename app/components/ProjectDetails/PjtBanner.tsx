"use client";
import React from "react";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Project } from "@/public/types/Project";
import { motion } from "framer-motion";
import { infoVariants, slideInLeft } from "@/public/frameranimation/animation";

interface FrameworkSectionProps {
  data: Project;
}

const PjtBanner: React.FC<FrameworkSectionProps> = ({ data }) => {
  console.log("Project Data:", data);
  return (
    <div className="">
      <div>
        <div className="pt-[40px] md:pt-[70px] lg:pt-[100px] ">
          <div className="container">
            <motion.h1
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              className="mb-5 md:mb[50px] text-secondary text-65 font-bold uppercase"
            >
              {data.data.name}
            </motion.h1>
          </div>
          <div className="overflow-hidden   ">
            <div>
              <div className="px-[15px] lg:px-0 mb-10 lg:mb-0 relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="  lg:w-[55%] xl:w-[60%] h-[320px] md:h-[521px] lg:h-[785px] xl:h-[785px] z-[1] lg:absolute right-0 top-0 object-cover lg:rounded-tl-[20px] lg:rounded-bl-[20px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url(${data.data.coverPhoto})`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-[15px] pl-[15px] md:pt-[30px] md:pl-[37px]"
                  >
                    <div className="bg-white rounded-sm py-[12px] px-[22px] w-fit flex gap-2 items-center uppercase">
                      <p className="text-gray text-15">Sector:</p>
                      <p className="text-gray text-15 font-[700]">
                        {data.data.sector}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="container">
              <motion.div  variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={2} >
                <div className="relative bg-secondary min-h-[200px] md:min-h-[350px] lg:min-h-[785px] rounded-[20px] p-8 lg:p-[70px] text-white afst ">
                <div className="md:w-1/2 lg:w-1/3 flex flex-col gap-4 justify-between">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 md:gap-8 justify-stretch h-full"
                  >
                    {[
                      {
                        icon: assets.iccon,
                        label: "Client",
                        value: data.data.client,
                      },
                      {
                        icon: assets.icststus,
                        label: "Consultant",
                        value: data.data.consultant,
                      },
                      {
                        icon: assets.iclocation,
                        label: "Status",
                        value: data.data.status ? "Completed" : "On Going",
                      },
                    ].map((item, i) => (
                      <motion.div
                        variants={infoVariants}
                        custom={i}
                        key={i}
                        className="flex gap-4 md:gap-8 border-b pb-5 md:pb-8 items-top"
                      >
                        <Image src={item.icon} alt={item.label} />
                        <div>
                          <p className="text-md font-medium">{item.label}</p>
                          <p className="text-32 font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bottom Location Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:absolute bottom-8 md:bottom-[80px]"
                  >
                    <div className="flex gap-4 md:gap-8">
                      <Image src={assets.icuser} alt="Location" />
                      <div>
                        <p className="text-32 font-medium">
                          {data.data.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PjtBanner;
