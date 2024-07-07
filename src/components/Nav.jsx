import React, { useState } from 'react';
import '../App.css';
import { Link, Outlet } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className='fixed top-0 p-3 w-[100vw] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.3px]'>
        <div className="flex items-center justify-between p-1">
          <Link to="/">
            <div className='flex'>
              <img src="./Face.png" className='items-center w-7' alt="Face" />
              <p className='text-white font-Playwrite text-md'>Kittipakorn</p>
            </div>
          </Link>
          <ul className='flex space-x-7 items-center text-base pr-10 max-md:hidden'>
            <li><Link to="//" className='text-[#1C3253] hover:text-[#3B98EE]'>Home</Link></li>
            <li><Link to="/about" className='text-[#1C3253] hover:text-[#3B98EE]'>About</Link></li>
            <li><Link to="/portfolio" className='text-[#1C3253] hover:text-[#3B98EE]'>Portfolio</Link></li>
            <li><Link to="/uses" className='text-[#1C3253] hover:text-[#3B98EE]'>Uses</Link></li>
            <li><Link to="/contact" className='text-[#1C3253] hover:text-[#3B98EE]'>Contact</Link></li>
          </ul>
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            {isMenuOpen ? (
              <svg viewBox="-0.5 0 25 25" fill="none" className=' w-7' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#1C3253" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#1C3253" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className=' w-7' xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#1C3253" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
            )}
          </div>
        </div>
        {isMenuOpen ? (
          <ul className='flex flex-col pr-5 md:hidden space-y-7 py-6'>
            <li className='mx-auto'><Link to="/" className='text-[#1C3253] hover:text-[#3B98EE]'>Home</Link></li>
            <li className='mx-auto'><Link to="/about" className='text-[#1C3253] hover:text-[#3B98EE]'>About</Link></li>
            <li className='mx-auto'><Link to="/portfolio" className='text-[#1C3253] hover:text-[#3B98EE]'>Portfolio</Link></li>
            <li className='mx-auto'><Link to="/uses" className='text-[#1C3253] hover:text-[#3B98EE]'>Uses</Link></li>
            <li className='mx-auto'><Link to="/contact" className='text-[#1C3253] hover:text-[#3B98EE]'>Contact</Link></li>
          </ul>
        ) : null}
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
