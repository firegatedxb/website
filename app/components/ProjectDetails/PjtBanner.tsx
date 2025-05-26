"use client";
import React from "react";
import "swiper/css";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { Project } from "@/public/types/Project";





interface FrameworkSectionProps {
  data: Project;
}

const PjtBanner: React.FC<FrameworkSectionProps> = ({
  data,

}) => {
  return (
    <div className="">
      <div>
        <div className="pt-[40px] md:pt-[70px] lg:pt-[100px] ">
          <div className="container">
            <h1 className="mb-5 md:mb[50px] text-secondary text-65 font-bold uppercase">
              Dubai Hills Estate Mall
            </h1>
          </div>
          <div className="overflow-hidden   ">
            <div>
              <div className="px-[15px] md:px-0 mb-10 md:mb-0 relative">
              <div className="md:w-[45%] lg:w-[55%] xl:w-[60%] h-[320px] md:h-[521px]  lg:h-[785px]  xl:h-[785px]     z-[1]  md:absolute right-0 top-0 object-cover  md:rounded-tl-[20px]  md:rounded-bl-[20px] bg-no-repeat bg-cover"
              style={{
               backgroundImage: `url(${data.data.coverPhoto})`
               ,
              }}>
              {/* <Image
                src={assets.dmall}
                alt=""
                className="absolute top-0 right-0 rounded-tl-[20px] rounded-bl-[20px]"
              /> */}
            </div>
            </div>
            </div>
            <div className="container">
          <div className="relative bg-secondary min-h-[200px] md:min-h-[350px] lg:min-h-[785px] rounded-[20px] p-8 lg:p-[70px] text-white afst ">
<div className="md:w-1/2 lg:w-1/3 flex flex-col gap-4 justify-between">
  <div className="flex flex-col gap-4 md:gap-8 justify-stretch h-full">

      <div  className="flex gap-4 md:gap-8 border-b pb-5 md:pb-8">
        <Image src={assets.iccon} alt={data.data.client} />
        <div>
          <p className="text-md font-medium">Client</p>
          <p className="text-32 font-medium">{data.data.client}</p>
        </div>
      </div>
      <div  className="flex gap-4 md:gap-8 border-b pb-5 md:pb-8">
        <Image src={assets.icststus} alt={data.data.client} />
        <div>
          <p className="text-md font-medium">Consultant</p>
          <p className="text-32 font-medium">{data.data.consultant}</p>
        </div>
      </div>
      <div  className="flex gap-4 md:gap-8 border-b pb-5 md:pb-8">
        <Image src={assets.iclocation} alt={data.data.client} />
        <div>
          <p className="text-md font-medium">Status</p>

                     {data.data.status ?  <p className="text-32 font-medium">Completed</p> : <p> <p className="text-32 font-medium">On Going</p></p>}
        </div>
      </div>

  </div>

  {/* Bottom Location Block */}
  <div className="lg:absolute bottom-8 md:bottom-[80px]">
    <div className="flex gap-4 md:gap-8">
      <Image src={assets.icuser} alt="Location" />
      <div>
        <p className="text-32 font-medium">{data.data.location}</p>
      </div>
    </div>
  </div>
</div>

            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PjtBanner;
