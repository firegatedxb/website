import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Accreditation from './Accreditation'
import InnerBanner from '../common/InnerBanner'
import { Partners } from '@/public/types/Common';

const Index = async ({ data }: { data: Partners }) => {
  return (
    <>
      <InnerBanner data={data} />
    <Header data={data} />
    <Contents data={data} />
    <Accreditation data={data} />
    </>
  )
}

export default Index