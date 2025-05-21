import React from 'react'
import MainNav from '../components/MainNav'
import { useState } from 'react'

const Products = () => {
    return (
        <>
            <MainNav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center my-3'>PRODOTTI</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="" className="card-img-top img-fluid" alt="" ></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-description">description</p>
                                <p className="card-price">price</p>
                                <a href="#" className="btn btn-primary">share</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products