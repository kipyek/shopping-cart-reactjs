import ProductCard from '../../components/ProductCard';
import { useContextProduct } from '../../context/productContext';

const HomePage =() =>{
const {products} = useContextProduct()
console.log(products)
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