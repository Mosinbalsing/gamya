import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/resource'
import React from 'react'

const Necklaces = () => {
  return (
    <div className='container-fluid'>
      <h1>Necklaces</h1>
      <ProductGrid allproducts={products.Necklace}/>
    </div>
  )
}

export default Necklaces
