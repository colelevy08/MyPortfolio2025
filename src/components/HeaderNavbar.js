import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const HeaderNavbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/">Home</a>
                </div>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/Education">Education</Link> {/* Link to Education */}
                    </li>
                    <li>
                        <Link to="/WorkHistory">Work History</Link> {/* Link to WorkHistory */}
                    </li> 
                    <li>
                        <Link to="/Timeline">Timeline</Link>   {/* Link to Timeline */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNavbar;
