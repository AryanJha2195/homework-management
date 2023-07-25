import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { FiUser, FiLifeBuoy, FiLogIn, FiSearch } from "react-icons/fi";

const PreNavbar = () => {
  return (
    <Navbar style={{backgroundColor: "#cdf2fa"}} expand="lg" sticky="top">
    <Container fluid>
      {/* <Navbar.Brand href="#">Homework Manager</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">
            <FiUser /> Parents & Students
          </Nav.Link>
          <Nav.Link href="#">
            <FiLifeBuoy /> Support
          </Nav.Link>
          <Nav.Link href="#">
            <FiLogIn /> Login
          </Nav.Link>
          <Nav.Link href="#">
            <FiSearch /> Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default PreNavbar