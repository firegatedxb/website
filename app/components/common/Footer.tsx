"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/public/assets/assets";
import {  fadeInUp, itemVariants, listVariants } from "@/public/frameranimation/animation";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import React, { useRef, useState } from "react";
const Footer = () => {
  const tabContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};
  const [tabValue, setTabValue] = useState("dubai");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-[50px] md:py-[50px] lg:pt-[99px]  lg:pb-[111px] relative bg-black text-white ">
      <div className="container">
        <div className="flex flex-wrap gap-4 lg:gap-0">
          <div className="lg:w-2/3">
            <motion.div  variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}>
               <Tabs defaultValue="dubai" value={tabValue} onValueChange={setTabValue} className="">
      <TabsList className="relative flex gap-y-5 lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto">
        <TabsTrigger
          value="dubai"
          className="relative group cursor-pointer data-[state=active]:bg-transparent text-white hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center pl-0 pr-10 md:pr-20 py-0 text-19 font-medium"
        >
          Dubai – UAE
          <div className="flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
        </TabsTrigger>
        <TabsTrigger
          value="riyadh"
          className="relative group cursor-pointer data-[state=active]:bg-transparent text-white hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center pl-0 md:pr-20 py-0 text-19 font-medium"
        >
          Riyadh - KSA
          <div className="flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
        </TabsTrigger>
        <div className="absolute w-full h-[1px] bg-white/75 bottom-[-17px] left-0 z-0"></div>
      </TabsList>

      <AnimatePresence mode="wait">
        {tabValue === "dubai" && (
          <motion.div
            key="dubai"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <TabsContent value="dubai">
              <div>
                <p className="text-32 mb-6"> Dubai – UAE</p>
                <p className="text-19">
                  Bayan Building, Dubai Investment Park 1
                  <br /> PO Box 62335
                </p>
                <p className="text-19">
                  <span className="text-primary">T</span>: +971 (4) 271 3794
                </p>
                <p className="text-19">
                  <span className="text-primary">E</span>: info@firegate.ae
                </p>
              </div>
            </TabsContent>
          </motion.div>
        )}

        {tabValue === "riyadh" && (
          <motion.div
            key="riyadh"
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <TabsContent value="riyadh">
              <div>
                <p className="text-32 mb-6"> Riyadh – KSA</p>
                <p className="text-19">
                  Building 2, Office 9, Anas Ibn Malik Road, Al Yasmin <br />
                  PO Box 13322
                </p>
                <p className="text-19">
                  <span className="text-primary">T</span>: +966 (56) 517 8039
                </p>
                <p className="text-19">
                  <span className="text-primary">E</span>: info@firegate.ae
                </p>
              </div>
            </TabsContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Tabs>
            </motion.div>


          </div>
          <div className="lg:w-1/3">
         <motion.div
      className="flex flex-col h-full"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={listVariants}
    >
      <div className="flex flex-wrap gap-7 md:gap-10 h-full justify-between">
        <motion.ul className="ulsmn" variants={listVariants}>
          {[
            { href: "/services#section0", label: "Maintenance" },
            { href: "/services#section1", label: "Design & Engineering" },
            { href: "/services#section2", label: "Installation" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1 1L6 6L1 11" stroke="#979797" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul className="ulsmn" variants={listVariants}>
          {[
            { href: "/about", label: "About Us" },
            { href: "#", label: "Health Safety Environment" }, // Replace `#` if needed
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1 1L6 6L1 11" stroke="#979797" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {item.href !== "#" ? <Link href={item.href}>{item.label}</Link> : item.label}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="border-t border-[#ffffff35]"
        variants={itemVariants}
        transition={{ delay: 0.6 }}
      >
        <p className="text-15 text-[#979797] font-[300] mt-6 md:mt-[33px]">
          ©2025 Fire gate safety & Security systems. All Rights Reserved
        </p>
      </motion.div>
    </motion.div>
          </div>
        </div>
      </div>
       <motion.div className=" whatsapp  "   >
                      <Link href="#"  >
                        <Image src={assets.whatsapp} alt="slider" className="fixed bottom-5 lg:bottom-[180px] right-[10px] lg:right-[50px] z-50 w-[30px] h-[30px] lg:h-[60px] lg:w-[60px] " />
                        </Link>
                    </motion.div>
    </section>
  );
};

export default Footer;
