/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
   // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async() => {
      try {
         const res = await fetch("/api/products");
      const data =  await res.json();
      setProducts(data)
      console.log(data)
      } catch (err) {
        setErrors(err)
      }
     
    }
    fetchProducts()
  },[])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useContextProduct = () => {
    return useContext(ProductContext)
}