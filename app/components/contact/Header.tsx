"use client";
import React from 'react'

import { Contact } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { slideInLeft } from '@/public/frameranimation/animation';

const Header = ({ data }: { data: Contact }) => {
  return (
    <div className='container pt-[50px] lg:pt-[70px] 2xl:pt-[112px] pb-[22px]'>
       <motion.h1 variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
        custom={2}
      className="text-65 text-site-blue max-w-[25ch] uppercase font-bold">
      {data.pageTitle}</motion.h1>
    </div>
  )
}

export default Header