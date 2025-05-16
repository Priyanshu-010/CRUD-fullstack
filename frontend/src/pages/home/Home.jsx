import React, { useEffect } from 'react'

import './Home.css'
import Product from '../../components/products/Product.jsx'
import ProductsForm from '../../components/productsForm/ProductsForm.jsx'
import { useProductsContext } from '../../hooks/UseProductsContext.jsx'
import { useAuthContext } from '../../hooks/UseAuthContext.jsx'

const Home = () => {
  const {user} = useAuthContext();

  // const [products, setProducts] = useState(null)
  const {products, dispatch} = useProductsContext();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products',{
          headers:{
            'Authorization': `Bearer ${user.token}`
          }
        })
        const data = await response.json()

        if (response.ok) {
          dispatch({type: 'SET_PRODUCTS', payload: data})
        } else {
          console.log("Error response:", data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    if(user){
      fetchProducts()
    }
  }, [products, dispatch, user])
  return (
    <div className="home">
      <div className='products'>
        <div className="products-list">
          {products && products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
          <ProductsForm />
      </div>
    </div>
  )
}

export default Home