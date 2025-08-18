
'use client';
import React from "react";

import Image from "next/image";
import { assets } from "@/public/assets/assets";
import Link from "next/link";

const Index = () => {

  return (
      <div>
        <div className='error px-3'>
  <h1 className="code  ">
      <span>4</span>
      <span
        className={`fortext inline-block transform transition-all duration-700   animate-float`}
      >
        0
      </span>
      <span>4</span>
        </h1>
          <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(12px);
      }
    }
    .animate-float {
      animation: float 1.5s ease-in-out infinite;
      display: inline-block;
    }
  `}</style>
        <h2 className='desc text-center '>Ops... The page you are looking for cannot be found.</h2>
        <Link href="/">
          <button className="mt-[55px] flex cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group transition">
          <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1">
              <Image
                src={assets.bluearrowRight}
                width={14}
                height={28}
                alt="read-more"
                className="w-full h-[14px] object-contain rotate-180"
              />
            </span>
            <span>Back To Home</span>

          </button>
        </Link>
</div>

      </div>
  )
}

export default Index