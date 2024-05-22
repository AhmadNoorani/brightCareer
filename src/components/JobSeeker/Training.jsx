import React from 'react';
import '../../stylesheets/JobSeeker/training.css';
import Header from '../Header';
import Footbar from '../Footbar'

import trng2 from '../../assets/images/trng2.jpg';


const Training = () => {
  return (
    <>
    <Header />

    <div id="training">
        <div className="training-img">
            {/* <img src={trainingimg} alt="" /> */}
            <img src={trng2} alt="" />
            {/* <img src={trng3} alt="" /> */}
            {/* <img src={trng4} alt="" /> */}
        </div>
        <div className="trng-text">
            <p>YTS INC. is not only a manpower outsourcing company but also a training provider.
            We offer extensive training on different levels and domains, mentioned a few - Personality
            development Interview tips and questionnaire Grooming and soft skill training and more...
            To know more about our training feel free to call or drop an email at <span className="yellow-text">ahmed@yestechsoft.com</span> 
            ,or if you like to visit our office for face to face job discussion.<br/>
           <span className="yellow-text">Contact - 9681871428/8013525588 </span></p>
        </div>
        <div className="training-img-578">
           
            <img src={trng3} alt="" />
            
        </div>
       
    </div>
    <Footbar />
    </>
    
  )
}

export default Training
