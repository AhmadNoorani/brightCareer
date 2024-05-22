import React from "react";
import "../stylesheets/footbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footbar = () => {
  return (
    <div id="footbar">
      <div id="footer">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6} >
              <div className="foot-head">
                <h4>Address</h4>
              </div>
              <div className="foot-content">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="foot-text">
                  <p>G.C Avenue , Kolkata 231217</p>
                </div>
              </div>
              <div className="foot-content">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="foot-text">
                  <p>+91 8013014471</p>
                </div>
              </div>
              <div className="foot-content">
                <div className="icon">
                <FaEnvelope />
                </div>
                <div className="foot-text">
                  <a href="">ideaspotconsultant@gmail.com</a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} >
              <div className="foot-head">
                <h4>Social Links</h4>
              </div>

              <div className="foot-content">
                    <div className="icon"><FaFacebook /></div>
                    <div className="foot-text"><a href="">BrightCarrer</a></div>
              </div>
              <div className="foot-content">
                    <div className="icon"><FaInstagram /></div>
                    <div className="foot-text"><a href="">BrightCarrer4050</a></div>
              </div>
              <div className="foot-content">
                    <div className="icon"><FaLinkedin /></div>
                    <div className="foot-text"><a href="">@brightCarrer</a></div>
              </div>
              <div className="foot-content">
                    <div className="icon"><FaTwitter /></div>
                    <div className="foot-text"><a href="">@brightCarrer2023</a></div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
            <div className="foot-head"><h4>Pages links</h4></div>
            <div className="foot-content">
                <div className="page-links">
                    <a href="">Home</a>
                    <a href="">AboutUs</a>
                    <a href="">Job Seekers</a>
                    <a href="">online Registration</a>
                    <a href="">Indutries-we-serve</a>
                    <a href="">ContactUs</a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="foot-head"><h3>Bright Career Consultant</h3></div>
              <div className="foot-content">
                <div className="foot-text">
                    <p>Bright Career is a recruitment consultant come software development company ,
                        based in kolkata operating since 2023.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
      <div className="copyright">
        <p>Copyright 2023 - Bright Career</p>
      </div>
      
    </div>
  );
};

export default Footbar;
