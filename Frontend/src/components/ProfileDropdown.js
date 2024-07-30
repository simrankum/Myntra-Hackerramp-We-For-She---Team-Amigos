import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileDropdown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="profile-dropdown">
            <button className="profile-btn" onClick={handleDropdownToggle}>
                <FontAwesomeIcon icon={faUser} className="profile-icon" />
                {/* <span>Profile</span> */}
            </button>
            {dropdownVisible && (
                <div className="dropdown-menu">
                    <p>Hello Simran Kumari</p>
                    <p>6202586666</p>
                    <Link to="/MyOrders" onClick={handleDropdownToggle}>Orders</Link>
                    <Link to="/wishlist" onClick={handleDropdownToggle}>Wishlist</Link>
                    <Link to="/gift-cards" onClick={handleDropdownToggle}>Gift Cards</Link>
                    <Link to="/contact-us" onClick={handleDropdownToggle}>Contact Us</Link>
                    <Link to="/myntra-insider" onClick={handleDropdownToggle}>Myntra Insider</Link>
                    <Link to="/myntra-credit" onClick={handleDropdownToggle}>Myntra Credit</Link>
                    <Link to="/coupons" onClick={handleDropdownToggle}>Coupons</Link>
                    <Link to="/saved-cards" onClick={handleDropdownToggle}>Saved Cards</Link>
                    <Link to="/saved-vpa" onClick={handleDropdownToggle}>Saved VPA</Link>
                    <Link to="/saved-addresses" onClick={handleDropdownToggle}>Saved Addresses</Link>
                    <Link to="/edit-profile" onClick={handleDropdownToggle}>Edit Profile</Link>
                    <Link to="/" onClick={handleDropdownToggle}>Logout</Link>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
