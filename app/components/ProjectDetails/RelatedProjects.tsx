"use client";
import React from "react";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
const contentItems = [
  {
    title: "Dubai Hills Estate Mall",
    category: "Commercial",
    image: assets.prj1,
  },
  {
    title: "Mirdif 35",
    category: "Commercial",
    image: assets.prj2,
  },
  {
    title: "Wow Hotel & Hotel Apartments",
    category: "Hospitality",
    image: assets.prj3,
  },
];
const RelatedProjects = () => {
  return (
    <div className="">
      <div className="container">
        <div className="pt-[40px] md:pt-[50px] lg:pt-[86px] pb-[40px] md:pb-[50px] lg:pb-[100px] border-b border-[#cccccc]">
         <h1 className="mb-4 md:mb-[55px] text-secondary text-50 font-bold uppercase">
              Related projects
            </h1>
          <div
            className={`grid lg:grid-cols-3 gap-8 md:gap-[30px]  `}
          >
            {contentItems.map((group, index) => (
              <div key={index} className={` `}>
                <div className="  ">
                  <p className="font-medium text-32">{group.title}</p>
                  <p className="font-medium text-md text-[#595959] mb-4 md:mb-8">
                    {group.category}
                  </p>
                  <Image
                    src={group.image}
                    alt={group.title}
                    className="rounded-[20px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
