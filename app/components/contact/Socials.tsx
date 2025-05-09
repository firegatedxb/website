import React from 'react'
import Image from 'next/image'

const Socials = () => {
  return (
    <div className='bg-graybg'>
    <div className='container lg:py-[110px] py-[60px] flex flex-col gap-12'>
        <h4 className='text-50 text-site-blue uppercase'>Social</h4>
        <div className='flex gap-20 text-30 text-black'>
            <span className='flex gap-2 items-center'>FACEBOOK <Image src="/assets/img/contact/uparrow.svg" alt="arrow" width={25} height={25} /></span>
            <span className='flex gap-2 items-center'>INSTAGRAM <Image src="/assets/img/contact/uparrow.svg" alt="arrow" width={25} height={25} /></span>
            <span className='flex gap-2 items-center'>LINKEDIN <Image src="/assets/img/contact/uparrow.svg" alt="arrow" width={25} height={25} /></span>
            <span className='flex gap-2 items-center'>X <Image src="/assets/img/contact/uparrow.svg" alt="arrow" width={25} height={25} /></span>
            <span className='flex gap-2 items-center'>YOUTUBE <Image src="/assets/img/contact/uparrow.svg" alt="arrow" width={25} height={25} /></span>
        </div>
    </div>
    </div>
  )
}

export default Socials