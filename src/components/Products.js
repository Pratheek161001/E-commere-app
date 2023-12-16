import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const Products = () => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: require("../assets/Album 1.png")},
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: require("../assets/Album 2.png")},
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: require("../assets/Album 3.png")},
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: require("../assets/Album 4.png")},
        ]
        
  return (
    
    <Container>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {productsArr.map((product,index)=>(
                <Card key={index} style={{ width: '18rem', backgroundColor:'lightgrey' }} className='p-3 m-5'>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        ))}
        </div>
    </Container>
    
  )
}

export default Products;