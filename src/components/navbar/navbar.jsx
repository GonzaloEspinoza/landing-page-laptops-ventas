import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './navbar.css'
import logoImg from '../../assets/img/logo.png'

const Navbar =()=>{

    const location = useLocation();

    const [lastYPost,setLastYPost]=useState(0);
    const [actionScroll, setActionScroll] = useState(true)

    useEffect(() => {
       console.log(location.pathname)
        const showNavbar=()=>{
            setActionScroll(window.scrollY < lastYPost)
            setLastYPost(window.scrollY)
        }
        window.addEventListener('scroll',showNavbar,false)

        console.log(actionScroll)
        return ()=>{
            window.removeEventListener('scroll',showNavbar,false)
        }
    }, [lastYPost]);
    
    // const style=()=>{
    //     if(actionScroll){
    //         return {
    //             backgroundColor: '#180277',
    //             backgroundImage: 'linearGradient(90deg, #180277 0%, #bb00bd 100%)'

    //         }
    //     }
    //     return {
    //         backgroundColor: '#ffffff'
    //     }
    // }

    return(
        <>
            <div className={`navbar flex justify-between w-screen h-16  border-b-1 border-gray-700 ${actionScroll?'styleTop':'styleDow'}`}>
                <div className="flex  justify-center  h-full mx-2 sm:mx-20">
                    <div className="flex justify-center my-auto">
                        <img src={logoImg} width="45" height="45" alt="" />
                    </div>
                    <h1 className="text-2xl font-extrabold my-auto  mx-2">Soft. Evolution Bolivia</h1>
                </div>
            </div>
        </>
    )
}


export default Navbar