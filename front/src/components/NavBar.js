import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

return (
    <div className="nav-bar">
  <ul>
  <Link to='/'>
  <li>Home</li>
  </Link>
  <Link to="/collection">
  <li>Collection</li>
  </Link>
  <Link to="/sign_in">
  <li>Log In/Sign Up</li>
  </Link>
  </ul>
    </div>
)

}

export default NavBar;
