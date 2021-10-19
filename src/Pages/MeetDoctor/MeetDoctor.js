import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./MeetDoctor.css";
import doctor1 from "../../images/doctors/doctor2.jpg";
import doctor2 from "../../images/doctors/doctor3.png";
import doctor3 from "../../images/doctors/doctor1.png";
import doctor4 from "../../images/doctors/doctor4.jpg";
const MeetDoctor = () => {
  return (
    <div>
      <div className="doctor-section-header">
        <h1>
          MEET OUR <span>OPTOMETRISTS</span>{" "}
        </h1>
        <p>They are the most experienced and Talented Docters. </p>
      </div>
      <div className="cart-section">
        <CardGroup xs={12} md={6} lg={3}>
          <Card className="cart shadow p-3 mb-5">
            <Card.Img variant="top" src={doctor1} />
            <Card.Body>
              <Card.Title>Dr.Mohammad Safiullah</Card.Title>
              <Card.Text>
                <p>Senior Surgeon</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cart shadow p-3 mb-5 ">
            <Card.Img variant="top" src={doctor2} />
            <Card.Body>
              <Card.Title>Dr.Serina Akhter</Card.Title>
              <Card.Text>
                <p>Lasik Surgeon</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cart shadow p-3 mb-5 ">
            <Card.Img variant="top" src={doctor3} />
            <Card.Body>
              <Card.Title>Dr.Mohammad Yousuf</Card.Title>
              <Card.Text>
                <p>Specialists Optometrists</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cart shadow p-3 mb-5 ">
            <Card.Img variant="top" src={doctor4} />
            <Card.Body>
              <Card.Title>Dr.Mohammad Yousuf</Card.Title>
              <Card.Text>
                <p>Specialists Optometrists</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default MeetDoctor;
