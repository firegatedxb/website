import React from 'react'
import Image from 'next/image'
import { healthData } from './data'

const Health = () => {
  return (
    <div className='bg-site-blue'>
        <div className='container pt-[100px] pb-[100px]'>
            
            <div className='flex flex-col gap-7 pb-[100px]'>
                <h3 className='uppercase text-50 text-white'>Health, Safety & Environment (HSE)</h3>
                <p className='text-19 text-white'>Health and safety are integral to how we operate not just on paper, but on-site, every day. We follow a zero-compromise policy when it comes to safeguarding our workforce, the public, and the environments we work in. </p>
            </div>

            <div className='grid grid-cols-3 gap-20'>
                {healthData.map((item, index) => (
                    <div className='flex flex-col gap-10' key={index}>
                    <div className='flex items-center gap-5 border-b py-10'>
                    <div className=''>
                        <Image src={item.image} className="w-full h-full object-cover" alt="image-alt" width={68} height={68} />
                    </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h4 className='text-30 text-white'>{item.title}</h4>
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