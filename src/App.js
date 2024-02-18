import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import MoodTracker from './Components/MoodTrcker/MoodTracker'; // Corrected import
import NotFound from "./Components/NoFile/NoFile"
import TherapistCardContainer from './Components/TherapistNearMe/TherapistContainer';


import './base.css'
import Login from './Components/Login/LoginIn';
import Test from './Components/Test';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mood" element={<MoodTracker/>} />
        <Route path='/therapistnearme' element={<TherapistCardContainer/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
