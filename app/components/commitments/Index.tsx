import React from 'react'
import Built from './Built'
import Health from './Health'
import Investing from './Investing'
import InnerBanner from '../common/InnerBanner'
import { Commitments } from '@/public/types/Common';


const Index = async ({ data }: { data: Commitments }) => {

  return (
    <>
    <InnerBanner data={data}  />
    <Built data={data} />
    <Health/>
    <Investing/>
    </>
  )
}

export default Index