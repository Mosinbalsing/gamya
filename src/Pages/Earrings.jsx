import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/resource'
import React from 'react'

const Earrings = () => {
  return (
    <div className='container-fluid'>
      <h1>Earrings</h1>
      <ProductGrid allproducts={products.Earrings}/>
    </div>
  )
}

export default Earrings
