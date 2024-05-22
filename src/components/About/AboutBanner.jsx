import React from "react";
import "../../stylesheets/AboutUs/about-banner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ab2 from "../../assets/images/abus2.jpg";



const AboutBanner = () => {
  return (
    <>
      <div className="aboutBanner2">
        <div className="content">
          <Container>
            <Row>
              <Col lg={6} md={5} sm={5}>
                <div className="abb-text">
                  <h1>ABOUT US</h1>
                </div>
              </Col>
              <Col lg={6} md={7} sm={7}>
               <div className="ab-image">
                <img src={ab2} alt="" />
               </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
