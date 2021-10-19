import React from "react";
import "./LatestNews.css";
//images
import news1 from "../../images/news/news-1.jpg";
import news2 from "../../images/news/news-2.jpg";
import news3 from "../../images/news/news-3.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const LatestNews = () => {
  return (
    <div>
      <Container>
        <Row className="news-section">
          <div className="news-header">
            <h1>
              Latest <span>News</span>{" "}
            </h1>
          </div>
          <Col xs={12} md={4} className="">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={news1} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title className="text-danger">
                  Recent Advancements in Eye Care
                </Card.Title>
                <Card.Text>
                  EYE CARE has seen a tremendous improvement in safety,
                  efficacy, and accuracy with introduction of “Femtosecond”
                  laser technology.
                </Card.Text>
                <div className="news-btn">
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={news2} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title className="text-danger">
                  A leading eye doctor shares a vision test
                </Card.Title>
                <Card.Text>
                  These are some of the diseases that commonly impact the vision
                  in the long run. Hence, for these patients, its crucial to get
                  their eyes checked regularly.
                </Card.Text>
                <div className="news-btn">
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={news3} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title className="text-danger">
                  Bringing eye health to global scale
                </Card.Title>
                <Card.Text>
                  Vision is one of our most dominant senses, and our world is
                  often built around our ability to see. Despite this, the World
                  around the world
                </Card.Text>
                <div className="news-btn">
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
