import React from 'react'
import HeroSlider from './section/HeroSlider'
import AboutCompany from './section/AboutCompany'
import TechnologyPartners from './section/TechnologyPartners'
import OurServices from './section/OurServices'
import OurSystems from './section/OurSystems'
import Certifications from './section/Certifications'
import LetsCollaborate from './section/LetsCollaborate'
import Footer from './section/Footer'
import FeaturedProjects from './section/FeaturedProjects'

const Index = () => {
  return (
   <>
      <HeroSlider />
      <AboutCompany />
      <TechnologyPartners />
      <OurServices />
      <OurSystems />
      <Certifications />
      <FeaturedProjects />
      <LetsCollaborate />
      <Footer />
   </>
  )
}

export default Index