import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./ServiceDetail.css";
const ServiceDetail = (props) => {
  const { name, description, img, price } = props.service;

  return (
    <div>
      <Container>
        <Row>
          <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price : {price}</p>
          </div>
          <div className="service-detail-btn">
            <Button>Confirm service</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
