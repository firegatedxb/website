import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Accreditation from './Accreditation'
import InnerBanner from '../common/InnerBanner'
import { assets } from '@/public/assets/assets'

const Index = () => {
  return (
    <>
    <InnerBanner pageTitle={"our partners"} bannerBg={assets.partnerbnr} />
    <Header/>
    <Contents/>
    <Accreditation/>
    </>
  )
}

export default Index