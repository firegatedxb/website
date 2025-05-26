"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

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
}

const RelatedProjects: React.FC<FrameworkSectionProps> = ({ data, sector }) => {
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
    if (data && sector) {
      const filtered = data
        .filter(
          (item) =>
            item.sector?.trim().toLowerCase() === sector.trim().toLowerCase()
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
          <h1 className="mb-4 md:mb-[55px] text-secondary text-50 font-bold uppercase">
            Related projects
          </h1>
          <div
            className={`grid md:grid-cols-2  lg:grid-cols-3 gap-8 md:gap-[30px]  `}
          >
            {filteredData.map((group, index) => (
              <div key={index} className={` `}>
                <Link key={group.slug} href={`/projects-details/${group.slug}`}>
                  <div className="  ">
                    <p className="font-medium text-32">{group.name}</p>
                    <p className="font-medium text-md text-[#595959] mb-4 md:mb-8">
                      {group.sector}
                    </p>
                    <figure className="relative h-[300px] lg:h-[394px] ">
                                              <Image src={group.thumbnail} alt={group.thumbnailAlt} className="rounded-[20px]   object-cover  h-full object-center " width={521} height={394} />
                                        </figure>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
