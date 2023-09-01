import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const StoreNavBar = () => {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Redux online Store</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default StoreNavBar;