"use client";
import React from "react";
import "swiper/css";
const scopeOfWorkData = {
  title: "Scope Of Work",
  paragraphs: [
    "Design, Supply, Installation, Testing and Commissioning of Sprinkler System, Wet Riser System, Fire Extinguishers, Fire Pump, Fm200 Clean Agent Fire Suppression System, Foam Water Deluge System, Pre-Action Sprinkler System.",
    "With over two decades of extensive experience in fire and security systems, customer relations, and satisfaction, our company is dedicated to delivering top-quality team services. Our team of experts excels in designing, constructing, and maintaining fire-fighting systems (FFS), fire alavrm systems (FAS), electrical evacuation lighting (EEL), and public address and voice evacuation (PAVA) systems. We have established strong relationships with renowned clients, consultants, and contractors across the UAE.",
    "As an A Grade Civil Defence certified contractor, our engineers and technicians undergo comprehensive training in CFPS, NFPA, and manufacturer standards. This expertise allows us to offer a comprehensive range of fire and security solutions, including fire detection, public address and voice evacuation systems, background music systems, emergency exit light systems, CCTV, access control, and building management system (BMS) solutions.",
  ],
};
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

  <div  dangerouslySetInnerHTML={{ __html: data.data.description }}>
  </div>
</div>

      </div>
    </div>
  );
};

export default PjtBanner;
