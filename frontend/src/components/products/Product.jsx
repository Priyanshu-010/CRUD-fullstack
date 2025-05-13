import React from 'react';
import './Products.css'
import trash from '../../assets/delete.png'

const Product = ({product}) => {

  const handleClick = async()=>{
    await fetch(`http://localhost:3000/api/products/${product._id}`, {method: 'DELETE'})
    .then(console.log("Product deleted"))
  }
  return (
    <div className='product'>
      <h4>{product.name}</h4>
      <p><span>Description: </span>{product.description}</p>
      <p><span>Price: </span>{product.price}</p>
      <button className='delete' onClick={handleClick}>
        <img src={trash} className='trash'/>
      </button>
    </div>
  )
}

export default Product