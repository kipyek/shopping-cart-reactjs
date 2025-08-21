import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';

const HomePage =() =>{
  const [products, setProducts] = useState([]);
  const [_, setErrors] = useState(null)
  useEffect(() => {
    const fetchProducts = async() => {
      try {
         const res = await fetch("http://localhost:3000/products");
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
    <div className='max-w-6xl mt-4 mx-auto px-4 py-2'>
        <h1 className="text-2xl font-bold">💰 Product Catalogue</h1>
        <div className='grid mt-2 gap-6 md:grid-cols-3'>
          {products.map((product) =>(
          <ProductCard key={product.id} product={product} />
        ))} 
        </div>
       
       
    </div>
  )
}

export default HomePage