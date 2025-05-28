import React from 'react'
import HeroSlider from './section/HeroSlider'
import AboutCompany from './section/AboutCompany'
import TechnologyPartners from './section/TechnologyPartners'
import OurServices from './section/OurServices'
import OurSystems from './section/OurSystems'
import Certifications from './section/Certifications'
import LetsCollaborate from './section/LetsCollaborate'
import FeaturedProjects from './section/FeaturedProjects'

import { Home, Partners } from '@/public/types/Common';

const Index = async ({ data, pdata }: { data: Home , pdata: Partners }) => {
  return (
   <>
      <HeroSlider data={data} />
      <AboutCompany data={data} />
      <TechnologyPartners data={data} pdata={pdata}/>
      <OurServices data={data} />
      <OurSystems data={data} />
      <Certifications data={data} pdata={pdata} />
      <FeaturedProjects data={data}   />
      <LetsCollaborate data={data}/>
   </>
  )
}

export default Index