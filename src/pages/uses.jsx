import React from 'react';
import '../App.css';
import { useEffect } from "react";

function Uses() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const UsesData = [
        {
            "image": "https://helloklyk.com/cdn/shop/files/M1-MacBook-Air-renewed_1200x.png?v=1689608158",
            "name": "Apple Macbook Air M1 13” (2020)",
            "p1" : "8-Core CPU",
            "p2" : "7-Core GPU",
            "p3" : "8 GB Unified Memory",
            "p4" : "256 GB SSD Storage",
        },
        {
            "image": "https://media-cdn.bnn.in.th/11746/Apple-iPhone-12-White-1-square_medium.jpg",
            "name": "Apple iPhone 12 (White)",
            "p1" : "A14 Bionic chip",
            "p2" : "64GB",
            "p3" : "Super Retina XDR display",
            "p4" : "iOS 18(Beta)",
        },
        {
            "image": "https://media-cdn.bnn.in.th/140774/iPad_10.2_inch_Wi-Fi_Silver_3-square_medium.jpg",
            "name": "Apple iPad 9 (2021) Wi-Fi 10.2 Silver",
            "p1" : "A13 Bionic chip",
            "p2" : "64GB",
            "p3" : "Retina display",
            "p4" : "iOS 17.5.1",
        },
        {
            "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
            "name": "Apple AirPods (3rd generation)",
            "p1" : "MagSafe Charging Case",
            "p2" : "Spatial Audio",
        }
    ];
    return (
        <>
            <div className='min-h-[85vh] bg-[#dedede] pt-16'>
                <div className='text-center mx-auto pt-8 text-3xl font-bold'><h1>Uses</h1></div>
                <div className='p-10'>
                    <div className='flex flex-col space-y-10 items-center'>
                        {UsesData.map((item, idx) => (
                            <div className='flex w-[85vw] py-5 px-5 rounded-2xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] max-md:justify-center'>
                                <div className='flex max-md:flex-col md:space-x-10 md:pl-10 max-md:justify-center'>
                                    <img src={item.image} alt={item.name} className='w-[150px] my-10 max-md:mx-auto' />
                                    <div className='flex flex-col max-md:text-center'>
                                        <p className='font-bold text-2xl pb-3 pt-5'>{item?.name}</p>
                                        <p>{item?.p1}</p>
                                        <p>{item?.p2}</p>
                                        <p>{item?.p3}</p>
                                        <p>{item?.p4}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Uses;
