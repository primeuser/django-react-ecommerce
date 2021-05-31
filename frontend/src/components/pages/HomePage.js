import React, { useState, useEffect } from 'react'
// import products from './products'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import  { listProducts } from '../../actions/productActions'

import {Row, Col} from 'react-bootstrap'
import Product from '../Product'
import Loader from '../Loader'
import Message from '../Message'
function HomePage() {
    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const  {error, loading, products } = productList

    useEffect(() => {

        // async function fetchProducts(){
        //     const {data}  = await axios.get('/api/products/')
        //     setProducts(data)

        // }  
        // fetchProducts()
        dispatch(listProducts())



    }, 
    [dispatch]
    )

    // const products = []

    return (
        <div>
            <h1>Our Products</h1>
            { loading ? <Loader/>
                : error ? <Message variant='danger'> {error} </Message>  
                :  
                <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        
        
            }
            
        </div>
    )
}

export default HomePage
