import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./LatestNews.css";
import news1 from "../../images/news/news-1.jpg";
import news2 from "../../images/news/news-2.jpg";
import news3 from "../../images/news/news-3.jpg";
const LatestNews = () => {
  return (
    <div className="p-5">
      <div className="news-section-header">
        <h1>
          Latest <span>News</span>{" "}
        </h1>
      </div>
      <div className="cart-section">
        <CardGroup xs={12} md={6} lg={3}>
          <Card className="cart shadow p-3 mb-5">
            <Card.Img variant="top" src={news1} />
            <Card.Body>
              <Card.Title>Recent Advancements in Eye Care</Card.Title>
              <Card.Text>
                <p>
                  EYE CARE has seen a tremendous improvement in safety,
                  efficacy, and accuracy with introduction of “Femtosecond”
                  laser technology. is Cataract followed by Corneal blindness.
                </p>
              </Card.Text>
              <div className="news-btn">
                <Button>Read more..</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="cart shadow p-3 mb-5 ">
            <Card.Img variant="top" src={news2} />
            <Card.Body>
              <Card.Title>A leading eye doctor shares a vision test</Card.Title>
              <Card.Text>
                <p>
                  These are some of the diseases that commonly impact the vision
                  in the long run. Hence, for these patients, its crucial to get
                  their eyes checked regularly.
                </p>
              </Card.Text>
              <div className="news-btn">
                <Button>Read more..</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="cart shadow p-3 mb-5 ">
            <Card.Img variant="top" src={news3} />
            <Card.Body>
              <Card.Title>Bringing eye health to global scale</Card.Title>
              <Card.Text>
                <p>
                  Vision is one of our most dominant senses, and our world is
                  often built around our ability to see. Despite this, the World
                  around the world suffer from some form of vision impairment or
                  blindness.
                </p>
              </Card.Text>
              <div className="news-btn">
                <Button>Read more..</Button>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default LatestNews;
