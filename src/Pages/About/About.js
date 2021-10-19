import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import healthcare from "../../images/eye-doctor-optometrist-and-ophthalmologist.jpg";
const About = () => {
  return (
    <div>
      <h1>Who We Are ???</h1>
      <Container>
        <Row className="about-section">
          <Col xs={6} md={4}>
            <h2>Eye Care BD</h2>
            <p>
              We establish our health care almost 17 years.We are a the staff
              and Doctors are almost family.So have a great bonding among us and
              thats why we are the leading health care in the arena.our has
              almost 70+ doctors and 200+ stuff for serving the best to the
              people..
            </p>
          </Col>
          <Col xs={6} md={4}>
            <h2>Founder Tells</h2>
            <p>
              I am Rayhan Chowdhury.I build this Health care just for one
              mindset which is to serve the people properly and I do that almost
              17 years. I always forced the employee of this healtcare to serve
              all the people very effectevely and carrying all of the stages of
              the people. Thanks to all those who are visited this site...
            </p>
          </Col>
          <Col xs={6} md={4}>
            <img src={healthcare} alt="" />
          </Col>
        </Row>
        <div className="about-btn">
          <Button>Call Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
