import React from 'react';
import AboutBanner from './AboutBanner';
import Header from '../Header';
import Footbar from '../Footbar';
import Skill from './Skill';
import AbtContent from './AbtContent';
import Wwr from './Wwr';




const AboutUs = () => {
  return (
    <div>
        <Header />
        <AboutBanner />
        <AbtContent />
        <Skill />
        <Wwr />
        <Footbar />

      
    </div>
  )
}

export default AboutUs
