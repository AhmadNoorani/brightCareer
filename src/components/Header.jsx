import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo-outsrc.png";
import "../stylesheets/Header.css";
import { Link } from "react-router-dom";


const Header = () => {

  const [color, setColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <div id="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        className= {color ? "showNavColor" : " bg-body-tertiary"}
      >
        <Container>
          <Navbar.Brand to="/">
            <Link to="/"><img src={Logo} alt="" /></Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* THIS COULD BE USE IF YOU WANT TOH SET NAV-LINKS IN LEFT SIDE */}
            </Nav>

            {/* This Nav is use to set nav-links in right side */}
            <Nav>
              <Link to="/about-us">AboutUs</Link>
              <Link to="/job-seeker">Job-Seekers</Link>
              <Link to="/online-registration">Online-Registration</Link>
              <Link to="/contact-us">Contact-Us</Link>
              <Link to="/login" type="button">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
