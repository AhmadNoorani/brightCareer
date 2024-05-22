import React from "react";
import "../../stylesheets/AboutUs/wwr.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import wwr2 from "../../assets/images/wwr2.jpg";
import wwd1 from "../../assets/images/wwd1.jpg";

const Wwr = () => {
  return (
    <>
      <div id="wwr">
        <Container>
          <Row>
            <Col lg={5} md={6}>
              <div className="wwr-image">
                <img src={wwr2} alt="" />
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div className="wwr-text">
                <div className="wwr-heading">
                  <h1>"WHAT WE ARE"</h1>
                </div>
                <p>
                  We do have a huge team of Expert and Professional Recruiters,
                  who work on our client's requirement and give them a
                  Qualitative Employee. We are having vast database,
                  professional portals & a huge online network reference in
                  entire India. Our resources are well equipped on the
                  technologies mentioned and we ensure that the productivity of
                  our resources will be from day One.
                </p>
                <p className="off820">
                  We offer flexibilities to both the Job Seekers and the
                  Companies. Job Seekers can choose when, where n how they want
                  to work and the Companies can get the skills what they need
                  during their busy time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="wwd">
        <Container>
          <Row>
            <Col lg={7} md={6}>
              <div className="wwd-heading">
                <h1>"WHAT WE DO"</h1>
              </div>
              <div className="wwd-text">
                <p>
                  Training and Development At Benchmark Global Management we
                  provide on-site training and development facilities for fresh
                  recruits and existing employees. You can select from our wide
                  range of trainings on
                </p>
                <ul>
                  <li>Attitude Development</li>
                  <li>Communication Training</li>
                  <li>Aptitude and Skills Trainings</li>
                </ul>
                <p className="off820">
                  We also have trainings for rewards and fair performance
                  management system. In addition to that, we provide strategic
                  marketing planning process, HR business process outsourcing
                  and create HR policies tailor made for your organization.
                </p>
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div className="wwd-image">
                <img src={wwd1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Wwr;

