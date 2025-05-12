import React from 'react'
import Image from 'next/image'
import { accrData } from './data'

const Accreditation = () => {
  return (
    <div className='container'>
        <div className='pt-[100px] pb-[170px]'>
            <div className='flex flex-col gap-[30px]'>
                <h2 className='text-50 text-site-blue font-medium mb-3 uppercase'>Accreditation</h2>
                <p className='text-19 text-black'>Our Products & Systems comply below Certifications, Codes and Authority Requirements</p>
            </div>
            <div className="grid grid-cols-4 mt-[70px]">
                {accrData.map((item, index) => (
                    <div key={index} className='border-r-[1px] border-[#EFEFEF] flex justify-center'>
                        <Image src={item.image} width={200} height={200} alt="" className="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Accreditation