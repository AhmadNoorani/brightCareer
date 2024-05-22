import React from 'react';
import '../stylesheets/home/provideservices.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProvideServices = () => {
  return (
    <div id="provideService">
        <div className="heading">
            <h1>SECTORS WHERE WE PROVIDING SERVICES</h1>
        </div>
        <div className="content-box">
            <Container>
            <Row>
            <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                            <img src='' alt=""  />
                        </span>
                        <span className="name">Manufacturing</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src='' alt=""   />
                        </span>
                        <span className="name">IT Solutions</span>
                    </div>
                </Col>
                
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src='' alt="" />
                        </span>
                        <span className="name">Banking</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src='' alt=""  />
                        </span>
                        <span className="name">Telecom</span>
                    </div>
                </Col>
           

       
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                            <img src={si1} alt=""  />
                        </span>
                        <span className="name">Manufacturing</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si2} alt=""   />
                        </span>
                        <span className="name">IT Solutions</span>
                    </div>
                </Col>
              
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si3} alt="" />
                        </span>
                        <span className="name">Banking</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si4} alt=""  />
                        </span>
                        <span className="name">Telecom</span>
                    </div>
                </Col>
           
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                            <img src={si1} alt=""  />
                        </span>
                        <span className="name">Manufacturing</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si2} alt=""   />
                        </span>
                        <span className="name">IT Solutions</span>
                    </div>
                </Col>
              
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si3} alt="" />
                        </span>
                        <span className="name">Banking</span>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6}  xs={6}>
                    <div className="service">
                        <span className="icon">
                        <img src={si4} alt=""  />
                        </span>
                        <span className="name">Telecom</span>
                    </div>
                </Col>
            </Row>
            </Container>
            

        </div>
      
    </div>
  )
}

export default ProvideServices
