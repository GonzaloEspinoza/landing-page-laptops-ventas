import React from 'react';

import imgAsus from '../../../../assets/img/laptops-aussu.png';

import './ProductosAlaVenta.css'

const ProductosAlaventa =()=>{

    return(
        <>
            <div className="bg-white h-full pt-20">
                <div>
                    <h2 className="text-lg font-bold text-orange-400">Laptos a la venta disponibles</h2>
                </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-green-400 w-full h-full">
                    {/* car img head */}
                    <div className="bg-indigo-400 w-full h-full">
                        <div className="bg-gray-300 h-full grid justify-items-center justify-center">
                            <img src={imgAsus} alt="" className="my-auto" />
                        </div>
                    </div>

                    {/* card data body */}
                    <div className="grid justify-center justify-items-center  bg-indigo-400 w-full h-full py-10  lg:py-2">
                      <div className="my-auto">
                      <div className="bg-red-400 py-3">
                            <h1 className='text-3xl font-semibold text-gray-800'>Laptop convertible HP ENVY x360 - 15t-es000 touch</h1>
                        </div> 
                        <div className="py-4">
                            <h3 className="text-indigo-900">Ofertas especiales: Envío gratuito | 5% de descuento adicional en accesorios seleccionados (límite de 1 por tipo) con la compra de PC | Ahorre $ 100 al inst…</h3>
                        </div>
                        <div className="py-4 ">
                            <h2 className="text-left font-semibold text-gray-700 mx-4">Especificaiones del producto</h2>
                            <div id="especificaion-producto" className="content-detail bg-green-500">
                                <ul className="list-disc list-inside px-4 text-left">
                                    <li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li>
                                    <li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li>
                                    <li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li>
                                    <li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li>
                                    <li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li><li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li><li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li><li>Windows 11 Home 64</li>
                                    <li>Procesador Intel® Core ™ i7 de 11.a generación</li>
                                </ul>
                            </div>
                            <div className="py-4 mx-4">
                                <h1 className="text-left text-lg">Precio actual: Bs <strong className="line-through text-xl font-normal">3800</strong> </h1>
                                <h1 className="text-left text-lg">👉 Precio de promoción: Bs <strong className=" text-2xl text-red-600 font-semibold"> 3100</strong></h1>
                            </div>
                            <div className="grid justify-center justify-items-center">
                                <div className="bg-blue-800 hover:bg-blue-900 cursor-pointer flex w-80 rounded-lg ">
                                    <img className="h-8 w-8 mx-2 my-1" src="https://img.icons8.com/color/96/000000/whatsapp--v2.png"/>
                                    <h5 className="my-auto px-2 text-white">Contactar con el vendedor </h5>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

               </div>
            </div>
        </>
    )
}

export default ProductosAlaventa;