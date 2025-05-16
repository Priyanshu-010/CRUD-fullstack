import React from 'react'
import { useAuthContext } from './UseAuthContext'
import { useProductsContext } from './UseProductsContext'

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: productsDispatch } = useProductsContext(); 
  // The ":" colon thing above is used for calling the dispatch function wiht ither name as we already have a variable above it named dispatch
  const logout = ()=>{
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
    productsDispatch({type: 'SET_PRODUCTS', payload: null})
  }
  return {logout}   
}


export default useLogout