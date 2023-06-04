'use client'

import {BiCart} from 'react-icons/bi';

const Cart = () => {
  return (
    <button className='p-1 relative px-4 mx-2 hover:border-b hover:border-black transition-all duration-100'>
        <BiCart size={18}/>
        <div className="absolute block rounded-full bg-black top-[-2px] right-[-2px] h-4 w-4">
          <p className='text-white text-xs block h-4 px-1'>1</p>
        </div>
    </button>
  )
}

export default Cart