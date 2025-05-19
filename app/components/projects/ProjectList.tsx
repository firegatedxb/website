"use client"
import Sbttl from "../common/Sbttl";
import { SetStateAction, useState } from "react";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import Link from "next/link";
const ProjectList = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelected(e.target.value)
  }
  return ( 
    <section className="py-10 lg:py-25">
      <div className="container">
        <div className="mb-12">
          <Sbttl title="Projects" />
        </div>
        <div>
          <div className="bg-secondary rounded-2xl p-8 lg:p-10 gap-2 grid grid-cols-2 lg:grid-cols-4 gap-x-4">
            <div>
              {/* <label htmlFor="custom-select" className="block text-sm font-medium text-gray-700 mb-1">Choose an option</label> */}
              <select id="custom-select" value={selected} onChange={handleChange} className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit">
                <option value="" disabled selected hidden>Country</option>
                <option value="China" className="text-black">China</option>
                <option value="UAE" className="text-black">Uae</option>
                <option value="USA" className="text-black">USA</option>
              </select>
            </div>
            <div>
              {/* <label htmlFor="custom-select" className="block text-sm font-medium text-gray-700 mb-1">Choose an option</label> */}
              <select id="custom-select" value={selected} onChange={handleChange} className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit">
                <option value="" disabled selected hidden>Country</option>
                <option value="China" className="text-black">China</option>
                <option value="UAE" className="text-black">Uae</option>
                <option value="USA" className="text-black">USA</option>
              </select>
            </div>
            <div>
              {/* <label htmlFor="custom-select" className="block text-sm font-medium text-gray-700 mb-1">Choose an option</label> */}
              <select id="custom-select" value={selected} onChange={handleChange} className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit">
                <option value="" disabled selected hidden>Country</option>
                <option value="China" className="text-black">China</option>
                <option value="UAE" className="text-black">Uae</option>
                <option value="cherry" className="text-black">Cherry</option>
              </select>
            </div>
       
          <div className="ml-auto">
              <Link href="#" className="flex cursor-pointer items-center bg-primary hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group">
                <span>Clear filter</span>
                <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center ">
                  <Image src={assets.bluearrowRight} width={14} height={28} alt="read-more" className="w-full h-[14px] object-contain group-hover:animate-pulse"></Image>
                </span>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default ProjectList;