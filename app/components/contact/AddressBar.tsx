import Image from 'next/image'
import React from 'react'

const AddressBar = () => {
  return (
    <div className='h-[800px] bg-site-blue grid grid-cols-3 mr-[150px] rounded-tr-[20px] rounded-br-[20px]'>

      <div className='container col-span-2 py-[100px] flex flex-col gap-20'>
        <div className='flex justify-between pr-[413px]'>
          <div className='w-full flex flex-col gap-5'>
            <p className='text-19'>Dubai-UAE</p>
            <div className='w-full h-1 bg-red-500 rounded-lg'></div>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <p className='text-19'>Riyadh-KSA</p>
            <div className='w-full h-1 bg-white rounded-r-lg'></div>
          </div>
        </div>

        <div className='flex flex-col gap-20'>
          <div className='w-full flex flex-col gap-5'>
            <h3 className='text-30'>Dubai-UAE</h3>
            <p className='text-19'>Bayan Building, Dubai Investment Park 1<br/>PO Box 62335</p>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div className='flex gap-2 border-b pb-5'>
              <Image src="/assets/img/contact/phone.svg" alt="phone" width={41} height={34} />
              <p className='text-30'>+971 (4) 271 3794</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/assets/img/contact/message.svg" alt="message" width={41} height={34} />
              <p className='text-30'>info@firegate.ae</p>
            </div>
          </div>

          <div>
            <button className='bg-primary text-white px-6 py-2 flex items-center gap-3 rounded-lg'>
              LOCATE US
              <div className='rounded-full bg-white flex items-center justify-center p-2'>
              <Image src="/assets/img/contact/location.svg" alt="arrow" width={60} height={60} className='object-cover w-full h-full'/>
              </div>
              </button>
          </div>
        </div>
    
      </div>
      <div className='h-[800px] w-full'>
        <Image src="/assets/img/contact/contact_address_photo.jpg" alt="contact-image" className="w-full h-full object-cover rounded-tr-[20px] rounded-br-[20px]" width={400} height={400} />
      </div>
    </div>
  )
}

export default AddressBar