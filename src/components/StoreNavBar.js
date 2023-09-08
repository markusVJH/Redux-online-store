import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const StoreNavBar = () => {
  return (
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">Redux online Store</Navbar.Brand>
          <Nav className='me-auto'>
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default StoreNavBar;