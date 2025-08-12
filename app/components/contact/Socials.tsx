"use client";
import React from 'react'
import Image from 'next/image'


import { Contact } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { fadeInUpsec } from '@/public/frameranimation/animation';

const Socials = ({ data }: { data: Contact }) => {
  console.log(data.socials)
  return (
    <div className='bg-graybg'>
      <div className='container  py-[50px] lg:py-[70px] 2xl:py-[110px] flex flex-col gap-7 lg:gap-12'>
         <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
          <h4 className='text-50 text-site-blue uppercase font-medium'>Social</h4></motion.div>
              <motion.div variants={fadeInUpsec}
                            initial="hidden"
                            whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}>
        <div className="flex flex-wrap gap-8 lg:gap-[75px] text-[30px] text-black">
  {data.socials.map((platform, index) => (
    <div key={index} className="max-w-fit">
      <a href={platform.link} target="_blank">
        <span className="flex items-center gap-2 text-32 group">
          {platform.title}
          <Image
            src="/assets/img/contact/redappr.svg"
            alt="arrow"
            className="transition-transform duration-300 transform group-hover:translate-x-1 brightness-0 group-hover:brightness-[1] invert-0 group-hover:invert-[0]"
            width={25}
            height={25}
          />
        </span>
      </a>
    </div>
  ))}
          </div>
          </motion.div>

    </div>
    </div>
  )
}

export default Socials