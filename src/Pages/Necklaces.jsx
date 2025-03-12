import Banner from '@/components/Banner'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/resource'
import React from 'react'
// import gif from '/assets/gif/wedding.gif'
const Necklaces = () => {
  return (
    <div className='container-fluid overflow-hidden'>
      {/* <Banner src={gif} title='Necklaces' /> */}
        <ProductGrid allproducts={products.Necklace}/>
    </div>
  )
}

export default Necklaces
