import React, { Component, Fragment } from 'react';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Sazzad Shakh</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="#home" className="text-uppercase">home</Nav.Link>
                <Nav.Link href="#services" className="text-uppercase">services</Nav.Link>
                <Nav.Link href="#courses" className="text-uppercase">courses</Nav.Link>
                <Nav.Link href="#portfolio" className="text-uppercase">portfolio</Nav.Link>
                <Nav.Link href="#contact" className="text-uppercase">contact</Nav.Link>
                <Nav.Link href="#about" className="text-uppercase">about</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;