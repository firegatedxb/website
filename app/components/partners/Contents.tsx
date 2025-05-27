"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Partners } from '@/public/types/Common';
import { motion } from 'framer-motion';
import { fadeSlideLeft, fadeSlideRight, getVariants } from '@/public/frameranimation/animation';


const Contents = ({ data }: { data: Partners }) => {
    return (

            data.partners.map((item, index) => (
                <div key={index} className={`odd:bg-[#F8F8F8] stylein${index}`}>
                <div className='container pb-[50px] lg:pb-[100px]'>
                <div className={`flex flex-col gap-12 first:lg:pt-0 `} key={index} >
               <motion.div
      className="flex justify-between items-center border-b border-[#59595920] pb-10 ptst lg:pt-[100px] lg:pb-[30px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={getVariants(index)}
    >
      {index % 2 !== 0 ? (
        <>
          <div>
            <Image
              src={item.logo}
              alt={item.logoAlt}
              className="w-full h-full object-cover"
              width={150}
              height={50}
            />
          </div>
          <div>
            <h4 className="text-30 text-black">{item.name}</h4>
          </div>
        </>
      ) : (
        <>
          <div>
            <h4 className="text-30 text-black">{item.name}</h4>
          </div>
          <div>
            <Image
              src={item.logo}
              alt={item.logoAlt}
              className="w-full h-full object-cover"
              width={150}
              height={50}
            />
          </div>
        </>
      )}
    </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[70px]">
      <motion.div
        className="text-gray text-19 flex flex-col gap-10 justify-center mb-8 lg:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeSlideLeft}
      >
        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
        <div>
          <Link href={item.website} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary cursor-pointer text-white px-6 py-2 flex items-center gap-3 rounded-lg">
              VISIT WEBSITE
              <div className="rounded-full bg-white flex items-center justify-center px-3 py-2">
                <Image
                  src="/assets/img/contact/arrow.svg"
                  alt="arrow"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              </div>
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeSlideRight}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          className="rounded-[20px] object-cover"
          width={800}
          height={434}
        />
      </motion.div>
    </div>
            </div>
        </div>
        </div>
            ))

    )
}

export default Contents