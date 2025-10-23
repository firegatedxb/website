"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/public/assets/assets";
import {  fadeInUp, itemVariants, listVariants } from "@/public/frameranimation/animation";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
const Footer = () => {
  const tabContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  };
  const [contactList, setContactList] = useState<{ metaTitle: string,
    metaDescription: string,
    image: string,
    imageAlt: string,
    pageTitle: string,
    contacts: [
      {
        title: string,
        address: string,
        phone: string,
        email: string
      }
    ],
    socials: [
      {
        title: string,
        link: string
      }
    ]} >();
   const handleFetchContact = async () => {
      try {
        const response = await fetch("/api/admin/contact");
        if (response.ok) {
          const data = await response.json();
          setContactList(data.data);
        } else {
          const data = await response.json();
          alert(data.message);
        }
      } catch (error) {
        console.log("Error fetching industry", error);
      }
    }

    useEffect(() => {
      handleFetchContact();
    }, [])
    console.log(contactList);
  const defaultTab = contactList?.contacts[0]?.title || "Dubai - UAE";
  const [tabValue, setTabValue] = useState<string>(defaultTab);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-10 pb-0 md:pb-0 lg:py-12 2xl:py-17 relative bg-black text-white ">
      {defaultTab && (
        <div className="container">
          <div className="flex flex-wrap gap-4 lg:gap-0">
            <div className="lg:w-[60%]">
              <motion.div variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}>
                <Tabs defaultValue={defaultTab} value={tabValue} onValueChange={setTabValue} className="">
                  <TabsList className="relative flex gap-y-5 lg:flex-row rounded-none mb-10 bg-transparent justify-start p-0 h-auto">
                    {contactList?.contacts.map((client, index) => (
                      <div key={index}  >
                        <TabsTrigger
                          value={client.title}
                          className="relative group cursor-pointer data-[state=active]:bg-transparent text-white  capitalize text-left w-fit lg:w-auto lg:text-center pl-0 pr-[10px] md:pr-[15px]  lg:pr-[90px] py-0 text-19 font-medium"
                        >
                          <p className="mb-0 text-[#979797]  group-data-[state=active]:text-white hover:text-white transition-all duration-300 text-sm md:text-md xl:text-[19px]"> {client.title}</p>

                          <div className="flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-21px] md:bottom-[-19px] left-0 z-20"></div>
                        </TabsTrigger>
                      </div>
                    ))}


                    <div className="absolute w-full h-[1px] bg-white/75 bottom-[-17px] left-0 z-0"></div>
                  </TabsList>

                  <AnimatePresence mode="wait">


                    {contactList?.contacts.map((client, index) => (
                      <div key={index}>
                        {tabValue === client.title && (
                          <motion.div
                            key={client.title}
                            variants={tabContentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            <TabsContent value={client.title}>
                              <div>
                                <p className="text-32 mb-4"> {client.title}</p>
                                <p className="text-19">
                                  {client.address?.split('PO')[0]},
                                  {client.address?.split('PO')[1]}
                                </p>
                                <p className="text-19">
                                  <span className="text-primary">T</span>:
                                  <a href={`tel:${client.phone}`}> {client.phone}</a>

                                </p>
                                <p className="text-19">
                                  <span className="text-primary">E</span>:
                                  <a href={`mailto:${client.email}`}> {client.email}</a>
                                </p>
                              </div>
                            </TabsContent>
                          </motion.div>
                        )}
                      </div>
                    ))}

                  </AnimatePresence>
                </Tabs>
              </motion.div>


            </div>
            <div className="lg:w-[40%]">
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
                      { href: "/services#section0", label: "Design & Engineering" },
                      { href: "/services#section1", label: "Installation" },
                      { href: "/services#section2", label: "Maintenance" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 group hover:text-primary transition-all duration-300 transform   ease-in-out hover:translate-x-1"
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
                      { href: "/commitments", label: "Commitments" }, // Replace `#` if needed
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 group hover:text-primary transition-all duration-300 transform   ease-in-out hover:translate-x-1"
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
                    ©2025 Fire gate safety & Security systems. All Rights Reserved by Global Surf
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
        <div className=" whatsapp  "   >
          <Link href="https://wa.me/+971559174751" target="_blank">
                        <Image src={assets.whatsapp} alt="slider" className="fixed group hover:text-primary transition-all duration-300 transform   ease-in-out hover:-translate-y-1 bottom-5 lg:bottom-[40px] right-[10px] lg:right-[50px]  z-50 w-[20px] h-[20px] lg:h-[40px] lg:w-[40px] " />
                        </Link>
                      </div>
    </section>
  );
};

export default Footer;
