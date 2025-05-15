import React from 'react'
import Image from 'next/image'
import { accrData } from './data'

const Accreditation = () => {
  return (
    <div className='container'>
        <div className='py-[50px] md:py-[70px] lg:py-[100px] '>
            <div className='flex flex-col  '>
                <h2 className='text-50 text-site-blue font-medium mb-3 lg:mb-[30px] uppercase'>Accreditation</h2>
                <p className='text-19 text-black'>Our Products & Systems comply below Certifications, Codes and Authority Requirements</p>
            </div>
            <div className="grid grid-cols-4 mt-4 lg:mt-[70px]">
                {accrData.map((item, index) => (
                    <div key={index} className='last:border-r-0 border-r-[1px] border-[#EFEFEF] flex justify-center'>
                        <Image src={item.image} width={200} height={200} alt="" className="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Accreditation