import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

 const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Homework Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title="Assignments" id="product-dropdown">
            <NavDropdown.Item href="#">Feature 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Feature 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Feature 2</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <NavDropdown title="Solution" id="solution-dropdown">
            <NavDropdown.Item href="#">Solution 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Solution 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Solution 2</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <NavDropdown title="Notifications" id="outcomes-dropdown">
            <NavDropdown.Item href="#">Outcome 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Outcome 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Outcome 2</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <NavDropdown title="Parents & Teacher Connection" id="connection-dropdown">
            <NavDropdown.Item href="#">Parents</NavDropdown.Item>
            <NavDropdown.Item href="#">Teacher</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <NavDropdown title="Resources" id="resources-dropdown">
            <NavDropdown.Item href="#">Resource 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Resource 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Resource 2</NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
          <Button variant="danger" className="contact-sales-btn">
            Contact Sales
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default NavBar
