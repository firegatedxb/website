import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Accreditation from './Accreditation'
import InnerBanner from '../common/InnerBanner'
import { Home, Partners } from '@/public/types/Common';

const Index = async ({ data , homedata }: { data: Partners , homedata: Home }) => {
  return (
    <>
      <InnerBanner data={data} />
    <Header data={data} />
    <Contents data={data} />
    <Accreditation data={data} homeData={homedata} />
    </>
  )
}

export default Index