import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'

const NavBar = (props) => {

// function links() {
//   if (props.user) {
//     return   <li onClick={props.logout}>Log Out</li>
//   } else if (props.newUser) {
//     return <Link to="/log_in"><li>Log In</li></Link>
//   } else {
//     return <div><Link to="/sign_up"><li>Sign Up</li></Link><Link to="/log_in">  <li>Log In</li>  </Link></div>
//   }
// }

return (
    <div className="nav-bar">
  <ul>
  <Link to='/'>
  <li>Home</li>
  </Link>
  <Link to="/collection">
  <li>Collection</li>
  </Link>
  <Input icon='search' value={props.value} onChange={(e) => props.handleSearch(e)} placeholder='Search...' />
  {(!props.user) ? <Link to="/log_in"><li>Log In</li></Link> : <li onClick={props.logout}>Log Out</li> }
  </ul>
    </div>
)

}

export default NavBar;
