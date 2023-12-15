import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Navbar} from'react-bootstrap';
import './App.css'


function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark'>
            <Container>
                <Navbar.Brand href="#home" className='header'>Метеостанция Усть-Иша</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#graphics" className='nav_item_1'>Графики</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;