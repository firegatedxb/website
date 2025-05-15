"use client";

import React , { useState } from 'react';
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const OurServices = () => {

const services = [
  {
    title: 'Design & Engineering',
    subtitle: 'Installation',
    description:
      'Our team of experts excels in designing, constructing, and maintaining fire-fighting systems (FFS), fire alarm systems (FAS), electrical evacuation lighting (EEL), and public address and voice evacuation (PAVA) systems.',
  },
  {
    title: 'Maintenance',
    subtitle: 'Maintenance',
    description:
      'Our team of experts excels in designing, constructing, and maintaining fire-fighting systems (FFS), fire alarm systems (FAS), electrical evacuation lighting (EEL), and public address and voice evacuation (PAVA) systems.',
  },
];
 const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-[50px]  md:py-[50px] lg:pt-[108px]  lg:pb-[78px] relative bg-secondary">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-1/2 pr-0 md:pr-5 lg:pr-[140px] ">
            <h2 className="text-50 text-white font-medium mb-0 lg:mb-[91px] uppercase">
              Our Services
            </h2>
              <div className="">
      {services.map((service, index) => (
        <div key={index} className='sebder last:border-b-0'>
          <div
            className="border-b border-white cursor-pointer spb"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <p className="text-30 font-medium text-white leading-[3.3] hvtitle">
              {service.title}
            </p>
          </div>

          <div
            className={`border-b border-white overflow-hidden transition-opacity duration-500  ${
              activeIndex === index ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-[0px]'
            }`}
          >
            <div className="border-l-3 border-primary pl-4 md:pl-[40px] my-4 md:my-[38px]">
              <div>
                <p className="text-30 font-medium text-white pb-4 md:pb-[20px] leading-[1]">
                  {service.subtitle}
                </p>
                <p className="mb-4 md:mb-[42px] text-white text-19">{service.description}</p>
              </div>
              <button className="flex cursor-pointer items-center text-white w-fit font-medium rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase">
                <span>READ MORE</span>
                <span className="bg-primary rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

          </div>
          <div className="md:w-1/2 ">
            <div className="mt-6 md:mt-0">
              <figure >
            <Image src={assets.homemn} alt="" className='rounded-[20px]' />
          </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
