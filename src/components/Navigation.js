import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button
  ,FormControl 
  ,Form 
  ,Navbar
  ,Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'



export default function App() {
  return (
    <>
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">MERN AWS Demo</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
              <Nav className="mr-auto">
                <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/products">Products</Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/articles-list">Articles</Nav.Link>
                <Nav.Link eventKey="4" as={Link} to="/about">About</Nav.Link>
              </Nav>
              <Form  inline>
                <FormControl type="text" placeholder="search" className="mr-sm-2"/>
                <Button variant="outline-primary">search</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>

    </>
  );
}