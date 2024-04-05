import React, { Component } from 'react';
import  { Fragment} from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';



class NavBar extends Component {
    render() {
        return (
            <Fragment>
     <Navbar fixed='top'  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




            </Fragment>
        );
    }
}

export default NavBar;