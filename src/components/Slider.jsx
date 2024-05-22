import React from "react";
import "../stylesheets/home/slider.css";

import Carousel from "better-react-carousel";
import slider1 from "../assets/images/serviceImage/hr.jpg";
import slider2 from "../assets/images/serviceImage/it.jpg";
import slider3 from "../assets/images/serviceImage/techEducation.jpg";
import slider4 from "../assets/images/serviceImage/manufacturing.jpg";
import slider5 from "../assets/images/serviceImage/event.jpg";
import slider6 from "../assets/images/serviceImage/retail.jpg";
import slider7 from "../assets/images/serviceImage/sales.jpg";
import slider8 from "../assets/images/serviceImage/engineering.jpg";
import slider9 from "../assets/images/serviceImage/fmcg.jpg";
import slider10 from "../assets/images/serviceImage/marketing.jpg";

const Slider = () => {
  const responsive =
    {
      breakpoint:768,
      cols: 2,
      rows: 1,
      gap: 10,
      loop: true,
      
    }
  
  return (
    <>
      <div className="slider">
        <div className="heading">
          <h1>SECTORS WHERE WE PROVIDING SERVICES</h1>
        </div>
        <div className="slider-cards">
          <Carousel {...responsive} cols={2} rows={1} gap={20} showDots={true} scrollSnap={true} loop={true} >
            <Carousel.Item>
              <img width="100%" src={slider1} />
              <div className="carousel-text">
                <h4>Human Resources</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider2} />
              <div className="carousel-text">
                <h4>Information Technology</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider3} />
              <div className="carousel-text">
                <h4>Tech Education</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider4} />
              <div className="carousel-text">
                <h4>Manufacturing</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider5} />
              <div className="carousel-text">
              <h4>Event management</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider6} />
              <div className="carousel-text">
              <h4>Retails</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider7} />
              <div className="carousel-text">
              <h4>Sales</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider8} />
              <div className="carousel-text">
              <h4>Engineering</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider9} />
              <div className="carousel-text">
                <h4>FMCG</h4>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src={slider10} />
              <div className="carousel-text">
                <h4>Digital Marketing</h4>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
