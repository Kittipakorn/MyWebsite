import React from 'react'

function Btm() {
  return (
    <nav className='bg-black p-5'>
      <div className="flex items-center justify-between p-3">
        <ul className='flex space-x-7 items-center text-sm mx-auto pb-3'>
          <li><a href="#" className='text-[#395682] hover:text-[#3B98EE]'>Home</a></li>
          <li><a href="#" className='text-[#395682] hover:text-[#3B98EE]'>Portfolio</a></li>
          <li><a href="#" className='text-[#395682] hover:text-[#3B98EE]'>Uses</a></li>
          <li><a href="#" className='text-[#395682] hover:text-[#3B98EE]'>Contact</a></li>
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