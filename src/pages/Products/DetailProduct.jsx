import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const DetailProduct = () => {


    const { id } = useParams();

    const [product, setProduct] = useState({});

    const getProduct = (() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
            console.log(resp.data);
        })
    })

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{product.title}</h1>
                        <div className="img-container">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="product-info">
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct