import React from 'react';
import './Products.css'
import trash from '../../assets/delete.png'
import { useProductsContext } from '../../hooks/UseProductsContext';
import { useAuthContext } from '../../hooks/UseAuthContext';

const Product = ({product}) => {
  const {user} = useAuthContext();

  const { dispatch } = useProductsContext()
  const handleClick = async()=>{
    if(!user){
      return
    }
    const response = await fetch(`http://localhost:3000/api/products/${product._id}`, 
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
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