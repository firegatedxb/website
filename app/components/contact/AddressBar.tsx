"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Contact } from "@/public/types/Common";
import { slideInLeft } from "@/public/frameranimation/animation";

const AddressBar = ({ data }: { data: Contact }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container">
        <motion.div variants={slideInLeft}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          custom={2}  className="  md:grid md:grid-cols-7  rounded-tr-[20px] rounded-br-[20px]">
        <div className="bg-siteaftr bg-secondary md:bg-none pl-[20px] md:col-span-4 py-[50px] lg:py-[100px] flex flex-col gap-10 lg:gap-20 relative text-white">
          <motion.div variants={slideInLeft}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.4 }}
                          custom={2}  className="flex gap-6 lg:gap-[38px] items-center border-b border-[#ffffff35]    w-fit">
            {data.contacts.map((item, index) => (
              <motion.p
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-19 font-medium  leading-[2.18] cursor-pointer relative top-[1px] pb-1 pr-5 md:pr-10  lg:pr-[125px]
              ${
                activeTab === index
                  ? "border-b-2 border-primary font-[600]"
                  : "border-b-2 border-transparent font-[400] text-[#d8d8d8a1]"
              }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.title}
              </motion.p>
            ))}
          </motion.div>

          {data.contacts.map((item, index) =>
            activeTab === index ? (
              <motion.div
                key={index}
                className="flex flex-col gap-7"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  key={index}
                  className="flex gap-5 items-start"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex flex-col gap-12 lg:gap-20">
                    <div className="w-full flex flex-col gap-5">
                      <h3 className="text-30">{item.title}</h3>
                      <p className="text-19">{item.address}</p>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                      <div className="flex gap-4 border-b pb-5">
                        <Image
                          src="/assets/img/contact/message.svg"
                          alt="message"
                          width={41}
                          height={34}
                        />
                        <p className="text-30">{item.email}</p>
                      </div>
                      <div className="flex gap-4 ">

                        <Image
                          src="/assets/img/contact/phone.svg"
                          alt="phone"
                          width={41}
                          height={34}
                        />
                        <p className="text-30">{item.phone}</p>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={item.buttonLink}
                        target="_blank"
                      >
                        <button className="bg-primary cursor-pointer text-white px-6 py-2 flex items-center gap-3 rounded-lg group">
  LOCATE US
  <div className="rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-0.5 w-[36px] h-[36px]">
    <Image
      src="/assets/img/contact/location.svg"
      alt="location"
      width={17}
      height={20}
      className="object-cover  "
    />
  </div>
</button>

                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </div>
        <div className=" md:col-span-3  w-full">
          <Image
            src={data.image}
            alt="contact-image"
            className="w-full h-full object-cover md:rounded-tr-[20px] md:rounded-br-[20px]"
            width={400}
            height={400}
          />
        </div>
       </motion.div>
    </div>
  );
};

export default AddressBar;
