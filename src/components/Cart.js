import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
    const CartItems = [
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
        ]
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const placeorder=(e)=>{
    e.preventDefault();
    alert('Your order is placed....Thank you!!!')
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
        <div className="d-flex justify-content-start ">
            <li style={{listStyleType:'none'}}>
                {CartItems.map((product,index)=>(
                <Card key={index} style={{ width: '6rem', backgroundColor:'beige' }} className='p-1 m-2'>
                    <Card.Body className='p-0'><Card.Img variant="top" src={product.imageUrl} />{product.title} ${product.price} <Button variant="danger">remove</Button></Card.Body>
                    <Card.Text></Card.Text>   
                </Card>
                ))}
            </li>
        </div>
            </ul>
        </Offcanvas.Body>
        <Button variant="primary" onClick={placeorder}>Place Order</Button>
      </Offcanvas>
    </>
  );
}

export default Example;