import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../images/doctors/doctor2.jpg";
import doctor2 from "../../images/doctors/doctor3.png";
import doctor3 from "../../images/doctors/doctor1.png";
import doctor4 from "../../images/doctors/doctor4.jpg";
import "./Doctor.css";
const Doctor = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="doctors-header">
            <h1>Meet Our Doctors Team</h1>
          </div>
          <Col xs={12} md={3}>
            <Card
              className="shadow p-3 mb-5 bg-body rounded text-center"
              style={({ width: "18rem" }, { margin: "0px 5px" })}
            >
              <Card.Img variant="top" height="250px" src={doctor1} />
              <Card.Body>
                <Card.Title className="text-danger">Dr. Safiullah</Card.Title>
                <Card.Text>
                  <p>Senior Surgeon</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card
              className="shadow p-3 mb-5 bg-body rounded text-center"
              style={({ width: "18rem" }, { margin: "0px 5px" })}
            >
              <Card.Img variant="top" height="250px" src={doctor2} />
              <Card.Body>
                <Card.Title className="text-danger">
                  Dr.Serina Akhter
                </Card.Title>
                <Card.Text>
                  <p>Lasik Surgeon</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card
              className="shadow p-3 mb-5 bg-body rounded text-center"
              style={({ width: "18rem" }, { margin: "0px 5px" })}
            >
              <Card.Img variant="top" height="250px" src={doctor3} />
              <Card.Body>
                <Card.Title className="text-danger">Dr. Anteno</Card.Title>
                <Card.Text>
                  <p>Specialists Optometrists</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card
              className="shadow p-3 mb-5 bg-body rounded text-center"
              style={({ width: "18rem" }, { margin: "0px 5px" })}
            >
              <Card.Img variant="top" src={doctor4} height="250px" />
              <Card.Body>
                <Card.Title className="text-danger">Dr. Yousuf</Card.Title>
                <Card.Text>
                  <p>Specialists Optometrists</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <div className="doctors-btn">
            <Button>Click to meet</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Doctor;
