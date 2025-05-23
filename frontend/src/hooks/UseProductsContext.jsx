import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

export const useProductsContext = ()=>{
  const context = useContext(ProductContext)

  if(!context){
    throw Error('useProductsContext must be used inside a ProductContextProvider')
  }
  
  return context
}