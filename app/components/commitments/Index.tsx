import React from 'react'
import Built from './Built'
import Health from './Health'
import Investing from './Investing'
import InnerBanner from '../common/InnerBanner'
import { assets } from '@/public/assets/assets'

const Index = () => {
  return (
    <>
    <InnerBanner pageTitle={"Our Commitments"} bannerBg={assets.servicesbnr} />
    <Built/>
    <Health/>
    <Investing/>
    </>
  )
}

export default Index