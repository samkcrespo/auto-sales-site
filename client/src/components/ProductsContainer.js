import React from 'react'
import ProductCard from './ProductCard'

function ProductsContainer({products}) {
  return (
    <div>
      <h3>Available Vehicles</h3>
        {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />
        })}
      </div>
  )
}

export default ProductsContainer