import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h2 className="text-center">Eye Care Bd</h2>
            <p className="footer-about">
              It is a popular and well known health care in Bangladesh. Here
              Thousands of patient come here for the Eye Treatment and we treat
              them successfully and take care of them until they can get
              satisfied.We provide also online services our has a lot of
              professionals Doctors forum....
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Form>
              <Row className="mb-3 footer-form">
                <h2 className="text-center pb-5">Contact Us</h2>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className="textarea"
                  placeholder="messege"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>

              <div className="footer-btn">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={4}>
            <div className="schedule ">
              <Col>
                <h2>opening hours</h2>
                <div className="day-time-section ">
                  <div className="day">
                    <h4>Sat-Thu</h4>
                    <h4>Friday</h4>
                  </div>
                  <div className="time">
                    <h4>8am-9pm</h4>
                    <h4>10am-9pm</h4>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="copyrygiht-section">
        <p>all rights by @Eye Care BD||2021</p>
      </div>
    </div>
  );
};

export default Footer;
