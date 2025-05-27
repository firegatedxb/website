"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sbttl from "../common/Sbttl";
import type { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";
import SelectBox from "./StatusDropdown";

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



  const limit = 5;
  const [visible,setVisible] = useState(0);
  const [disableLoadMore,setDisableLoadMore] = useState(false);

  const handleLoadMore = () => {
    setVisible(visible + limit);

  };

  useEffect(()=>{
    if(visible + limit >= data.length){
      setDisableLoadMore(true);
    }
  },[visible])

  const groupedItems = ProjectList(filteredData);
useEffect(() => {
  if (!data) return;

  let filtered = data.slice(0, visible + limit);

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
  setFilteredData(filtered);

  // 🔀 Shuffle and set
  // const shuffled = filtered.sort(() => Math.random() - 0.5);
  // setFilteredData(shuffled);
}, [data, selected, selectedsector, selectestatus, visible]);


  return (
    <>
      <section className="pt-20 pbc-120">
        <div className="container">
          <div className="mb-12">
            <Sbttl title="Projects" />
          </div>

          <div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-10 gap-2 xl:gap-[50px] grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 mb-8 lg:mb-25">
             <SelectBox
  label="Country"
  selected={selected}
  setSelected={setSelected}
  options={locationData?.data?.map((item) => ({ name: item.name, value: item.name })) || []}
/>

<SelectBox
  label="Sector"
  selected={selectedsector}
  setSelected={setSelectedsector}
  options={sectorData?.data?.map((item) => ({ name: item.name, value: item.name })) || []}
/>

<SelectBox
  label="Status"
  selected={selectestatus}
  setSelected={setSelectestatus}
  options={[
    { name: 'Completed', value: 'true' },
    { name: 'On Going', value: 'false' },
  ]}
/>

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
                     <p className="font-medium text-32 truncate overflow-hidden whitespace-nowrap">{proj.name}</p>
                                  <p className="font-medium text-md text-gray mb-4 md:mb-8">{proj.sector}</p>
                    {/* <Image src={proj.thumbnail} alt={proj.thumbnailAlt} className="rounded-[20px]  " width={794} height={600} /> */}
                    <figure className="relative h-[450px] lg:h-[500px] ">
                          <Image src={proj.thumbnail} alt={proj.thumbnailAlt} className="rounded-[20px]   object-cover  h-full object-center " width={794} height={600} />
                    </figure>

                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container">
        {!disableLoadMore && <div className="mx-auto mb-6 md:mb-[50px]  lg:mb-[100px] w-fit">
                <div
                  onClick={handleLoadMore}
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
              </div>}
      </div>
      </section>



    </>
  );
}
