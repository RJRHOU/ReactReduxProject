import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import myLogo from './/logo192.png';
 
export default function Header(props) {
    return (
      <div id='navbar' >
      <Navbar bg="primary" variant="dark"
          >
      <Container>
      <Navbar.Brand href="/home">
        <img
            
          src={myLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/home" href="/home">Home</Link>
        <Link to="/shop" href="/shop">Shop</Link>
        <Link to="/cart" href="/cart">Cart</Link>
        
      </Nav>
      </Container>
    </Navbar>
          
      </div>
    )
  }
