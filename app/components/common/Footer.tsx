"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from "react";
const Footer = () => {
  return (
    <section className="py-[50px] md:py-[50px] lg:pt-[99px]  lg:pb-[111px] relative bg-black text-white ">
      <div className="container">
        <div className="flex flex-wrap gap-4 lg:gap-0">
          <div className="lg:w-2/3">
            <Tabs defaultValue="dubai" className="">
              <TabsList className="relative flex    gap-y-5 lg:flex-row rounded-none mb-10 lg:mb-20 bg-transparent justify-start p-0 h-auto">
                <TabsTrigger value="dubai" className="relative group cursor-pointer data-[state=active]:bg-transparent text-white hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center pl-0 pr-10 md:pr-20 py-0 text-19 font-medium">
                  Dubai – UAE
                  <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                  </TabsTrigger>
                <TabsTrigger value="riyadh" className="relative group cursor-pointer data-[state=active]:bg-transparent text-white hover:text-primary capitalize text-left w-fit lg:w-auto lg:text-center pl-0 md:pr-20 py-0 text-19 font-medium">
                  Riyadh - KSA
                  <div className="hidden lg:flex absolute w-full h-[2px] group-data-[state=active]:bg-primary bottom-[-18px] left-0 z-20"></div>
                  </TabsTrigger>
                <div className="absolute w-full h-[1px] bg-white/75 bottom-[-17px] left-0 z-0"></div>
              </TabsList>
              <TabsContent value="dubai">
                <div>
                  <p className="text-32 mb-6"> Dubai – UAE</p>
                  <p className="text-19">
                    Bayan Building, Dubai Investment Park 1<br></br> PO Box 62335</p>
                  <p className="text-19"><span className="text-primary">T</span>: +971 (4) 271 3794</p>
                  <p className="text-19"><span className="text-primary">E</span>: info@firegate.ae</p>
                </div>
              </TabsContent>
              <TabsContent value="riyadh">
                <div>
                  <p className="text-32 mb-6"> Riyadh – UAE</p>
                  <p className="text-19">
                    Bayan Building, Dubai Investment Park 1<br></br> PO Box 62335</p>
                  <p className="text-19"><span className="text-primary">T</span>: +971 (4) 271 3794</p>
                  <p className="text-19"><span className="text-primary">E</span>: info@firegate.ae</p>
                </div>
              </TabsContent>
            </Tabs>


          </div>
          <div className="lg:w-1/3">
            <div className="flex flex-col h-full">
              <div className="flex flex-wrap gap-7 md:gap-10 h-full justify-between">
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
