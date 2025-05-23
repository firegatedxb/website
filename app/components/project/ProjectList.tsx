"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sbttl from "../common/Sbttl";
import type { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";

interface Project {
  name: string;
  slug: string;
  client: string;
  sector: string;
  status:boolean;
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
  locationData: { data: { name: string }[] };
  sectorData: { data: { name: string }[] };
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

export default function DynamicGrid({ data, locationData, sectorData }: DynamicGridProps) {
  const handleClearFilters = () => {
  setSelected('');         // reset location
  setSelectedsector('');   // reset sector
  setSelectestatus('');    // reset status
  setFilteredData(data);   // show all data
};
  const [selected, setSelected] = useState("");
  const [selectedsector, setSelectedsector] = useState("");
  const [selectestatus, setSelectestatus] = useState("");
  const [filteredData, setFilteredData] = useState<
      {
      name: string;
  slug: string;
  client: string;
  sector: string;
  status:boolean;
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
      }[]
    >([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const handleSector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedsector(e.target.value);
  };
  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectestatus(e.target.value);
  };

  const limit = 10;
  const [visible,setVisible] = useState(limit);

  const groupedItems = ProjectList(filteredData);
useEffect(() => {
  if (!data) return;

  let filtered = data.slice(0, limit);

  // 🔹 1. location + sector + status
  if (selected && selectedsector && selectestatus) {
    filtered = data.filter(
      (item) =>
        item.location?.trim().toLowerCase() === selected.trim().toLowerCase() &&
        item.sector?.trim().toLowerCase() === selectedsector.trim().toLowerCase() &&
        String(item.status).toLowerCase() === selectestatus.trim().toLowerCase()
    );
  }

  // 🔹 2. location + sector
  else if (selected && selectedsector) {
    filtered = data.filter(
      (item) =>
        item.location?.trim().toLowerCase() === selected.trim().toLowerCase() &&
        item.sector?.trim().toLowerCase() === selectedsector.trim().toLowerCase()
    );
  }

  // 🔹 3. location + status
  else if (selected && selectestatus) {
    filtered = data.filter(
      (item) =>
        item.location?.trim().toLowerCase() === selected.trim().toLowerCase() &&
        String(item.status).toLowerCase() === selectestatus.trim().toLowerCase()
    );
  }

  // 🔹 4. sector + status
  else if (selectedsector && selectestatus) {
    filtered = data.filter(
      (item) =>
        item.sector?.trim().toLowerCase() === selectedsector.trim().toLowerCase() &&
        String(item.status).toLowerCase() === selectestatus.trim().toLowerCase()
    );
  }

  // 🔹 5. location only
  else if (selected) {
    filtered = data.filter(
      (item) =>
        item.location?.trim().toLowerCase() === selected.trim().toLowerCase()
    );
  }

  // 🔹 6. sector only
  else if (selectedsector) {
    filtered = data.filter(
      (item) =>
        item.sector?.trim().toLowerCase() === selectedsector.trim().toLowerCase()
    );
  }

  // 🔹 7. status only
  else if (selectestatus) {
    filtered = data.filter(
      (item) =>
        String(item.status).toLowerCase() === selectestatus.trim().toLowerCase()
    );
  }

  // 🔀 Shuffle and set
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  setFilteredData(shuffled);
}, [data, selected, selectedsector, selectestatus]);


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
                >

                    <option value=""disabled > Country
                    </option>
                  {locationData?.data?.map((group, index) => (
                    <option value={group.name}  key={index} className="text-black" >
                      {group.name}
                    </option>
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
                    <option value="" disabled > Sector
                    </option>
                  {sectorData?.data?.map((group, index) => (

                      <option value={group.name} key={index} className="text-black " >
                        {group.name}
                      </option>

                ))}
                </select>
              </div>
              <div>
                <select
                  id="custom-select"
                  value={selectestatus}
                  onChange={handleStatus}
                  className="block w-full py-2 mt-1 focus:outline-none text-white border-b border-graylit"
                >
                  <option value="" disabled className="text-black" >
                   Status
                  </option>
                  <option value="true" className="text-black" >
                   Completed
                  </option>
                  <option value="false" className="text-black">
                    On Going
                  </option>

                </select>
              </div>

              <div className="ml-auto mt-6 md:mt-0">
                <div
                 onClick={handleClearFilters}
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
                </div>
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
                                  <Image src={proj.thumbnail} alt={proj.thumbnailAlt} className="rounded-[20px]  " width={794} height={600} />

                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container">
        <div className="mx-auto mb-6 md:mb-[50px]  lg:mb-[100px] w-fit">
                <div
                  onClick={() => setVisible(visible + limit)}
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
