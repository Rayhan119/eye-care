import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner-section">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <div className="banner-left-section text-white">
                <h2>
                  Take Care Of Your Eyes,Lead a <span>visionari world</span>
                </h2>
                <p>
                  Eye is the best gift from our Creator,We can't go through
                  without it.Through this eyes we realize the whole world. If
                  you face any problems with your eyes this is the right place
                  for you. We ensure you the best and excellent treatment for
                  your eyes which we conduct the eye specialists who have a lot
                  of experienced.You can get best treatment from
                  anywhere.............
                </p>
              </div>
              <div className="banner-btn">
                <Button>Read more</Button>
              </div>
            </Col>
            <Col xs={6} md={7}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
