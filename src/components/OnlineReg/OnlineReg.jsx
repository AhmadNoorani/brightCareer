import React from 'react';
import Header from '../Header';
import Footbar from '../Footbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../../stylesheets/OnlineRegistration/onlineReg.css';
import QR from '../../assets/images/qrCode.jpg';
import Button from 'react-bootstrap/Button';
import { FaRupeeSign} from 'react-icons/fa'


const OnlineReg = () => {
  return (
  <>
    <Header />
    <div id="onlineReg"> 
      <Container>
        <div className="online-reg-heading">
          <h2>Online Registration</h2>
        </div>
        <Row>
          <Col lg={8}>
            <div className="online-reg-content">
              <div className="online-reg-content-box">
              <h4>Membership (Registration Fees- Rs 500 only/)</h4>
              <ul>
                <li>6 months validity of service</li>
                <li>Condidate Resume will forwarded to 50 Employers (MNC/LLC/PVT.LTD) companies within six months.</li>
                <li>Interview Alerts will provided to the candidates</li>
              </ul>
              </div>

              <div className="online-reg-content-box">
              <h4>Membership (Registration Fees- Rs 1000 only/)</h4>
              <ul>
                <li>1 year validity of service</li>
                <li>Condidate Resume will forwarded to 100 Employers (MNC/LLC/PVT.LTD) companies within 1 year.</li>
                <li>Interview Alerts will provided to the candidates</li>
              </ul>
              </div>

              <div className="online-reg-content-box">
              <h4>Membership (Registration Fees- Rs 2000 only/)</h4>
              <ul>
                <li>2 year validity of service</li>
                <li>Condidate Resume will forwarded to 200 Employers (MNC/LLC/PVT.LTD) companies within 1 year.</li>
                <li>Interview Alerts will provided to the candidates</li>
                <li>CV modify & Added Services</li>
              </ul>
              </div>

            </div>
          </Col>
          <Col lg={4}>
            <div className="qr-image">
              <img src={QR} alt="" /> 
              <Button id="pay-button" variant="primary">Pay Online <FaRupeeSign /> </Button>{' '}
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
    <Footbar />
 </>
    
  )
}

export default OnlineReg
