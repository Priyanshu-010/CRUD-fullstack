import React, { useEffect, useState } from 'react'

import './Home.css'
import Product from '../../components/products/Product.jsx'

const Home = () => {

  const [products, setProducts] = useState(null)
  useEffect(()=>{
    const fetchProducts = async () =>{
      try {
        const response = await  fetch('http://localhost:3000/api/products')
        const data = await response.json()

        if(response.ok){
          setProducts(data);
        } else {
          console.log("Error response:", data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <div className='home'>
      <div className="products">
        {products && products.map((product)=>(
          <Product key={product._id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home