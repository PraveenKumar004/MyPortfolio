import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen Kumar </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Business Systems at K.S. Rangasamy College of Technology.
            <br />
            I have successfully completed a four-month internship at <a href="https://statix.pro" target="_blank" rel="noopener noreferrer" className="purple">
              Statix.pro
            </a>, a reputed digital marketing company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> YouTube Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
