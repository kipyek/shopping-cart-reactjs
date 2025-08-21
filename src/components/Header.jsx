import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { useContextCard } from '../context/cartContext';

function Header() {
    const {cart} = useContextCard()
  return (
    <div className='flex sticky bg-white py-3 items-center justify-between'>
        <span className='text-lg font-bold text-green-400 px-4'>ShopMe</span>
        <div className='relative mx-4'>
           <FiShoppingCart className='text-2xl text-green-700'/>
           {cart >0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {cart}
            </span> 
            )}
        </div>
        
          
    </div>
  )
}

export default Header