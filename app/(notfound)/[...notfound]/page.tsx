"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Linear } from 'gsap'
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from 'next/image'
import { assets } from '@/public/assets/assets';
import { fadeUp } from '@/public/frameranimation/animation';

const NotFound = () => {

  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    t1.to(".cog1",
      {
        transformOrigin: "50% 50%",
        rotation: "+=360",
        repeat: -1,
        ease: Linear.easeNone,
        duration: 8
      });

    t2.to(".cog2",
      {
        transformOrigin: "50% 50%",
        rotation: "-=360",
        repeat: -1,
        ease: Linear.easeNone,
        duration: 8
      });

    t3.fromTo(".wrong-para",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true
        }
      });
  }, [])



  return (
    <div className='flex h-screen flex-col items-center justify-center overflow-hidden'>
      <div className="flex justify-center items-center left-[6vmin] relative">
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="cog-wheel2">
          <div className="cog2">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <h1 className="second-four">4</h1>
      </div>
      <div className='flex justify-center items-center w-full relative flex-col'>
        <p className="wrong-para  left-[6vmin]">Uh Oh! Page not found!</p>
        <motion.div variants={fadeUp} custom={2} className="w-fit">
          <Link href="/">
            <button className="flex cursor-pointer items-center bg-primary hover:bg-primary/90 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-2 text-xs leading-[1.87] uppercase group transition">
              <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1">
                <Image
                  src={assets.bluearrowRight}
                  width={14}
                  height={28}
                  alt="read-more"
                  className="w-full h-[14px] object-contain rotate-[180deg]"
                />
              </span>
              <span>Go Back</span>

            </button>
          </Link>

        </motion.div>
      </div>
    </div>
  )
}

export default NotFound