import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ipl from "../../Assets/Projects/ipl.png";
import event from "../../Assets/Projects/event.png";
import idealab from "../../Assets/Projects/idealab.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idealab}
              isBlog={false}
              title="Idea Lab Website"
              description="A lab booking platform with an admin panel for managing lab availability and user bookings. Users can view available slots, book sessions, and receive confirmations, while admins can approve bookings and track usage."
              ghLink="https://github.com/PraveenKumar004/IdeaLab"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="IPL Auction Game"
              description="Developed an interactive platform simulating the IPL auction process, where contestants act as team owners, bid for players, and build teams within a set budget. The system supports two user roles: Contestants, who place bids on players, and Managers, who create rooms and initiate player auctions."
              ghLink="https://github.com/PraveenKumar004/IPL-V1_Frontend"
              demoLink="https://iplauctiongame.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="College Event Management"
              description="Developed a web application for efficient college event planning and management, featuring QR-based ticket generation for participants. Event organizers can schedule events, track registrations, and manage logistics, while participants can browse events and receive tickets via email."
              ghLink="https://github.com/PraveenKumar004/Event-Management-System---django"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
