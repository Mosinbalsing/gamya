import BestsalerSection from '@/components/BestsalerSection'
import JewellerySection from '@/components/JewellerySection'
import JewelryCarousel from '@/components/JewelryCarousel'
import Services from '@/components/Services'
import Showcase from '@/components/Shocase'
import React from 'react'

const Home = () => {
  return (
    <div>
      <JewelryCarousel/>
      <Services/>
      <JewellerySection/>
      <Showcase/>
      <BestsalerSection/>
    </div>
  )
}

export default Home
