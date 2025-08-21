import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className='flex sticky bg-white py-3 items-center justify-between'>
        <span className='text-lg font-bold text-green-400 px-4'>ShopMe</span>
        <FiShoppingCart className='mx-4 text-2xl text-green-700'/>
    </div>
  )
}

export default Header