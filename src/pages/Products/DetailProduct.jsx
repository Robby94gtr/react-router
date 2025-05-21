import React from 'react'
import { useParams } from 'react-router-dom'


const DetailProduct = () => {


    const { id } = useParams()
    console.log(id);

    return (
        <div>Dettaglio prodotto</div>
    )
}

export default DetailProduct