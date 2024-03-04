// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="brand">
        Sugar Ease
      </Link>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/bidding">Contracts</Link>
        <Link to="/fod">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {/* Add more links as needed */}
      </div>
      
    </div>
  );
};

export default Navbar;
