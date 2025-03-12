import Banner from '@/components/Banner'
import React from 'react'
import banner from '/assets/Images/banner/aboutbanner.png'
import Services from '@/components/Services'
import ExquisiteJewelry from '@/components/ExquisiteJewelry'
import FeaturesSection from '@/components/features-section'
import FAQSection from '@/components/faq-section'
import AboutSection from '@/components/about-section'
import ClickSpark from '@/components/ClickSpark/ClickSpark'
const About = () => {
  return (
  
    <div className='container-fluid overflow-hidden'>
      <Banner src={banner}/>
      <div class="flex flex-col items-center text-center py-10">
    <div class="mb-4">
        <svg class="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        </svg>
    </div>
    <h1 class="text-4xl font-serif font-bold mb-6">Where It All Began</h1>
    <p class="max-w-2xl text-gray-600">
        Aenean imperdiet. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Vestibulum fringilla pede sit amet augue. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce fermentum odio nec arcu. Suspendisse fauci...
    </p>
</div>
      <FeaturesSection/>
      <AboutSection/>
      <FAQSection/>
    </div>
   
  )
}

export default About
