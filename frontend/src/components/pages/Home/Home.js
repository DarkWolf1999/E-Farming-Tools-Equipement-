import React from 'react';
import '../../../App.css';
import HeroSection from './HeroSection';
import Cards from './SampleCards/Cards';
import Footer from './../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import Card1 from './SampleCards/Card1';





function Home() {
  return (
    <div> 
      
      <HeroSection />
      {/* <Cards/> */}
      <Card1/>
      <Footer/>
    </div>
  );
}

export default Home;
