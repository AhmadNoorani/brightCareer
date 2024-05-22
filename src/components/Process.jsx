import React from 'react';
import '../stylesheets/home/process.css';
import pci1 from '../assets/images/pci1.jpg';
import pci2 from '../assets/images/pci2.jpg';
import pci3 from '../assets/images/pci3.jpg';
import pci4 from '../assets/images/pci4.jpg';

const Process = () => {
  return (
    <div id="process">
      <div className="container">
      <div className="container1">
    <div className="content-box">
        <div className="icon">
          <img src={pci1} alt="" />
        </div>
        <div className="content-text">
          <p>Talent Acquisition</p>
        </div>
      </div>

      <div className="content-box">
        <div className="icon">
        <img src={pci2} alt="" />
        </div>
        <div className="content-text">
        <p>Payroll Processing</p>
        </div>
      </div>
    </div>

    <div className="container2">
     <div className="content-box">
        <div className="icon">
        <img src={pci3} alt="" />
        </div>
        <div className="content-text">
        <p>Background Verification</p>
        </div>
      </div>

      <div className="content-box">
        <div className="icon">
        <img src={pci4} alt="" />
        </div>
        <div className="content-text">
        <p>End to End IT Solution</p>
        </div>
      </div>
    </div>
      </div>
   

     

      <svg className="process-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" 
        fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,213.3C840,
        224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,
        1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,
        60,320L0,320Z">
        </path>
        </svg> 
   
    </div>
  )
}

export default Process
