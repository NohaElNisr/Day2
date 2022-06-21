import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar style={{backgroundColor: "lightblue"}}>
    <Container>
    <Navbar.Brand href="#home">Store</Navbar.Brand>
    <Nav >
      <Link to="/" style={{color: "Black"}} className="nav-link active mx-3">Home</Link>
      <Link to="/about" style={{color: "Black"}} className="nav-link active mx-3">About Us</Link>
      <Link to="/contact" style={{color: "Black"}} className="nav-link active mx-3">Contact Us</Link>
      <Link to="/product" style={{color: "Black"}} className="nav-link active mx-3">Products</Link>

    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

