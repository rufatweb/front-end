import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon} from 'semantic-ui-react'

const NavBar = (props) => {


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
  <Link to="/cart">
  <li><Icon name="shopping cart"/></li>
  </Link>
  </ul>
    </div>
)

}

export default NavBar;
