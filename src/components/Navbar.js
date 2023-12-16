import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">shop</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" className="mr-3">Cart 0</Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;