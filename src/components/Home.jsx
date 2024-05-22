import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Process from './Process';
import FreeQuote from './FreeQuote';
import Overview from './Overview';
import ProvideServices from './ProvideServices';
import Footbar from './Footbar';
import Slider from './Slider';



const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Process />
        <FreeQuote />
        <Overview />
        <Slider />
        <Footbar /> 
    </div>
  )
}

export default Home
