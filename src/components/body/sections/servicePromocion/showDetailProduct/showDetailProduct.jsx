import React from 'react'
import {motion} from 'framer-motion'
import './showDetailProduct.css'

const ShowDetailProduct=({item, setModalState, modalState})=>{
    
    
    
    return(
        
            modalState?
            <motion.div initial={{x:-500,opacity:0, scale:0.2}} animate={{x:0, opacity:1, scale:1}} style={{background:"#FCFCFC"}} className="content-modal flex flex-center justifay-item-center bg-white">
                <div id="modal-deatail"  className="mt-20 mb-20 bg-red-3 w-full shadow-md  rounded-lg h-auto  mx-auto bg-white">
                <div onClick={()=>setModalState(false)} className="p-1 cursor-pointer flex flex-row-reverse"><svg xmlns="http://www.w3.org/2000/svg" className=" h-7 w-7 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg></div>
                    <div className="">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-green-4 w-full h-full">
                                {/* car img head */}
                                <div className="bg-indigo-4 w-full h-full">
                                    <div className="bg-gray-3 h-full grid justify-items-center justify-center">
                                        <img src={item.urlImage} alt="" className="my-auto" />
                                    </div>
                                </div>

                                {/* card data body */}
                                <div className="grid justify-center justify-items-center  bg-indigo-4 w-full h-full py-10  lg:py-2">
                                <div className="my-auto">
                                <div className="bg-red-4 py-3">
                                        <h1 className='text-2xl font-semibold text-gray-80'>{item?.title}</h1>
                                    </div> 
                                    <div className="py-4">
                                    <h3 className="text-indigo-9">{item?.description}</h3>
                                    </div>
                                    <div className="py-4 ">
                                        <h2 className="text-left font-semibold text-gray-700 mx-4">Especificaiones del producto</h2>
                                        <div id="especificaion-producto" className="content-detail bg-green-5">
                                            <ul className="list-disc list-inside px-4 text-left">
                                                {
                                                    item?.especificacionTecnica.map((d,i)=>{
                                                        return(
                                                            <li>
                                                                {d}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="py-4 mx-4">
                                            <h1 className="text-left text-lg">Precio actual: Bs <strong className="line-through text-xl font-normal">{item?.previusPrice}</strong> </h1>
                                            <h1 className="text-left text-lg">👉 Precio de promoción: Bs <strong className=" text-4xl text-red-600 font-light"> {item?.promotionPrice}</strong></h1>
                                        </div>
                                        <div className="grid justify-center justify-items-center">
                                            <a href={`https://api.whatsapp.com/send?phone=59169651053&text=quiero%20mas%20informacion%20de%20la%20laptop`} target="_blank" className="bg-blue-800 hover:bg-blue-900 cursor-pointer flex w-80 rounded-lg ">
                                                <img className="h-8 w-8 mx-2 my-1" src="https://img.icons8.com/color/96/000000/whatsapp--v2.png"/>
                                                <h5 className="my-auto px-2 text-white">Contactar con el vendedor </h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>

                        </div>

                    </div>
                </div>
            </motion.div>
            :''

        
    )
    
}

export default ShowDetailProduct;