"use client";

import React from "react";
const Footer = () => {
  return (
    <section className="py[50px] md:py-[50px] lg:pt-[99px]  lg:pb-[111px] relative bg-black text-white ">
      <div className="container">
        <div className="flex">
          <div className="w-2/3">
            <div className="text-19 font-medium flex  border-b border-white w-fit mb-7 md:mb-[50px] lg:mb-[77px]">
              <div className="hover:border-b-3 hover:border-primary py-6 relative  top-[2px]  md:min-w-[245px] text-[#979797] hover:text-white cursor-pointer">
                <p>Duabi - UAE</p>
              </div>
              <div className="hover:border-b-3  hover:border-primary py-6 relative   top-[2px]  md:min-w-[245px] text-[#979797] hover:text-white cursor-pointer">
                <p>Riyadh - KSA</p>
              </div>
            </div>
            <div>
              <p className="text-32 mb-6"> Dubai – UAE</p>
              <p className="text-19">
              Bayan Building, Dubai Investment Park 1<br></br> PO Box 62335</p>
              <p className="text-19"><span className="text-primary">T</span>: +971 (4) 271 3794</p>
              <p className="text-19"><span className="text-primary">E</span>: info@firegate.ae</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-col h-full">
              <div className="flex gap-7 md:gap-10 h-full justify-between">
              <ul className="ulsmn">
                <li>Maintenance</li>
                <li>Design & Engineering</li>
                <li>Installation</li>
              </ul>
              <ul className="ulsmn">
                <li>About Us</li>
                <li>Health Safety Environment</li>
                <li>Policies</li>
              </ul>
            </div>
            <div className="border-t border-[#ffffff35]">
              <p className="text-15 text-[#979797] font-[300] mt-6 md:mt-[33px]">©2025 Fire gate safety & Security systems. All Rights Reserved</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
