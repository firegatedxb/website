"use client";
import React from 'react'
import Image from 'next/image'


import { Contact } from '@/public/types/Common';
import Link from 'next/link';

const Socials = ({ data }: { data: Contact }) => {
  console.log(data.socials)
  return (
    <div className='bg-graybg'>
    <div className='container lg:py-[110px] py-[60px] flex flex-col gap-12'>
        <h4 className='text-50 text-site-blue uppercase'>Social</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-[30px] text-black">
  {data.socials.map((platform, index) => (
    <div key={index}>
      <Link href={platform.link} >
      <span  className="flex items-center gap-2">
      {platform.title}
      <Image
        src="/assets/img/contact/uparrow.svg"
        alt="arrow"
        width={25}
        height={25}
      />
    </span>
      </Link>
      </div>
  ))}
</div>
    </div>
    </div>
  )
}

export default Socials