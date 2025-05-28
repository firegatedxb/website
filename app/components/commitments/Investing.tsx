"use client"
import React from 'react'
import Image from 'next/image'

import { Commitments } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { cardVariants, fadeInUpsec, slideInLeft } from '@/public/frameranimation/animation';


const Investing = ({ data }: { data: Commitments }) => {
  return (
    <div className='container   py-[50px] md:py-[50px] lg:py-[100px] flex flex-col gap-6 md:gap-16'>
      <div className='flex flex-col  '>
        <motion.h3 className='uppercase text-50 font-medium text-site-blue mb-5 md:mb-[30px] leading-[1.1]' variants={slideInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                custom={2}>{data.thirdSection.title}</motion.h3>
                <motion.p variants={fadeInUpsec}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                  viewport={{ once: true, amount: 0.2 }} className='text-19 text-gray'>{data.thirdSection.description}</motion.p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5'>
                {data.thirdSection.items.map((item, index) => (
<motion.div
          key={index}
          {...cardVariants(index)}
          viewport={{ once: true, amount: 0.3 }}
          className='rounded-[20px] border border-[#59595920]  group  hover:bg-secondary transition-all duration-300'
        >

                    <div className=' w-full'>
                        <Image src={item.image} alt={item.imageAlt} className="rounded-t-[20px] w-full h-full object-cover"  width={400} height={400} />
                    </div>
                    <div className='w-full p-6 md:p-[40px] '>
                        <h4 className='text-30 text-black group-hover:text-white transition-all duration-300'>{item.title}</h4>
                        <p className='text-19 text-gray group-hover:text-white transition-all duration-300'>{item.description}</p>
                    </div>
             </motion.div>
            ))}
            </div>
    </div>
  )
}

export default Investing