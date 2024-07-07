import React from 'react';
import '../App.css';
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
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
            <div className='min-h-[75vh] bg-[#dedede] pt-16'>
                <div className='text-center mx-auto pt-8 text-3xl font-bold'><h1>Get in touch</h1></div>
                <div className='flex gap-3 justify-between py-10 px-10 max-md:flex-col-reverse items-center'>
                    <div className='w-[70vw] h-[75vh]'>
                        <h1 className='text-center text-2xl pt-5 pb-10 max-md:text-xl'>Contact Information</h1>
                        <div className='pt-4'>
                            <div className='space-y-20 max-w-[20vw] max-md:max-w-[60vw]  mx-auto'>
                                <div className='space-y-3'>
                                    <p className='font-light text-center'>kittipakorn1234@gmail.com</p>
                                    <p className='font-light text-center'>(+66) 0987824363</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='font-bold text-center text-xl'>Address</h1>
                                    <p className='font-light text-center'>151 Moo.8, Khok chamrae, Thung si udom, Ubonratchathani 34160</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='font-bold text-center text-xl'>Social Media</h1>
                                    <ul className='flex gap-5 pt-2 pb-16 mx-auto justify-center'>
                                        <li><a href="https://www.facebook.com/kittipakornseenak/"><svg className='w-7' fill="#3B98EE" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#3B98EE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg></a></li>
                                        <li><a href="https://www.instagram.com/kittmkrn_/"><svg className='w-7' fill="#3B98EE" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></g></svg></a></li>
                                        <li><a href="https://github.com/Kittipakorn"><svg className='w-7' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#3B98EE" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"></path></g></svg></a></li>
                                        <li><a href="#"><img src="./fastwork.png" className='min-h-7 max-h-7 min-w-7' alt="Fastwork" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[90vw] pb-5 pt-2 bg-[#f3f3f3] rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-solid border-[rgba(255,255,255,0.23)];'>
                            <h1 className='text-center text-2xl pb-2 pt-2'>Send a message</h1>
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
                                    <div><button type="submit" className='w-[50vw] max-md:w-[80vw] text-white hover:bg-[#388bd8] bg-[#3B98EE] px-5 py-2 rounded-full font-light cursor-pointer '>Send Message</button></div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
