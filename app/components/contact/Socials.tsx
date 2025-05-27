"use client";
import React from 'react'
import Image from 'next/image'


import { Contact } from '@/public/types/Common';

const Socials = ({ data }: { data: Contact }) => {
  console.log(data.socials)
  return (
    <div className='bg-graybg'>
    <div className='container lg:py-[110px] py-[60px] flex flex-col gap-12'>
        <h4 className='text-50 text-site-blue uppercase font-medium'>Social</h4>
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

    </div>
    </div>
  )
}

export default Socials