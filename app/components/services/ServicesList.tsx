'use client';
import Image from "next/image";

import { Services } from '@/public/types/Common';
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/public/frameranimation/animation";


const ServicesList = ({ data }: { data: Services }) => {
  const serviceArray = Array.isArray(data.services) ? data.services : [data.services];
  return (
    <section className="">
      <div className="container">
        <div>
      {serviceArray[0].items.map((item, index) => (
        <motion.div
          key={index}
          {...fadeUpVariant(index)}
          viewport={{ once: true, amount: 0.3 }}
          className="border-b border-graylit py-[50px] lg:py-75"
          id={`section${index}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <div className="relative flex justify-between items-center mb-6 lg:mb-10">
                <h3 className="text-32 font-medium leading-1.3 text-black">
                  <span>0{index + 1}. </span>{item.title}
                </h3>
                <div className="bg-primary p-3 lg:p-4 rounded-2xl w-fit">
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={31.3}
                    height={31.3}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray">{item.description}</p>
              </div>
              {/* <div className="mt-auto">
                <MainBtn btnTxt="VIEW MORE" />
              </div> */}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  );
}

export default ServicesList;