import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Navbar} from'react-bootstrap';
import './App.css'


function Header() {
    return (
        <Navbar expand="lg" className=" color_back"  >
            <Container >
                <Navbar.Brand href="#home" className='header'>Метеостанция Усть-Иша</Navbar.Brand>

            </Container>
        </Navbar>
    );
}

export default Header;