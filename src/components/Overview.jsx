import React, { useState } from "react";
import ov1 from "../assets/images/ov1.jpg";
import "../stylesheets/home/overview.css";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import fblogo from "../assets/images/fblogo.png";
import linkedin from "../assets/images/linkedin.png";
import happyclient from "../assets/images/happyclient.jpg";
import experience from "../assets/images/experience.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Overview = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <div className="overview">
        <div className="heading">
          <h1>COMPANY OVERVIEW</h1>
        </div>
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="ov-img">
                <img src={ov1} alt="" />
              </div>
              <div className="ov-text">
                <h2>
                  <Countup start={0} end={450} duration={4} delay={0} />+
                </h2>
                <h3>PLACED</h3>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="content-box">
                <div className="icon-text">
                  <h4>25K+ Likes</h4>
                </div>
                <div className="icon">
                  <img src={fblogo} alt="" />
                </div>
              </div>
              <div className="content-box">
                <div className="icon-text">
                  <h4>18K+ Followers</h4>
                </div>
                <div className="icon">
                  <img src={linkedin} alt="" />
                </div>
              </div>
              <div className="content-box">
                <div className="icon-text">
                  <h4>78+ Happy Clients</h4>
                </div>
                <div className="icon">
                  <img src={happyclient} alt="" />
                </div>
              </div>
              <div className="content-box">
                <div className="icon-text">
                  <h4>5+ year Experience</h4>
                </div>
                <div className="icon">
                  <img src={experience} width="70px" height="70px" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Overview;

// <div className="overview">
// <div className="heading">
//   <h1>COMPANY OVERVIEW</h1>
// </div>
// <Container>
//   <Row>
//     <Col lg={6} md={12}>
//       <div className="overview-content-box">
//         <div className="pic">
//           <img src={ov1} alt="" />
//         </div>
//         <div className="ov-content-text">
//         <h2>
//             <Countup start={0} end={450} duration={4} delay={0} />
//         </h2>
//         <h2>PLACED</h2>
//         </div>
//       </div>
//     </Col>

//     <Col lg={6} md={12}>
//       <Row>
//         <Col lg={6} md={12}>
//           <div className="overview-content-box2">
//           <div className="content">
//             <div className="icon">
//               <img src={experience} alt="" />
//             </div>
//             <div className="content-text">
//               <ScrollTrigger
//                 onEnter={() => setCounterStart(true)}
//                 onExit={() => setCounterStart(false)}
//               >
//                 <h4>
//                   {counterStart && (
//                     <Countup start={2} end={5} duration={3} delay={0} />
//                   )}
//                   +
//                 </h4>
//                 <h4>Year Experience</h4>
//               </ScrollTrigger>
//             </div>
//           </div>
//           </div>

//         </Col>
//         <Col lg={6} md={12}>
//         <div className="overview-content-box2">
//         <div className="content">
//             <div className="icon">
//               <img src={happyclient} alt="" />
//             </div>
//             <div className="content-text">
//               <ScrollTrigger
//                 onEnter={() => setCounterStart(true)}
//                 onExit={() => setCounterStart(false)}
//               >
//                 <h4>
//                   {counterStart && (
//                     <Countup start={0} end={78} duration={3} delay={0} />
//                   )}
//                   +
//                 </h4>
//                 <h4>Happy Clients</h4>
//               </ScrollTrigger>
//             </div>
//           </div>
//         </div>

//         </Col>

//         <Col lg={6} md={12}>
//           <div className="overview-content-box2">
//           <div className="content">
//             <div className="icon">
//               <img src={fblogo} alt="" />
//             </div>
//             <div className="content-text">
//               <ScrollTrigger
//                 onEnter={() => setCounterStart(true)}
//                 onExit={() => setCounterStart(false)}
//               >
//                 <h4>
//                   {counterStart && (
//                     <Countup start={0} end={25} duration={3} delay={0} />
//                   )}
//                   +K
//                 </h4>
//                 <h4>Likes</h4>
//               </ScrollTrigger>
//             </div>
//           </div>
//           </div>

//         </Col>

//         <Col lg={6} md={12}>
//           <div className="overview-content-box2">
//           <div className="content">
//             <div className="icon">
//               <img src={linkedin} alt="" />
//             </div>
//             <div className="content-text">
//               <ScrollTrigger
//                 onEnter={() => setCounterStart(true)}
//                 onExit={() => setCounterStart(false)}
//               >
//                 <h4>
//                   {counterStart && (
//                     <Countup start={0} end={18} duration={3} delay={0} />
//                   )}
//                   +K
//                 </h4>
//                 <h4>Followers</h4>
//               </ScrollTrigger>
//             </div>
//           </div>
//           </div>

//         </Col>
//       </Row>
//     </Col>
//   </Row>
// </Container>
// </div>
