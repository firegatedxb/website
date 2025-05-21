"use client"
import React from 'react'
import ProjectList from './ProjectList'
import useSWR from "swr";

interface FrameworkSectionProps {

  data:{ data:{  name: string,
    slug: string,
    client: string,
    sector: string,
    status: boolean;
    consultant: string,
    location: string,
    thumbnail: string,
    thumbnailAlt: string,
    coverPhoto: string,
    coverPhotoAlt: string,
    title: string,
    description: string,
    metaTitle: string,
    metaDescription: string,
    featuredProject: true  }[];
  }}

const Index: React.FC<FrameworkSectionProps> = ({ data }) => {
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
  const {data: locationData} = useSWR(`/api/admin/location`, fetcher)
  const {data: sectorData} = useSWR(`/api/admin/sector`, fetcher)
  return (
    <>
      <ProjectList data={data.data}  locationData={locationData} sectorData={sectorData}/>

    </>
  )
}

export default Index