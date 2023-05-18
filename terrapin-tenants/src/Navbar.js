import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/view-listings">Listings</a></li>
        <li><a href="/add-listing">Add Listing</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
