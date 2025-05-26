"use client";
import React from "react";
import "swiper/css";

import { Project } from "@/public/types/Project";
interface FrameworkSectionProps {
  data: Project;
}

const PjtBanner: React.FC<FrameworkSectionProps> = ({
  data,

}) => {
  return (
    <div className="">
      <div className="container">
        <div className="pt-[40px] md:pt-[50px] lg:pt-[86px] pb-[40px] md:pb-[50px] lg:pb-[70px] border-b border-[#cccccc]">
  <h1 className="mb-4 md:mb-[28px] text-secondary text-50 font-bold uppercase">
    {data.data.title}
  </h1>
<div className="text-595959">
  <div  dangerouslySetInnerHTML={{ __html: data.data.description }}>
            </div>
            </div>
</div>

      </div>
    </div>
  );
};

export default PjtBanner;
