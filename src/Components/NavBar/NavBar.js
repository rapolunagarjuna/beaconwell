import React from "react";
import { Link } from 'react-router-dom';
import '../../base.css'
import './NavBar.css'
const NavBar = () =>{
    return (
        <div>
          <nav className="navbar body">
            <div className="navbar-brand">
              <Link to="/">Home</Link>
              <Link to="/mood">Mood Tracker</Link>
              <Link to="/contact">journaling</Link>
              <div className="auth-buttons">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
            </div>
          
          </nav>
          </div>
    )
}
export default NavBar;