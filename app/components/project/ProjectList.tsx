"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Sbttl from "../common/Sbttl";
import type { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";

interface Project {
  name: string;
  slug: string;
  client: string;
  sector: string;
  consultant: string;
  location: string;
  thumbnail: string | StaticImageData;
  thumbnailAlt: string;
  coverPhoto: string;
  coverPhotoAlt: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  featuredProject: boolean;
}

interface DynamicGridProps {
  data: Project[];
}

function ProjectList(items: Project[]): Project[][] {
  const chunks: Project[][] = [];
  let i = 0;
  let takeTwo = true;

  while (i < items.length) {
    const size = takeTwo ? 2 : 3;
    chunks.push(items.slice(i, i + size));
    i += size;
    takeTwo = !takeTwo;
  }

  return chunks;
}

export default function DynamicGrid({ data }: DynamicGridProps) {
  const [selected, setSelected] = useState("");
  const [selectedsector, setSelectedsector] = useState("");
  const [selectestatus, setSelectestatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const handleSector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedsector(e.target.value);
  };
  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectestatus(e.target.value);
  };




  const groupedItems = ProjectList(data);

  return (
    <>
      <section className="pt-20 pbc-120">
        <div className="container">
          <div className="mb-12">
            <Sbttl title="Projects" />
          </div>

          <div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-10 gap-2 grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 mb-8 lg:mb-25">
              <div>
                <select
                  id="custom-select"
                  value={selected}
                  onChange={handleChange}
                  className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit"
                > {groupedItems.map((group, index) => (
                  <span key={index} className="text-black ">{
                    group.map((ss, index) => (
                      <option value={ss.location} key={index} >
                        {ss.location}
                      </option>
                    ))
                  }</span>
                ))}
                </select>
              </div>
              <div>
                <select
                  id="custom-select"
                  value={selectedsector}
                  onChange={handleSector}
                  className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit"
                >
                  <option value=""  >
                    Sector
                  </option>
                  <option value="China" className="text-black">
                    Sector
                  </option>
                  <option value="UAE" className="text-black">
                    Sector
                  </option>
                  <option value="USA" className="text-black">
                    Sector
                  </option>
                </select>
              </div>
              <div>
                <select
                  id="custom-select"
                  value={selectestatus}
                  onChange={handleStatus}
                  className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit"
                >
                  <option value="" >
                    Status
                  </option>
                  <option value="China" className="text-black">
                    Status
                  </option>
                  <option value="UAE" className="text-black">
                    Status
                  </option>
                  <option value="cherry" className="text-black">
                    Status
                  </option>
                </select>
              </div>

              <div className="ml-auto mt-6 md:mt-0">
                <Link
                  href="#"
                  className="flex cursor-pointer items-center bg-primary hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group"
                >
                  <span>Clear filter</span>
                  <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center ">
                    <Image
                      src={assets.bluearrowRight}
                      width={14}
                      height={28}
                      alt="read-more"
                      className="w-full h-[14px] object-contain group-hover:animate-pulse  rotate-180"
                    ></Image>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Chunked Grid */}
          {groupedItems.map((group, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-${group.length} gap-7 md:gap-[30px] mb-[50px] lg:mb-25`}
            >
              {group.map((proj) => (
                <Link key={proj.slug} href={`/projects-details/${proj.slug}`}>
                  <div className="border-t border-[#cccccc] pt-4 md:pt-8 ">
                     <p className="font-medium text-32">{proj.client}</p>
                                  <p className="font-medium text-md text-[#595959] mb-4 md:mb-8">{proj.sector}</p>
                                  <Image src={proj.thumbnail} alt={proj.thumbnailAlt} className="rounded-[20px]  " width={794}height={600} />

                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container">
        <div className="mx-auto mb-6 md:mb-[50px]  lg:mb-[100px] w-fit">
                <div
                  className="flex cursor-pointer items-center bg-primary hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs leading-[1.87] uppercase group"
                >
                  <span>Load More</span>
                  <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center ">
                    <Image
                      src={assets.bluearrowRight}
                      width={14}
                      height={28}
                      alt="read-more"
                      className="w-full h-[14px] object-contain group-hover:animate-pulse  rotate-90 "
                    ></Image>
                  </span>
                </div>
              </div>
      </div>
      </section>



    </>
  );
}
