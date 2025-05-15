import React from 'react'
import Image from 'next/image'
import { partnerData } from './data'

const Contents = () => {
    return (

            partnerData.map((item, index) => (
                <div key={index} className='odd:bg-[#F8F8F8]'>
                <div className='container pb-[50px] lg:pb-[100px]'>
                <div className='flex flex-col gap-12' key={index}>
                <div className='flex justify-between items-center border-b py-10 lg:pt-[150px] lg:pb-[50px]'>
                    {index % 2 !== 0 ? (
                        <>
                        <div className=''>
                        <Image src={item.logo} className=" w-full h-full object-cover" alt="image-alt" width={150} height={50} />
                        </div>
                        <div className=''>
                            <h4 className='text-30 text-black'>{item.title}</h4>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className=''>
                            <h4 className='text-30 text-black'>{item.title}</h4>
                        </div>
                        <div className=''>
                            <Image src={item.logo} className=" w-full h-full object-cover" alt="image-alt" width={150} height={50} />
                        </div>
                        </>
                    )}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[70px]'>
                    <div className='text-gray text-19 flex flex-col gap-10 justify-center mb-8 lg:mb-0'>
                        <p>{item.description}</p>
                        <div>
                            <button className='bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg'>
                                VISIT WEBSITE
                                <div className='rounded-full bg-white flex items-center justify-center px-3 py-2'>
                                    <Image src="/assets/img/contact/arrow.svg" alt="arrow" width={30} height={30} className='object-cover w-full h-full' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image src={item.partnerImage} className="rounded-[20px] w-full h-full object-cover" alt="image-alt" width={150} height={50} />
                    </div>
                </div>
            </div>
        </div>
        </div>
            ))

    )
}

export default Contents