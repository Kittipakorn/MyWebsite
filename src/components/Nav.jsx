import React from 'react';
import '../App.css';
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className='bg-black p-3'>
        <div className="flex items-center justify-between p-1 ">
          <Link to="/">
            <div className='flex'>
              <img src="./Face.png" className='items-center w-7' alt="Face" />
              <p className='text-white font-Playwrite text-md'>Kittipakorn</p>
            </div>
          </Link>
          <ul className='flex space-x-7 items-center text-base pr-10'>
            <li><Link to="/" className='text-[#1C3253] hover:text-[#3B98EE]'>Home</Link></li>
            <li><Link to="/about" className='text-[#1C3253] hover:text-[#3B98EE]'>About</Link></li>
            <li><Link to="/portfolio" className='text-[#1C3253] hover:text-[#3B98EE]'>Portfolio</Link></li>
            <li><Link to="/contact" className='text-[#1C3253] hover:text-[#3B98EE]'>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
