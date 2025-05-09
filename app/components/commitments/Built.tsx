import React from 'react'
import Image from 'next/image'

const Built = () => {
  return (
    <div className='grid grid-cols-5 gap-5'>
        <div className='col-span-2'>
            <Image src="/assets/img/commitment/builtimage.jpg" className="w-full h-full object-cover rounded-tr-xl rounded-br-xl" alt="image-alt" width={400} height={400} />
        </div>
        <div className='col-span-3 pl-10 pr-32 flex flex-col gap-5 py-[100px]'>
            <div className='flex flex-col gap-5'>
            <div>
                <h2 className='text-50 text-site-blue uppercase'>Built on Commitment. Backed by Integrity.</h2>
            </div>
            <div className='text-gray text-19'>
                <p> At Fire Gate, commitment isn’t a slogan, it’s the standard we hold ourselves to on every site, with every system, 
                    and in every interaction. Our work protects people, property, and continuity of operations, and 
                    we take that responsibility seriously. From project planning to post-installation service, 
                    we stand by our work through measurable performance, long-term support, and ethical practices.</p>
            </div>
            
            <div>
            <div>
                <div className='flex justify-between items-center border-b py-8'>
                    <div className='text-gray text-19'>
                        <p>Delivering fully compliant, authority-approved solutions</p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center border-b py-8'>
                    <div className='text-gray text-19'>
                        <p>Maintaining safety-first practices across all operations </p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center border-b py-8'>
                    <div className='text-gray text-19'>
                        <p>Reducing Impact Through Sustainable Sourcing and Waste Control</p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center border-b py-8'>
                    <div className='text-gray text-19'>
                        <p>Upholding the trust of our clients, partners, and team members</p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Built