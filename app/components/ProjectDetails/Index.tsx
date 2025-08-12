import React from 'react'
import PjtBanner from './PjtBanner'
import Scope from './Scope'
import RelatedProjects from './RelatedProjects'
import { Project } from '@/public/types/Project';



const Index = async ({data}:{data:Project}) => {
  // const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
  // const {data:allProjects} = useSWR(`/api/admin/project`, fetcher)
   const response = await fetch(`${process.env.BASE_URL}/api/admin/project`, { next: { revalidate: 60 } });
  const {data:allProjects} = await response.json();
  return (
    <>
      <PjtBanner data={data}/>
      <Scope data={data}/>
      <RelatedProjects data={allProjects} sector={data?.data?.sector} pjtname={data?.data?.name}/>
    </>
  )
}

export default Index