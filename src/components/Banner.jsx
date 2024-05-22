import React from 'react';
import '../stylesheets/home/Banner.css';


const Banner = () => {
  return (
    <div id="banner">
      <div className="text">
      <h4>Hi, Welcome to BRIGHT CAREER</h4>
          <h1>First slide label</h1>
          <h1>Hi I am Text</h1>
          <h4>Half a Decade young and growing ..</h4>
      </div>
         <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#d8f5fe" 
        fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,213.3C840,
        224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,
        1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,
        60,320L0,320Z">
        </path>
        </svg>  
    </div>
  )
}

export default Banner
