"use client";
import Image from "next/image";
import { systems } from "@/public/types/Common";
import Link from "next/link";
import { assets } from "@/public/assets/assets";
import { motion } from "framer-motion";
import { cardVariants } from "@/public/frameranimation/animation";
import {  useState } from "react";

const SystemsList = ({ data }: { data: systems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-10 lg:py-[70px] 2xl:py-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-42">
          {data.systems.map((sys, index) => (
            <motion.div
              key={index}
              {...cardVariants(index)}
              viewport={{ once: true, amount: 0.3 }}

  onClick={() => toggleCard(index)}
              className="relative overflow-hidden rounded-2xl h-[400px] md:h-[450px] lg:h-[651px] p-5 md:p-10 xl:p-20 flex flex-col group"
            >
              <div className="absolute bottom-0 left-0 w-full grbtmgrad transition duration-300 h-full z-1"></div>

              <Image
                src={sys.image}
                alt={sys.imageAlt}
                width={789}
                height={651}
                className="w-full h-[400px] md:h-[450px] lg:h-[651px] absolute top-0 left-0 z-0"
              />

              <div className="bg-primary rounded-xl flex items-center justify-center relative z-10 w-fit p-3">
                <Image
                  src={sys.logo}
                  alt={sys.logoAlt}
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
              </div>

              <div className="relative z-20 mt-auto  transition-transform duration-300 ease-in-out">
                {sys.slug !== "#" ? (
                  <Link href={`/systems/${sys.slug}`}>
                    <h3 className="text-white text-22 md:text-32 leading-1.3 font-bold md:font-medium group-hover:mb-2 group-hover:md:mb-5 transition-all duration-300">
                      {sys.title}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-white text-20 md:text-32  leading-1.1  md:leading-1.3 font-medium  group-hover:mb-5 transition-all duration-300">
                    {sys.title}
                  </h3>
                )}
                <div className={`  group-hover:max-h-[1000px] group-hover:opacity-100
                mt-3 lg:mt-10 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out ${
  activeIndex === index ? "max-h-[1000px] opacity-100" : ""
}`}>
                  <p className="text-white mb-3 lg:mb-10 leading-[1.3]  md:leading-[1.5] ">{sys.description}</p>

                  {sys.slug !== "#" && (
                    <Link
                      href={`/systems/${sys.slug}`}
                      className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-full border bg-white border-black flex items-center justify-center transition-opacity duration-500 ease-in-out"
                    >
                      <Image src={assets.redarrow} alt="" width={17} height={17} />
                    </Link>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsList;
