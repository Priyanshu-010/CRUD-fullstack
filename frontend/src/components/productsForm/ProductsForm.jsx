import React, { useState } from 'react'
import './ProductsForm.css'
import { useProductsContext } from '../../hooks/UseProductsContext';
import { useAuthContext } from '../../hooks/UseAuthContext';

const ProductsForm = () => {
  const { dispatch } = useProductsContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null)
  const {user} = useAuthContext();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!user){
      setError('You must be logged in');
      return
    }
    const newProduct = {name, description, price};
    const response = await fetch('http://localhost:3000/api/products', 
      {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`    
        }
      })
      const data =await response.json();
      if(!response.ok){
        setError(data.message);
      }
      if(response.ok){
        setName('');
        setDescription('');
        setPrice('');
        setError(null);
        console.log(data._id)
        dispatch({type: 'CREATE_PRODUCTS', payload: data})
      }
  }
  return (
    <form className='form'>
      <h2>Add a new Product</h2>
      <label htmlFor="name">Name</label>
      <input 
      type="text" 
      name="name" 
      onChange={(e) => setName(e.target.value)} 
      value={name} 
      />
      <label htmlFor="description">Description</label>
      <input 
      type="text" 
      name="Description" 
      onChange={(e) => setDescription(e.target.value)} 
      value={description} 
      />
      <label htmlFor="price">Price</label>
      <input 
      type="number" 
      name="price" 
      onChange={(e) => setPrice(e.target.value)} 
      value={price} 
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default ProductsForm