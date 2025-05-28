"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {  cardVariantsecs, gridVariants, slideInLeft } from "@/public/frameranimation/animation";

interface Project {
  name: string;
  slug: string;
  client: string;
  sector: string;
  consultant: string;
  location: string;
  thumbnail: string;
  thumbnailAlt: string;
  coverPhoto: string;
  coverPhotoAlt: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  featuredProject: true;
}

interface FrameworkSectionProps {
  data: Project[];
  sector: string;
  pjtname:string;
}

const RelatedProjects: React.FC<FrameworkSectionProps> = ({ data, sector,pjtname }) => {
  console.log("Related Projects Data:", data  );
  const [filteredData, setFilteredData] = useState<
    {
      name: string;
      slug: string;
      client: string;
      sector: string;
      consultant: string;
      location: string;
      thumbnail: string;
      thumbnailAlt: string;
      coverPhoto: string;
      coverPhotoAlt: string;
      title: string;
      description: string;
      metaTitle: string;
      metaDescription: string;
      featuredProject: true;
    }[]
  >([]);

  useEffect(() => {

    if (data && sector &&  pjtname) {
      const filtered = data
        .filter(
          (item) =>
            item.sector?.trim().toLowerCase() === sector.trim().toLowerCase()&&
            item.name?.trim().toLowerCase() !== pjtname.trim().toLowerCase()
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setFilteredData(filtered);
    }
  }, [data, sector]);

  useEffect(() => {}, [filteredData]);
  return (
    <div className="">
      <div className="container">
        <div className="pt-[40px] md:pt-[50px] lg:pt-[86px] pb-[40px] md:pb-[50px] lg:pb-[100px] border-b border-[#cccccc]">
          <motion.h1 className="mb-4 md:mb-[55px] text-secondary text-50 font-bold uppercase"
           variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            custom={2}  >
            Related projects
          </motion.h1>
         <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={gridVariants}
    >
      {filteredData.map((group, index) => (
        <motion.div
          key={index}
          variants={cardVariantsecs}
          className=""
        >
          <Link href={`/projects-details/${group.slug}`}>
            <div>
              <p className="font-medium text-32 truncate overflow-hidden whitespace-nowrap">
                {group.name}
              </p>
              <p className="font-medium text-md text-gray mb-4 md:mb-8">
                {group.sector}
              </p>
              <figure className="relative h-[300px] lg:h-[394px]">
                <Image
                  src={group.thumbnail}
                  alt={group.thumbnailAlt}
                  className="rounded-[20px] object-cover h-full object-center"
                  width={521}
                  height={394}
                />
              </figure>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
