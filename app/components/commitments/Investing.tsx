import React from 'react'
import Image from 'next/image'
import { investingCards } from './data'

const Investing = () => {
  return (
    <div className='container pt-[100px] pb-[100px] flex flex-col gap-16'>
            <div className='flex flex-col gap-7'>
                <h3 className='uppercase text-50 text-site-blue'>Investing in Expertise</h3>
                <p className='text-19 text-gray'>At Fire Gate, we believe that safety starts with knowledge. That’s why we continually invest in advanced training to ensure our teams are equipped with the latest practices in safe system handling, confined space operations, and fire risk prevention.</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {investingCards.map((item, index) => (
                    <div className='rounded-[20px] border h-[520px]' key={index}>
                    <div className='h-[300px] w-full'>
                        <Image src={item.image} className="rounded-t-[20px] w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                    <div className='h-[200px] w-full p-[40px]'>
                        <h4 className='text-30 text-black'>{item.title}</h4>
                        <p className='text-19 text-gray'>{item.description}</p>
                    </div>
                </div>
            ))}
            </div> 
    </div>
  )
}

export default Investing