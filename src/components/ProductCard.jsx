import React from 'react'
import { useContextCard } from '../context/cartContext'

const ProductCard = ({ product }) => {
    const { cart, onAdd } = useContextCard();
    console.log(cart)
    return (
        <div className='p-4 bg-white rounded-lg shadow-lg'>
            <img src={product.image} alt='nothing' className='h-60 w-full mb-2 rounded-t-lg object-cover' />
            <h1 className="text-lg font-bold">{product.name}</h1>
            <h3 className='text-sm text-gray-400 my-1'>{product.description}</h3>
            <span className='text-lg font-bold'>KES {(product.price).toLocaleString()}</span>
            <div className='my-2'>
                <button
                    onClick={onAdd}
                    className='bg-green-500 cursor-pointer w-full py-2 px-6 text-center text-white font-bold rounded-md transition hover:bg-green-600'
                >
                    Add to Cart
                </button>
            </div>

        </div>
    )
}

export default ProductCard