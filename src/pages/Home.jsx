import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import products from '../database/db.json'
import {
    Card,
    Button
} from 'react-bootstrap'


export default class Home extends Component {
    render() {
        return(
            products.products.map((products)=> {
                return(
                    <Card style={styles.cardBody} key={products.id}>
                        <Container>
                        <div>
                            <Card.Img variant="top" src={products.img} />
                        </div>
                        <Card.Body>
                            <Card.Title>{products.name}</Card.Title>
                            <Card.Text><strong>IDR {products.price.toLocaleString()},00</strong></Card.Text>
                            <div>
                                <Button variant="outline-light">
                                    <i className="far fa-bookmark"></i>
                                </Button>
                                {/* <Button variant="outline-light" as={Link} to={`/detail?${item.id}`}>
                                    <i className="fas fa-cart-plus"></i> Buy Now
                                </Button> */}
                            </div>
                        </Card.Body>
                        </Container>
                    </Card>
                )
            })

        )
        
                
    }
}
const styles = {
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        width: '18rem'
    }
}

