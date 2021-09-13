import React from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link , useLocation } from 'react-router-dom';


function NavBar({totalItems}) { 

  const location = useLocation();


    return (
        <Navbar className="navbar" expand="lg">
  <Navbar.Brand href="/home">Shopify App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/shop">Products</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="/customercare">Customer Care</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {location.pathname === '/home' &&(
    <Form>
      <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCart /> 
        </Badge>
      </IconButton>
    </Form>)}
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
}

export default NavBar ;
