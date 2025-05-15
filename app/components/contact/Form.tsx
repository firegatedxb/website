import React from 'react'
import Image from 'next/image'

const Form = () => {
  return (
    <div className='py-[50px] md:py-[70px] lg:pt-[107px] lg:pb-[121px]'>
        <div className='container flex flex-col gap-14'>
            <h2 className='text-50 text-site-blue uppercase'>We’d love to hear from you.</h2>
            <form className='flex flex-col gap-5'>

                <div className='flex flex-col gap-14'>
                <div className='grid grid-cols-3 gap-5 space-y-4'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-19 text-gray'>Name</label>
                    <input type="text" className=' border-gray-300 outline-none border-b text-black'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='text-19 text-gray'>Phone</label>
                    <input type="text" className=' border-gray-300 outline-none border-b text-black'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-19 text-gray'>Email</label>
                    <input type="text" className=' border-gray-300 outline-none border-b text-black'/>
                </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="message" className='text-19 text-gray'>Message</label>
                <textarea className='h-[150px] border-gray-300 outline-none border-b appearance-none text-black resize-none'></textarea>
                </div>

                <div>
                            <button className='bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg'>
                              SUBMIT
                              <div className='rounded-full bg-white flex items-center justify-center px-3 py-2'>
                              <Image src="/assets/img/contact/arrow.svg" alt="arrow" width={30} height={30} className='object-cover w-full h-full'/>
                              </div>
                              </button>
                          </div>
                          </div>

            </form>
        </div>
    </div>
  )
}

export default Form