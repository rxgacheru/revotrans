import React from 'react';
import {Link} from 'react-router-dom';

import "./Navbar.css"
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
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
        {isLoggedIn ? (
            <>
            <li><button onClick={handleLogout}>Sign Out</button></li>
            </>
        ) : (
          <>
            <li><Link to='/component/Login'>Sign In</Link></li>
          </>
          )}
      </ul>
    </div>
  );
};

export default Navbar;