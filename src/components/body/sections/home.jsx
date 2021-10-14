import React from 'react';
import LocationStore from './locationStore/locationStore';
import ProductosAlaventa from './servicePromocion/ProductosAlaVenta';
import Welcome from './welcome/welcome';



const Home =()=>{

    return(
        <>
        <div className=" mx-auto">
            <Welcome></Welcome>
            <ProductosAlaventa></ProductosAlaventa>
            <LocationStore></LocationStore>
        </div>
        </>
    )
}

export default Home;