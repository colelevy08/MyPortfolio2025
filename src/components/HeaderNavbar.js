import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../HeaderNavbar.css';  // Import the CSS file for styling

const HeaderNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          {/* Hamburger Icon */}
          <div className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* Home link */}
          <Link to="/" className="navbar-item">Home</Link>
        </div>
        {/* Dropdown Menu */}
        <div className="dropdown-container">
          <Link to="/Education" className="dropdown-item">Education</Link>
          <Link to="/WorkHistory" className="dropdown-item">Work History</Link>
          <Link to="/Timeline" className="dropdown-item">Timeline</Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
// In the code snippet above, we have created a HeaderNavbar component that displays a navigation bar with a Home link and a dropdown menu. The dropdown menu contains links to the Education, WorkHistory, and Timeline components.