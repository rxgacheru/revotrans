import React from 'react';
import {Link} from 'react-router-dom';

import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">RevoTrans</div>
      <ul className="nav-menu">
        <li><Link to='/component/Home' >Home</Link>
        </li>
        <li><Link to='/component/Explore' >Explore</Link>
        </li>
        <li><Link to='/component/About' >About</Link>
        </li>
        <li><Link to='/component/Contact' >Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;