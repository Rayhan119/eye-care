import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";
const ServiceDetail = (props) => {
  const { name, description, img, price } = props.service;

  return (
    <div>
      <Container>
        <Row>
          <div className="shadow p-3 mb-5 bg-body rounded service-detail">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>
              <span>Price</span> : {price}
            </h5>

            <Link to="/login">
              <div className="service-detail-btn">
                <Button>Confirm service</Button>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
