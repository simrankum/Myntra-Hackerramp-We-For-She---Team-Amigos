// src/Navbar.js
import React from 'react';
import './Navbar.css';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/mlogo.jpeg" alt="Logo" style={{ width: '60px', height: 'auto' }} />
      </div>
      <ul className="navbar-links">
        <li><a href="#men">MEN</a></li>
        <li><a href="#women">WOMEN</a></li>
        <li><a href="#kids">KIDS</a></li>
        <li><a href="#home-living">HOME & LIVING</a></li>
        <li>
          <a href="/trend" className='nav-genZ'>
            Gen Z Trends
            <span className="new-label">NEW</span>
          </a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="navbar-icons">
        <ProfileDropdown/>
        <a href="#wishlist">Wishlist</a>
        <a href="#bag">Bag</a>
      </div>
    </nav>
  );
};

export default Navbar;
