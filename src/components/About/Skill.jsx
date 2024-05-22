import React from "react";
import "../../stylesheets/AboutUs/skill.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import skillImg from "../../assets/images/skill.jpg";

const Skill = () => {
  return (
    <>
      <div id="bg-skill">
        <div className="skill-heading">
          <h1>OUR SKILLS</h1>
        </div>
        <Container>
          <Row>
            <Col lg={7} md={6}>
              <div className="skill-content">
                <div className="skill-text">
                  <p>
                    A key facet to our services includes creating a more
                    cohesive environment through the development of human
                    resources consulting skills.
                  </p>
                  <h5>Our team comprises of :-</h5>
                  <ul>
                    <li>Recruitment Specialists</li>
                    <li>Manpower Planner</li>
                    <li>Head Hunters</li>
                    <li>Workforce Training and Development Officials</li>
                    <li>Recruitments</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={5} md={6}>
              <div className="skill-image">
                <img src={skillImg} alt="" />
              </div>
              {/* <div className="first-circle">
              <div className="second-circle">
                <div className="skill-text">
                  <h1>OUR</h1>
                  <h1>SKILLS</h1>
                </div>
              </div>
            </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skill;
