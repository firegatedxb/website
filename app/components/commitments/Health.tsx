"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

import { Commitments } from '@/public/types/Common';
import { motion, useInView } from 'framer-motion';
import { fadeInUpsec, itemVariantsser, slideInLeft } from '@/public/frameranimation/animation';


const Health = ({ data }: { data: Commitments }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div className='bg-site-blue'>
        <div className='container py-[50px] lg:py-[70px] 2xl:py-[100px]'>

        <div className='flex flex-col gap-7 pb-[50px] md:pb-[70px] lg:pb-[100px]'>

                <motion.h3 className='uppercase text-50 font-medium text-white' variants={slideInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                custom={2}>{data.secondSection.title}</motion.h3>
                <motion.p className='text-19 text-white' variants={fadeInUpsec}
                                            initial="hidden"
                                            whileInView="visible"
                                  viewport={{ once: true, amount: 0.2 }}>{data.secondSection.description}</motion.p>
            </div>

             <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20"
    >
      {data.secondSection.items.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-5 md:gap-7 lg:gap-10 transition-transform duration-300 ease-in-out group"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariantsser}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="flex items-center gap-5 border-b border-[#ffffff30] pb-6 md:pb-8 lg:pb-10">
            <div>
              <Image
                src={item.logo}
                alt={item.logoAlt}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 brightness-[0] invert-[1] group-hover:brightness-[1] group-hover:invert-[0]"
                width={68}
                height={68}
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-30 text-white">{item.title}</h4>
            <p className="text-19 text-white">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

        </div>
    </div>
  )
}

export default Health