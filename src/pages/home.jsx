import React from 'react';
import { useEffect } from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const Data = [
        {
            "image": "https://img5.pic.in.th/file/secure-sv1/IMG_0237.jpg",
            "name": "The 20th Thailand Olympiad in Informatics",
        },
        {
            "image": "https://img5.pic.in.th/file/secure-sv1/349312172_1029047921791703_815010773916625483_n.jpg",
            "name": "The 19th Thailand Olympiad in Informatics",
        },
    ]
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c4b3251a-78fc-4a66-bc7a-da057f35b602");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className='bg-black min-h-[60vh] pt-16'>
                <div className='flex max-md:flex-col-reverse items-center'>
                    <div className='pl-10 m-auto max-w-3xl'>
                        <div className='flex gap-2'>
                            <p className='text-[#A7A7A7] text-xl'>Hey, I'm </p>
                            <p className='text-[#3B98EE] text-xl'>Kittipakorn</p>
                        </div>
                        <div className='flex gap-3'>
                            <h1 className='text-[#3B98EE] text-4xl max-md:text-3xl'>Student, Software developer, Graphic designer, and Video creator </h1>
                        </div>
                        <p className='text-[#A7A7A7] text-2xl max-md:text-xl pt-2 font-light'>I am a student, software developer, graphic designer, and video creator with a passion for design and technology.</p>
                        <h2 className='text-[#A7A7A7] pt-6 font-light'>kittipakorn1234@gmail.com</h2>
                        <ul className='flex gap-5 pt-2 pb-16'>
                            <li><a href="https://www.facebook.com/kittipakornseenak/"><svg className='w-7' fill="#3B98EE" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#3B98EE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg></a></li>
                            <li><a href="https://www.instagram.com/kittmkrn_/"><svg className='w-7' fill="#3B98EE" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></g></svg></a></li>
                            <li><a href="https://github.com/Kittipakorn"><svg className='w-7' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#3B98EE" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"></path></g></svg></a></li>
                            <li><a href="#"><img src="./fastwork.png" className='w-7' alt="Fastwork" /></a></li>
                        </ul>
                    </div>
                    <div className='pt-20 max-md:w-[50vw]'><img src="./body.png" alt="Body" className='w-96' /></div>
                </div>
            </div>
            <div className='flex bg-[#dedede]'>
                <div className='md:flex px-10 pt-20 float-end max-md:px-5'>
                    <img src="./bodyAvatar.png" className=' m-auto bottom-0' alt="Body" />
                    <div className='p-10'>
                        <h1 className='text-[#3B98EE] text-4xl pb-6 font-bold'>Kittipakorn Seenak</h1>
                        <p className='text-[#5e5e5e] pl-3'>I was born and raised in Ubon ratchathani, Thailand. Growing up, I developed a keen interest in technology and design, which led me to pursue a career in these fields. Currently, I am studying Science-Math at Benchama Maharat school, and I have had the opportunity to work on various projects that have honed my skills in web development, graphic design, and video creation.</p>
                        <div className='py-5 pt-10'>
                            <Link to="/about" className='text-white hover:bg-[#388bd8] bg-[#3B98EE] px-5 py-2 rounded-full font-light'>About Me</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-[#dedede] p-10 max-md:p-5'>
                <h1 className='text-[#3e3e3e] text-4xl pb-6 text-center font-bold'>Portfolio</h1>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 justify-center'>
                    {Data.map((item) =>
                        <div className='flex flex-col bg-white rounded-2xl hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
                            <img src={item.image} className='h-[25vh] max-md:my-auto object-contain' alt={item.name} />
                            <h1 className='text-center text-xl font-bold py-5 pt-10'>{item.name}</h1>
                        </div>
                    )}
                </div>
                <div className='mx-auto pt-7'>
                    <Link to="/portfolio" className='text-[#388bd8] hover:text-[#22598c] font-light text-center text-l'>Learn More &gt;</Link>
                </div>
            </div>
            <div className='flex flex-col bg-[#dedede] p-10 max-md:p-5'>
            <h1 className='text-[#3e3e3e] text-4xl pb-6 text-center font-bold'>Get in touch</h1>
                <div className='flex flex-col mx-auto w-[60vw] max-md:w-[90vw] pb-5 pt-2 bg-[#f3f3f3] rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-solid border-[rgba(255,255,255,0.23)];'>
                    <h1 className='text-center text-2xl pb-2 pt-2'>Say hello!</h1>
                    <div className='px-5'>
                        <form onSubmit={onSubmit} className='flex flex-col space-y-4'>
                            <div className='flex flex-col gap-2'>
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Name" className='block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label for="mail">Email</label>
                                <input type="text" id="mail" name="mail" placeholder="Email" className='block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label for="message">Message</label>
                                <textarea type="text" id="message" name="message" placeholder="Message" className='block rounded-md border-0 w-[100%] min-h-52 max-md:min-h-48 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 resize-none'></textarea>
                            </div>
                            <div className='flex justify-center'><button type="submit" className='w-[55vw] max-md:w-[80vw] text-white hover:bg-[#388bd8] bg-[#3B98EE] px-5 py-2 rounded-full font-light cursor-pointer '>Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;
