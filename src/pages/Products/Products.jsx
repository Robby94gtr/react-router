import React from 'react'
import MainNav from '../../components/MainNav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [items, setItems] = useState([]);

    const getProducts = (() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setItems(resp.data);
        })
    })

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <MainNav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center my-3'>PRODOTTI</h1>
                    </div>
                </div>
                <div className="row gy-3">
                    {items.map((item) => {
                        return < div key={item.id} className="col-12 col-md-6 col-lg-4" >
                            <div className="card">
                                <img src={item.image} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.title}</h5>
                                    <p className="card-description text-center">{item.description}</p>
                                    <p className="card-price text-center">{`${item.price} \u20AC`}</p>
                                    <div className='d-flex justify-content-center'>
                                        <NavLink to={`/Prodotti/${item.id}`}><button type="button" className="btn btn-primary">Dettaglio prodotto</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div >
                    })}
                </div>
            </div>
        </>
    )
}

export default Products