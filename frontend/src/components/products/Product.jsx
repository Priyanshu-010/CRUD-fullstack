import React from 'react';
import './Products.css'
import trash from '../../assets/delete.png'
import { useProductsContext } from '../../hooks/UseProductsContext';

const Product = ({product}) => {

  const { dispatch } = useProductsContext()
  const handleClick = async()=>{
    const response = await fetch(`http://localhost:3000/api/products/${product._id}`, 
      {method: 'DELETE'})
    .then(console.log("Product deleted"))
    const data = response.json()
    if(response.ok){
      dispatch({type: 'DELETE_PRODUCTS', payload: data})
    }
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