import React from 'react';
import '../App.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function Portfolio() {
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
        {
            "image": "https://img2.pic.in.th/pic/_DSC1999-2.jpg",
            "name": "Inovation Hackathon camp 2023",
        },
        {
            "image": "https://img5.pic.in.th/file/secure-sv1/imagee62a5357673e1b03.png",
            "name": "E-SAN Thailand Coding & AI Academy ",
        },
        {
            "image": "https://img2.pic.in.th/pic/IMG_2771bb6765d1f5358e23.jpg",
            "name": "AMI Hackathon #3",
        },
        {
            "image": "https://img5.pic.in.th/file/secure-sv1/IMG_0317.jpg",
            "name": "Competitive Programming 2023",
        },
        
    ]


    return (
        <>
            <div className='flex flex-col min-h-[85vh] bg-[#dedede] pt-16 gap-y-10'>
                <div className='text-center mx-auto pt-8 text-4xl font-bold'><h1>Portfolio</h1></div>
                <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 justify-center p-10'>
                    {Data.map((item) =>
                        <div className='flex flex-col bg-white rounded-2xl hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] min-h-[40vh] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'>
                            <img src={item.image} className='h-[25vh] max-md:my-auto object-contain' alt={item.name} />
                                <h1 className='text-center text-xl font-bold py-5 pt-10'>{item.name}</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}


export default Portfolio;
