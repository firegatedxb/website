"use client";
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';


interface DetailedItem {
  icon: StaticImageData;
  location: string;
  address: string;
  phone: string;
  email: string;
}
interface PlatformsItem {
  id: number;
  title: string;
  tag: string;
  workingtitle: string;
  workingtime: string;
  workingdetails: string;
  details: DetailedItem[]
}

interface PlatformsSectionProps {
  data: PlatformsItem[];
}
  const AddressBar: React.FC<PlatformsSectionProps> = ({data
}) => {
  const [activeTab, setActiveTab] = useState(data[0]?.tag);
  return (
    <div className='container'>
    <div className='  md:grid md:grid-cols-7  rounded-tr-[20px] rounded-br-[20px]'>

      <div className='bg-siteaftr bg-secondary md:bg-none pl-[20px] md:col-span-4 py-[50px] lg:py-[100px] flex flex-col gap-10 lg:gap-20 relative text-white'>

        <motion.div
        className="flex gap-10 lg:gap-[100px] items-center border-b border-[#ffffff35] mb-4 lg:mb-[30px] w-fit"
      >
        {data.map((item, index) => (
          <motion.p
            key={index}
            onClick={() => setActiveTab(item.tag)}
            className={`text-19 font-medium  leading-[2.18] cursor-pointer relative top-[1px] pb-1 pr-5 md:pr-10
              ${
                activeTab === item.tag
                  ? "border-b-2 border-primary font-[600]"
                  : "border-b-2 border-transparent font-[400]"
              }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.title}
          </motion.p>
        ))}
      </motion.div>

{data.map((item, index) =>
        activeTab === item.tag ? (
          <motion.div
            key={index}
            className="flex flex-col gap-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {item.details.map((data, index) => (
              <motion.div
                key={index}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
               <div className='flex flex-col gap-12 lg:gap-20'>
          <div className='w-full flex flex-col gap-5'>
                    <h3 className='text-30'>{data.location}</h3>
            <p className='text-19'>{data.address}</p>
          </div>
          <div className='w-full flex flex-col gap-5'>
            <div className='flex gap-4 border-b pb-5'>
              <Image src="/assets/img/contact/phone.svg" alt="phone" width={41} height={34} />
              <p className='text-30'>{data.phone}</p>
            </div>
            <div className='flex gap-4 '>
              <Image src="/assets/img/contact/message.svg" alt="message" width={41} height={34} />
              <p className='text-30'>{data.email}</p>
            </div>
          </div>

                  <div>
                    <Link href="https://maps.app.goo.gl/GnLcXnJD9r66u73QA" target='_blank'>
            <button className='bg-primary cursor-pointer text-white px-6 py-2 flex items-center gap-3 rounded-lg'>
              LOCATE US
              <div className='rounded-full bg-white flex items-center justify-center p-2'>
              <Image src="/assets/img/contact/location.svg" alt="arrow" width={60} height={60} className='object-cover w-full h-full'/>
              </div>
                      </button>
                      </Link>
          </div>
        </div>

              </motion.div>
            ))}


          </motion.div>
        ) : null
      )}

      </div>
      <div className=' md:col-span-3  w-full'>
        <Image src="/assets/img/contact/contact_address_photo.jpg" alt="contact-image" className="w-full h-full object-cover md:rounded-tr-[20px] md:rounded-br-[20px]" width={400} height={400} />
      </div>
      </div>
      </div>
  )
}

export default AddressBar