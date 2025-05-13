import React from 'react'
import './Products.css'
const Product = ({product}) => {
  return (
    <div className='product'>
      <h4>{product.name}</h4>
      <p><span>Description: </span>{product.description}</p>
      <p><span>Price: </span>{product.price}</p>
    </div>
  )
}

export default Product