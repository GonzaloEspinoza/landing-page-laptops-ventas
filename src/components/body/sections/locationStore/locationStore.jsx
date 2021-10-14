import React, { useState, useEffect } from 'react'
import './locationStore.css'
import storePhoto from '../../../../assets/img/storePhoto2.jpg'

const LocationStore = () => {

    

    return (
        <>
            <div className="bg-gray-800 mx-auto relative ">

                <div className="py-10" >
                    <h1 className="text-gradient text-white font-extrabold text-left text-3xl mx-4"></h1>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 my-1 mx-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <h5 className="text-indigo-300 font-bold">Estamos en la ciudad de Potosi Av. Antofagasta N° 602</h5>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1879.5029245861826!2d-65.75926297973963!3d-19.584250092204993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-19.5835108!2d-65.7594234!4m3!3m2!1d-19.5835147!2d-65.7594293!5e0!3m2!1sen!2sbo!4v1633383010612!5m2!1sen!2sbo" 
                width="100%" height="400"  allowfullscreen="" loading="lazy"></iframe>
                <div className="w-80 h-80 my-4">
                    <img src={storePhoto}  alt="" />
                </div>
            </div>
        </>
    )
}

export default LocationStore;