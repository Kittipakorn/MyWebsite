import React from 'react';
import '../App.css';
import { useEffect } from "react";

function Test() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className='bg-[#dedede] m-auto text-center pt-20'><h1 className='text-3xl font-bold'>About Me</h1></div>
      <div className='flex bg-[#dedede]'>
        <div className='flex px-10 pt-5 float-end max-md:flex-col max-md:px-5'>
          <img src="./kittipakorn.png" className=' m-auto bottom-0' alt="Body" />
          <div className='p-10'>
            <h1 className='text-[#3B98EE] text-4xl pb-6 font-bold'>Kittipakorn Seenak</h1>
            <p className='text-[#5e5e5e] pl-3'>I was born and raised in Ubon ratchathani, Thailand. Growing up, I developed a keen interest in technology and design, which led me to pursue a career in these fields. Currently, I am studying Science-Math at Benchama Maharat school, and I have had the opportunity to work on various projects that have honed my skills in web development, graphic design, and video creation.</p>
            <h2 className='text-[#464646] text-2xl pt-10 font-bold'>Skills :</h2>
            <div className='pl-3'>
              <p className='text-[#5e5e5e]'>Web development (HTML, CSS, JavaScript, etc.)</p>
              <p className='text-[#5e5e5e]'>Programming (Swift, JavaScript, C/C++, Python)</p>
              <p className='text-[#5e5e5e]'>Social Skills: Teamwork, communication, time management</p>
            </div>
            <h2 className='text-[#464646] text-2xl pt-10 font-bold'>Interests and Hobbies :</h2>
            <p className='text-[#5e5e5e] pl-3'>When I'm not studying or working on projects, I enjoy exploring new technologies, designing user interfaces, and creating engaging content for social media platforms. I am also passionate about photography and videography, which allows me to capture moments and tell stories through visuals.</p>
            <h2 className='text-[#464646] text-2xl pt-10 font-bold'>Contact :</h2>
            <p className='text-[#5e5e5e] pl-3'>Email: kittipakorn1234@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;