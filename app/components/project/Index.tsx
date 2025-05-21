"use client"
import React from 'react'
import ProjectList from './ProjectList'

interface FrameworkSectionProps {

  data:{ data:{  name: string,
    slug: string,
    client: string,
    sector: string,
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

  return (
    <>
      <ProjectList data={data.data} />

    </>
  )
}

export default Index