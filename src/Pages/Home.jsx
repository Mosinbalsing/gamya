import Banner from '@/components/Banner'
import BestsalerSection from '@/components/BestsalerSection'
import JewellerySection from '@/components/JewellerySection'
import JewelryCarousel from '@/components/JewelryCarousel'
import NewsLetter from '@/components/NewsLetter'
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
      <Banner/>
      <BestsalerSection/>
      <NewsLetter/>
    </div>
  )
}

export default Home
