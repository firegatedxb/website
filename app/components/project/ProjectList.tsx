"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sbttl from "../common/Sbttl";
import type { StaticImageData } from "next/image";
import { assets } from "@/public/assets/assets";
import SelectBox from "./StatusDropdown";
import { motion } from "framer-motion";
import { fadeInUpsec } from "@/public/frameranimation/animation";

interface Project {
  name: string;
  slug: string;
  client: string;
  sector: string;
  status: boolean;
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
  const limit = 5;

  const [selected, setSelected] = useState("");
  const [selectedsector, setSelectedsector] = useState("");
  const [selectestatus, setSelectestatus] = useState("");
  const [visible, setVisible] = useState(limit);
  const [filteredData, setFilteredData] = useState<Project[]>([]);
  const [disableLoadMore, setDisableLoadMore] = useState(false);

  const handleClearFilters = () => {
    setSelected("");
    setSelectedsector("");
    setSelectestatus("");
    setVisible(limit);
  };

  useEffect(() => {
  if (!data) return;

  let filtered = data;

  if (selected) {
    filtered = filtered.filter(
      (item) => item.location?.toLowerCase() === selected.toLowerCase()
    );
  }
  if (selectedsector) {
    filtered = filtered.filter(
      (item) => item.sector?.toLowerCase() === selectedsector.toLowerCase()
    );
  }
  if (selectestatus) {
    filtered = filtered.filter(
      (item) => String(item.status).toLowerCase() === selectestatus.toLowerCase()
    );
  }

  // ✅ Reset visible count when filters change
  setVisible(limit);
  setFilteredData(filtered);
  setDisableLoadMore(filtered.length <= limit);
}, [data, selected, selectedsector, selectestatus]);

const handleLoadMore = () => {
  const newVisible = visible + limit;
  setVisible(newVisible);

  if (newVisible >= filteredData.length) {
    setDisableLoadMore(true);
  }
};

  const slicedData = filteredData.slice(0, visible);
  const groupedItems = ProjectList(slicedData);

  return (
    <section className="pt-[50px] lg:pt-[70px] 2xl:pt-[103px] ">
      <div className="container">
        <div className="mb-8 lg:mb-10 2xl:mb-12">
          <Sbttl title="Projects" />
        </div>

        <motion.div
          variants={fadeInUpsec}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-secondary rounded-2xl p-8 lg:p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-[50px] mb-[50px] lg:mb-[70px] 2xl:mb-25">
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
                { name: "Completed", value: "true" },
                { name: "On Going", value: "false" },
              ]}
            />
            <div className="ml-auto mt-6 md:mt-0">
              <div
                onClick={handleClearFilters}
                className="flex cursor-pointer items-center bg-primary hover:bg-red-700 text-white w-fit font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs uppercase group"
              >
                <span>Clear filter</span>
                <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                  <Image
                    src={assets.bluearrowRight}
                    width={14}
                    height={28}
                    alt="clear"
                    className="h-[14px] object-contain group-hover:animate-pulse rotate-180"
                  />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        {groupedItems.map((group, gIndex) => (
          <motion.div
            key={group[0]?.slug || gIndex}
            className={`grid grid-cols-1  md:grid-cols-${group.length} gap-7 md:gap-[30px] mb-[50px]   2xl:mb-[80px]`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {group.map((proj, index) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              >
                <Link href={`/projects-details/${proj.slug}`}>
                  <div className="border-t border-[#cccccc] pt-4 md:pt-8 cursor-pointer">
                    <p className="font-medium text-32 truncate">{proj.name}</p>
                    <p className="font-medium text-md text-gray mb-4 md:mb-8 truncate ">
                      {proj.sector}
                    </p>
                    <figure className="relative h-[350px]  md:h-[250px] lg:h-[500px]">
                      <Image
                        src={proj.thumbnail}
                        alt={proj.thumbnailAlt}
                        className="rounded-[20px] object-cover h-full object-center"
                        width={794}
                        height={600}
                      />
                    </figure>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Load More / Empty State */}
        <div className="text-center">
          {groupedItems.length > 0 && !disableLoadMore && (
            <motion.div
              variants={fadeInUpsec}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                onClick={handleLoadMore}
                className="mx-auto flex cursor-pointer items-center bg-primary hover:bg-red-700 text-white font-medium px-5 py-2 rounded-[8px] space-x-5 text-xs uppercase w-fit mb-15 lg:mb-[70px] 2xl:mb-25"
              >
                <span>Load More</span>
                <span className="bg-white rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center">
                  <Image
                    src={assets.bluearrowRight}
                    width={14}
                    height={28}
                    alt="load-more"
                    className="h-[14px] object-contain group-hover:animate-pulse rotate-90"
                  />
                </span>
              </div>
            </motion.div>
          )}

          {groupedItems.length < 1 && (
            <p className="text-gray-500 text-lg py-10">No Projects Available</p>
          )}
        </div>
      </div>
    </section>
  );
}
