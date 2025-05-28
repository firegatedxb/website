"use client"
import React from 'react'

import { Partners } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { fadeInUpsec, slideInLeft } from '@/public/frameranimation/animation';


const Header = ({ data }: { data: Partners }) => {
  return (
    <div className='container pt-[50px] pb-[50px] md:py-[70px] lg:py-[100px]'>
      <div className='flex flex-col gap-7'>
         <motion.h3 variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className='uppercase text-50 text-site-blue font-medium leading-[1.3]'
                custom={2} >{data.title}</motion.h3>
 <motion.div  variants={fadeInUpsec}
                    initial="hidden"
                    whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        className='text-19 text-gray' dangerouslySetInnerHTML={{__html: data.description}}></motion.div>
      </div>

    </div>
  )
}

export default Header