import React from 'react'
import { Link } from 'react-router-dom'

function Btm() {
  return (
    <nav className='bg-black p-5'>
      <div className="flex items-center justify-between p-3">
        <ul className='flex space-x-7 items-center text-sm mx-auto pb-3'>
            <li><Link to="//" className='text-[#1C3253] hover:text-[#3B98EE]'>Home</Link></li>
            <li><Link to="/about" className='text-[#1C3253] hover:text-[#3B98EE]'>About</Link></li>
            <li><Link to="/portfolio" className='text-[#1C3253] hover:text-[#3B98EE]'>Portfolio</Link></li>
            <li><Link to="/uses" className='text-[#1C3253] hover:text-[#3B98EE]'>Uses</Link></li>
            <li><Link to="/contact" className='text-[#1C3253] hover:text-[#3B98EE]'>Contact</Link></li>
        </ul>
      </div>
      <hr class="border-slate-500 p-3"></hr>
      <div>
        <p className='text-[#A7A7A7] text-sm text-center pt-3'>Copyright © 2024 Kittipakorn Seenak. All rights reserved.</p>
      </div>
    </nav>
  )
}

export default Btm