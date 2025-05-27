"use client";
import Image from "next/image";
import { systems } from "@/public/types/Common";
import Link from "next/link";
import { assets } from "@/public/assets/assets";
import { motion } from "framer-motion";
import { cardVariants } from "@/public/frameranimation/animation";

const SystemsList = ({ data }: { data: systems }) => {
  ;
  return (
    <section className="py-10 lg:py-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-42">
      {data.systems.map((sys, index) => (
        <motion.div
          key={index}
          {...cardVariants(index)}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl lg:h-[651px] p-10 lg:p-20 flex flex-col group"
        >
          <div className="absolute bottom-0 left-0 w-full grbtmgrad transition duration-300 h-full z-1"></div>

          <Image
            src={sys.image}
            alt={sys.imageAlt}
            width={789}
            height={651}
            className="w-full lg:h-[651px] absolute top-0 left-0 z-0"
          />

          <div className="bg-primary rounded-xl flex items-center justify-center relative z-10 w-fit p-3">
            <Image src={sys.logo} alt={sys.logoAlt} width={50} height={50} className="w-10 h-10" />
          </div>

          <div className="relative z-20 mt-auto translate-y-[95%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            {sys.slug !== '#' ? (
              <Link href={`/systems/${sys.slug}`}>
                <h3 className="text-white text-32 leading-1.3 font-medium mb-10 group-hover:mb-5 transition-all duration-300">
                  {sys.title}
                </h3>
              </Link>
            ) : (
              <h3 className="text-white text-32 leading-1.3 font-medium mb-10 group-hover:mb-5 transition-all duration-300">
                {sys.title}
              </h3>
            )}

            <p className="text-white mb-10">{sys.description}</p>

            {sys.slug !== '#' && (
              <Link
                href={`/systems/${sys.slug}`}
                className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-full border bg-white border-black flex items-center justify-center transition-opacity duration-500 ease-in-out"
              >
                <Image src={assets.redarrow} alt="" width={17} height={17} />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  );
}

export default SystemsList;