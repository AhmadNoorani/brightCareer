import React from "react";
import "../../stylesheets/AboutUs/abtContent.css";
import abc2 from "../../assets/images/abc2.jpg";


const AbtContent = () => {
  return (
    <div id="abtContent">
      <div className="ab-content">
        <div className="images">
          
          <img src={abc2} id="img-2" alt="" />
        </div>
        <div className="abc-textBox">
          <h3>BRIGHT CAREER</h3>
          <p>Benchmark Global Management is a team of professionals who have 
            been working with recruitment process outsourcing companies
             in various fields for more than a decade. We have now come
              together and formed Benchmark Global Management to provide 
              360 degrees recruitment services.
          </p>
          <p>We intend to provide you complete strategic human resource
             management solutions which includes.</p>
          <ul>
            <li>Manpower Planning</li>
            <li>Staffing</li>
            <li>Training and Development of Workforce</li>
          </ul>
        </div>
      </div> 
      
    </div>
  );
};

export default AbtContent;





   

