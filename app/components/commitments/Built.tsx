import React from 'react'
import Image from 'next/image'

const Built = () => {
  return (
      <div className='relative'>
           <div className='container'>
          <div className='lg:grid grid-cols-5 gap-5'>
        <div className='col-span-2'>
        <div className="lg:w-[40%] mt-10 lg:mt-0 h-[350px] lg:h-full lg:absolute left-0 object-cover rounded-xl lg:rounded-tl-[0px]  lg:rounded-bl-[0px] bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/img/commitment/builtimage.jpg')" }}>

       </div>
                  </div>
        <div className='col-span-3 lg:pl-10 lg:pr-32 flex flex-col gap-5 pt-[50px] md:pt-[70px] lg:pt-[100px] pb-[20px] md:pb-[30px] lg:pb-[70px]'>
            <div className='flex flex-col  '>
            <div>
                <h2 className='text-50 text-site-blue uppercase max-w-[20ch] mb-5 md:mb-[30px] leading-[1.3]'>Built on Commitment<span className='text-primary'>.</span> Backed by Integrity<span className='text-primary'>.</span></h2>
            </div>
            <div className='text-gray text-19 mb-5 md:mb-[40px]'>
                <p> At Fire Gate, commitment isn’t a slogan, it’s the standard we hold ourselves to on every site, with every system,
                    and in every interaction. Our work protects people, property, and continuity of operations, and
                    we take that responsibility seriously. From project planning to post-installation service,
                    we stand by our work through measurable performance, long-term support, and ethical practices.</p>
            </div>

            <div>
            <div>
                <div className='flex justify-between items-center border-b border-[#59595920] py-8 group'>
                    <div className='text-gray text-19 group-hover:text-primary'>
                        <p>Delivering fully compliant, authority-approved solutions</p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center border-b border-[#59595920] py-8 group'>
                    <div className='text-gray text-19 group-hover:text-primary'>
                        <p>Maintaining safety-first practices across all operations </p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center border-b border-[#59595920] py-8 group'>
                    <div className='text-gray text-19 group-hover:text-primary'>
                        <p>Reducing Impact Through Sustainable Sourcing and Waste Control</p>
                    </div>
                    <div className='bg-primary py-3 px-4 rounded-lg'>
                        <Image src="/assets/img/commitment/built1icon.svg" className="w-full h-full object-cover" alt="image-alt" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center  py-8 group'>
                    <div className='text-gray text-19 group-hover:text-primary'>
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
    </div>
     </div>
  )
}

export default Built