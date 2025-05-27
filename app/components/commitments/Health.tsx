"use client"
import React from 'react'
import Image from 'next/image'

import { Commitments } from '@/public/types/Common';


const Health = ({ data }: { data: Commitments }) => {
  return (
    <div className='bg-site-blue'>
        <div className='container py-[50px] md:py-[70px] lg:py-[100px]'>

            <div className='flex flex-col gap-7 pb-[50px] md:pb-[70px] lg:pb-[100px]'>
                <h3 className='uppercase text-50 font-medium text-white'>{data.secondSection.title}</h3>
                <p className='text-19 text-white'>{data.secondSection.description}</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20'>
  {data.secondSection.items.map((item, index) => (
    <div
      key={index}
      className='
        flex flex-col gap-5 md:gap-7 lg:gap-10
        transition-transform duration-300 ease-in-out group

      '
    >
      <div className='flex items-center gap-5 border-b border-[#ffffff30] pb-6 md:pb-8 lg:pb-10'>
        <div className=''>
          <Image
            src={item.logo}
            alt={item.logoAlt}
            className="w-full h-full object-cover  group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out
            transform group-hover:translate-x-1 brightness-[0] invert-[1] group-hover:brightness-[1]  group-hover:invert-[0]"
            width={68}
            height={68}
          />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h4 className='text-30 text-white '>{item.title}</h4>
        <p className='text-19 text-white'>{item.description}</p>
      </div>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default Health