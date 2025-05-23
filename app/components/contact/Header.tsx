"use client";
import React from 'react'

import { Contact } from '@/public/types/Common';

const Header = ({ data }: { data: Contact }) => {
  return (
    <div className='container pt-[50px] lg:pt-[112px] pb-[22px]'>
      <h1 className="text-65 text-site-blue max-w-[25ch] uppercase">{data.pageTitle}</h1>
    </div>
  )
}

export default Header