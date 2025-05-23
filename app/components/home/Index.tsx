import React from 'react'
import HeroSlider from './section/HeroSlider'
import AboutCompany from './section/AboutCompany'
import TechnologyPartners from './section/TechnologyPartners'
import OurServices from './section/OurServices'
import OurSystems from './section/OurSystems'
import Certifications from './section/Certifications'
import LetsCollaborate from './section/LetsCollaborate'
import FeaturedProjects from './section/FeaturedProjects'

import { Home } from '@/public/types/Common';

const Index = async ({ data }: { data: Home }) => {
  return (
   <>
      <HeroSlider data={data} />
      <AboutCompany data={data} />
      <TechnologyPartners data={data} />
      <OurServices data={data} />
      <OurSystems data={data} />
      <Certifications data={data} />
      <FeaturedProjects data={data}   />
      <LetsCollaborate data={data}/>
   </>
  )
}

export default Index