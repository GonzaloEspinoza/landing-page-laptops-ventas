import React from 'react'
import { useParams } from 'react-router-dom'


const Promociones =()=>{

    let { id } = useParams()
    return (
        <div className="mt-20">
            {id}
        </div>
    )
}

export default Promociones;