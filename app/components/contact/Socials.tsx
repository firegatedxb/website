import React from 'react'
import Image from 'next/image'

const Socials = () => {
  return (
    <div className='bg-graybg'>
    <div className='container lg:py-[110px] py-[60px] flex flex-col gap-12'>
        <h4 className='text-50 text-site-blue uppercase'>Social</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-[30px] text-black">
  {[
    "FACEBOOK",
    "INSTAGRAM",
    "LINKEDIN",
    "X",
    "YOUTUBE",
  ].map((platform, index) => (
    <span key={index} className="flex items-center gap-2">
      {platform}
      <Image
        src="/assets/img/contact/uparrow.svg"
        alt="arrow"
        width={25}
        height={25}
      />
    </span>
  ))}
</div>
    </div>
    </div>
  )
}

export default Socials