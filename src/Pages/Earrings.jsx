import Banner from '@/components/Banner'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/resource'
import React from 'react'
import banner from '/assets/Images/banner/errings.png'
const Earrings = () => {
  return (
    <div className='container-fluid'>
      <Banner src={banner} title='Earrings'/>
      <ProductGrid allproducts={products.Earrings}/>
    </div>
  )
}

export default Earrings
