import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const DetailProduct = () => {


    const { id } = useParams();

    const [product, setProduct] = useState({});

    getProduct(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data)
        })
    })

    return (
        <div>Dettaglio prodotto</div>
    )
}

export default DetailProduct