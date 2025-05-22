"use client"
import React from 'react'

import { Partners } from '@/public/types/Common';


const Header = ({ data }: { data: Partners }) => {
  return (
    <div className='container pt-[50px] pb-[50px] md:py-[70px] lg:py-[100px]'>
      <div className='flex flex-col gap-7'>
        <h3 className='uppercase text-50 text-site-blue'>{data.title}</h3>

        <div className='text-19 text-gray' dangerouslySetInnerHTML={{__html: data.description}}></div>
      </div>

    </div>
  )
}

export default Header