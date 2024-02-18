// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import backgroundImage from '../background.png';
import NavBar from "../NavBar/NavBar";
const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
     <NavBar/>
      <div className="content" >
        <h1>Welcome to BeaconWell</h1>
        <p>We are dedicated to improving mental health and well-being.</p>
      </div>
    </div>
  )
};

export default LandingPage;
