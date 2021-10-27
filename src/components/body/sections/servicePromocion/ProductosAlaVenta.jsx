import React,{useEffect, useState} from 'react';
import {  motion} from 'framer-motion';

import imgAsus from '../../../../assets/img/laptops-aussu.png';

import './ProductosAlaVenta.css'
import ListData from './dataLaptops'
import ShowDetailProduct from './showDetailProduct/showDetailProduct';
const ProductosAlaventa =()=>{

    const [modalState, setModalState] = useState(false)
    const [infoItem, setInfoItem] = useState({})

    const ShowModalDetailProduc=(item)=>{

        console.log('print show modal');
        setInfoItem(item)
        setModalState(!modalState)
        
    }

    return(
        <>
            <div id="content-products" className="bg-white h-full pt-20">
                <div>
                    <h2 className="text-lg font-semibold text-orange-400 text-3xl my-10">Laptos a la venta disponibles</h2>
                </div>

            

                {/* detail modal */}
                <ShowDetailProduct item={infoItem} setModalState={setModalState} modalState={modalState} />

                {/* map list data */}
                <div className="my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center sm:gap-x-5 md:gap-x-10  lg:gap-x-20 gap-y-5  mx-5 md:mx-10 lg:mx-20">
                    {
                        ListData.map((d,i)=>{
                            return(
                                <motion.div whileHover={{scale:0.99}} whileTap={{scale:1.03}} className="grid  z-10  grid-cols-1  bg-white  h-full">
                                    {/* car img head */}
                                    <div>
                                        <div onClick={()=>ShowModalDetailProduc(d)} className="bg-white w-full h-full">
                                            <div  className="bg-gray-300 h-auto grid justify-items-center justify-center">
                                                <img src={d.urlImage} alt="" className="my-auto" />
                                            </div>
                                            <div className="py-4 h-auto grid justify-items-center justify-center">
                                                <div className=" my-auto">

                                                <h2 className="font-semibold">{d.title}</h2>
                                                <h3 className="my-2 text-xl line-through"> {d.promotionPrice} Bs.</h3>
                                                <h3 className="my-2 text-2xl">Precio {d.promotionPrice} Bs.</h3>
                                                <h4 className="mt-7">Ver detalle</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    
                    }
                </div>
                
                {/* end */}

            </div>
        </>
    )
}

export default ProductosAlaventa;