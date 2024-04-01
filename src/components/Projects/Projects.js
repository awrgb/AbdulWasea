import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import metavesus from "../../Assets/Projects/metavesus.png";
import ecommerce from '../../Assets/Projects/ecommerce.png';
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
              imgPath={chatbot}
              isBlog={false}
              title="Gemini Chhat Bot"
              description="ChatBot using Next.js and Other Nextjs Server actions and Google Gemin Pro and clerk for Authentication"
             ghLink="https://github.com/awrgb/AIChatBot"
              demoLink="https://chat-bot-ai-gemini.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/awrgb/Bit"
              demoLink="https://bit-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metavesus}
              isBlog={false}
              title="Metavesus"
              description="Metaverse App"
              ghLink="https://github.com/awrgb/Web3.0-Metaverse"
              demoLink="https://metavesus.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="A beautifull Ecommerce app"
              description="Using Next.js, Tailwind, Sanity, Stripe"
              ghLink="https://github.com/awrgb/flair"
              demoLink="https://flair1.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
