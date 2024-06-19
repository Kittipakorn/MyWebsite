import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Contact() {
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
            <div className='min-h-[75vh] bg-[#dedede]'>
                <div className='text-center mx-auto pt-8 text-3xl font-bold'><h1>Get in touch</h1></div>
                <div className='flex gap-3 justify-between py-10 px-10'>
                    <div className='w-[70vw]'>
                        <div className='pt-4'>
                            <div className='space-y-20 max-w-[30vw] mx-auto'>
                                <div className='space-y-3'>
                                    <h1 className='font-bold text-center text-xl'>Our Address</h1>
                                    <p className='font-light text-center'>Benchama Maharat School 600 Sunpasit Amphoemuang Ubonratchathani 34000</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='font-bold text-center text-xl'>Our Address</h1>
                                    <p className='font-light text-center'>Benchama Maharat School 600 Sunpasit Amphoemuang Ubonratchathani 34000</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='font-bold text-center text-xl'>Our Address</h1>
                                    <p className='font-light text-center'>Benchama Maharat School 600 Sunpasit Amphoemuang Ubonratchathani 34000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[90vw] h-[71vh] bg-[#f3f3f3] rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.4px] border border-solid border-[rgba(255,255,255,0.23)];'>
                        <div className='pt-4'>
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
                                        <textarea type="text" id="message" name="message" placeholder="Message" className='block rounded-md border-0 w-[100%] min-h-56 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 resize-none'></textarea>
                                    </div>
                                    <div><button type="submit" className='w-[50vw] text-white hover:bg-[#388bd8] bg-[#3B98EE] px-5 py-2 rounded-full font-light cursor-pointer '>Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
