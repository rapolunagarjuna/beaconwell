// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './login.css';

const Login = () => {
  return (
    <div className='w-full h-screen flex flex-col '>
      <NavBar className="absolute "></NavBar>

      <div className="login-container w-96 h-fit mx-auto my-auto">
        <h2 className='text-center'>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="bg-black" type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
    
  );
};

export default Login;
