// components/Navigation.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">PhD Assistance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
