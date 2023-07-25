import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const HWFooter = () => {
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col md={3}>
          <h5>Privacy Statement</h5>
          <p>
            Your privacy is important to us. Learn about how we collect and use your personal data in our Privacy Statement.
          </p>
        </Col>
        <Col md={3}>
          <h5>PowerSchool Responsible Disclosure Program</h5>
          <p>
            We take security seriously. If you have discovered a security vulnerability, let us know through our Responsible Disclosure Program.
          </p>
        </Col>
        <Col md={3}>
          <h5>Terms & Conditions</h5>
          <p>
            Review our Terms & Conditions to understand the legal aspects of using our services.
          </p>
        </Col>
        <Col md={3}>
          <h5>Cookie Preferences</h5>
          <p>
            Manage your cookie preferences to personalize your experience.
          </p>
        </Col>
      </Row>
      <Row className="footer-contact">
        <Col>
          <p>150 Parkshore Dr. Folsom, CA 95630</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default HWFooter