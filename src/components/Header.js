import React from "react";
import './css/Header.css'
import {Container, Nav, Navbar} from "react-bootstrap";

export function Header() {
    return (<>

    <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="home">Auto Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="Buy">Buy</Nav.Link>
                        <Nav.Link href="Maintenance">Maintenance</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                        <Nav.Link href="Emplayees">Emplayees</Nav.Link>
                        <Nav.Link href="About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>)

}

export default Header;