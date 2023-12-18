import {  useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from './CartContext';
function Example() {
  const { cart,removeFromCart} = useContext(CartContext);
  const CartItems = [...cart]
  const totalAmount = CartItems.reduce((total, product) => total + product.price, 0);
  const numberofitems=CartItems.length
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const placeorder=(e)=>{
    e.preventDefault();
    alert('Your order is placed....Thank you!!!')
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>Cart {numberofitems}</Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton><Offcanvas.Title><h2>Your Cart</h2></Offcanvas.Title></Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <div className="d-flex justify-content-start ">
                <li style={{listStyleType:'none'}}>
                    {CartItems.map((product,index)=>(
                    <Card key={index} style={{ width: '6rem', backgroundColor:'beige' }} className='p-1 m-2'>
                        <Card.Body className='p-0'><Card.Img variant="top" src={product.imageUrl} />{product.title} ${product.price} <Button variant="danger" onClick={removeFromCart}>remove</Button></Card.Body>
                        <Card.Text></Card.Text>   
                    </Card>
                    ))}
                </li>
            </div>
          </ul>
        </Offcanvas.Body>
        <Card.Footer><h3>Total Amount : ${totalAmount}</h3></Card.Footer> 
        <Button variant="primary" onClick={placeorder}>Place Order</Button>
      </Offcanvas>
    </>
  );
}
export default Example;