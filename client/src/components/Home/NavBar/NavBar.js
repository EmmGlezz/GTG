import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/main");

  return (
    <div>
        <Navbar variant='dark' >
            <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src="images/GTG_LOGO.png"
                    height="30"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link>
                        <a className='navbar-button' onClick={handleClick} href='/'>
                            Try Demo
                        </a>
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
          </Navbar>
    </div>
  )
}

export default NavBar