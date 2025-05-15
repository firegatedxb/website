import React from 'react'
import Image from 'next/image'
import { investingCards } from './data'

const Investing = () => {
  return (
    <div className='container   py-[50px] md:py-[50px] lg:py-[100px] flex flex-col gap-6 md:gap-16'>
            <div className='flex flex-col  '>
                <h3 className='uppercase text-50 font-medium text-site-blue mb-5 md:mb-[30px] leading-[1.1]'>Investing in Expertise</h3>
                <p className='text-19 text-gray'>At Fire Gate, we believe that safety starts with knowledge. That’s why we continually invest in advanced training to ensure our teams are equipped with the latest practices in safe system handling, confined space operations, and fire risk prevention.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5'>
                {investingCards.map((item, index) => (
                    <div className='rounded-[20px] border border-[#59595920]  group  hover:bg-secondary transition-all duration-300' key={index}>
                    <div className=' w-full'>
                        <Image src={item.image} className="rounded-t-[20px] w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                    <div className='w-full p-6 md:p-[40px] '>
                        <h4 className='text-30 text-black group-hover:text-white transition-all duration-300'>{item.title}</h4>
                        <p className='text-19 text-gray group-hover:text-white transition-all duration-300'>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Investing