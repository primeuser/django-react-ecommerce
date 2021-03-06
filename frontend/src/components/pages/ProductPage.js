import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import  { listProductDetails } from '../../actions/productActions'
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Loader from '../Loader'
import Message from '../Message'
import Rating from '../Rating'
// import products from './products'
function ProductPage({ match }) {
    //const [product, setProduct] = useState([])

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const  {error, loading, product } = productDetails
    // let loading, error, product = {}

    useEffect(() => {

        dispatch(listProductDetails(match.params.id))

        // async function fetchProduct(){
        //     const {data}  = await axios.get(`/api/products/${match.params.id}`)
        //     setProduct(data)

        // }  
        // fetchProduct()

    }, 
    [dispatch]
    )
 
    
    // const product = products.find((p) => p._id === match.params.id)
    return (
        <div>
            {/* {product.name} */}
            <Link to='/' className='btn btn-light my-3'>Go Back
            </Link>
            {
                loading ?
                <Loader/>
                : error ?
                <Message variant='danger'> {error} </Message>
                :(
                    <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.title} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h4>{product.title}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.view_count} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {product.selling_price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: $ {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>
                                    <Col>
                                    <strong>${product.selling_price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    {product.stock_count > 0 ? 'In Stock ' : 'Out of Stock '}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button  className='btn-block' disabled={product.stock_count == 0} type='button'> Add to Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
                )
            }
            
        </div>
    )
}

export default ProductPage
