import React from 'react';
import '../stylesheets/home/freeQuote.css';
import freeQuote from '../assets/images/freeQuote.jpg';
import Button from 'react-bootstrap/Button';

const FreeQoute = () => {
  return (
    <div id="freeQuote">
      <div className="bg-img">
        <img src={freeQuote} alt="" />
      </div>
      <div className="freeQuote-content-box">
        <div className="freeQuote-content-box-text">
          <h2>Let's Work Together</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nisi sequi ullam iure debitis iste facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nisi sequi ullam iure debitis iste facilis.</p>

        </div>
        <Button id="ask-button" variant="primary">Ask Free Quote</Button>{' '}
        
      </div>


      
    </div>
  )
}

export default FreeQoute
