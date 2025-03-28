import Banner from '@/components/Banner'
import BestsalerSection from '@/components/BestsalerSection'
import JewellerySection from '@/components/JewellerySection'
import JewelryCarousel from '@/components/JewelryCarousel'
import Services from '@/components/Services'
import Showcase from '@/components/Shocase'
import React from 'react'
import banner from "/assets/Images/slider/side3.png";


const Home = () => {
  return (
    <div className='container-fluid overflow-hidden'>
      <JewelryCarousel/>
      <JewellerySection/>
      <Showcase/>
      <Banner src={banner}/>
      <BestsalerSection/>

    </div>
  )
}

export default Home
