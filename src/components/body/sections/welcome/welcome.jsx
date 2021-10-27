import React,{useEffect, useRef, useState} from 'react';
import Typed from 'typed.js';
// import {Swiper, SwiperSlide} from 'swiper/react'


import svgLaptops from '../../../../assets/img/laptopHp10.png'
import videoBacground from '../../../../assets/img/videoBackground.mp4'
import './welcome.css'

const Welcome =()=>{

    const el  = useRef();
    const typed = useRef()

    useEffect(() => {
    
       const options ={
        strings:[
            'Venta de laptops HP',
            'Venta de laptops Dell',
            'Venta de laptops Asus',
            'Soporte técnico',
        ],
        typedSpeed:90,
        backSpeed:60,
        loop:true,
        start:true
        // loopCount:Infinity
       }

       typed.current = new Typed(el.current, options);
    
       return () => {

         typed.current.destroy()}
    }, []);

    return (
        <>
            <div id="content-welcome" className="relative pt-24 lg:p-0 sm:h-screen">
                {/* <video className="invisible lg:visible video-background" src={videoBacground} controls="controls" preload="true" autoplay="true" loop="loop" muted="muted" volume="0"></video> */}
                <div className="h-full w-full relative grid grid-cols-1 lg:grid-cols-2 justify-items-center ">

                    <div className="type-wrap py-10 sm:py-0  text-left my-auto w-full  relative  mx-10">
                        <span className="text-white font-extrabold text-3xl sm:text-5xl lg:text-5xl text-left" style={{ whiteSpace: 'pre' }} ref={el} />
                    </div>

                    <div className="relative  w-full sm:w-3/5 lg:w-full h-80  my-auto bg-gray-900">
                        <div className="laptops-show bg-indigo-800 absolute ">
                            <img src={svgLaptops} className="w-60 bg-red-900 lg:w-full h-40 my-auto "  alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Welcome;