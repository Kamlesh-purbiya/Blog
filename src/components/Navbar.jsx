import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as RBNavbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <RBNavbar.Brand as={Link} to="/">Mewadi's Blogs</RBNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/create">Create Blog</Nav.Link>
        </Nav>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
