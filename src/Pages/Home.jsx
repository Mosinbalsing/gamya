import Banner from '@/components/Banner'
import BestsalerSection from '@/components/BestsalerSection'
import JewellerySection from '@/components/JewellerySection'
import JewelryCarousel from '@/components/JewelryCarousel'
import NewsLetter from '@/components/NewsLetter'
import Services from '@/components/Services'
import Showcase from '@/components/Shocase'
import React from 'react'
import banner from "/assets/Images/slider/side3.png";
import Products from '@/components/Products'

const Home = () => {
  return (
    <div className='container-fluid overflow-hidden'>
      <JewelryCarousel/>
      <Services/>
      <JewellerySection/>
      <Showcase/>
      <Banner src={banner}/>
      <BestsalerSection/>
      <NewsLetter/>
    </div>
  )
}

export default Home
