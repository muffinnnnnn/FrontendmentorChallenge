import React from 'react';

function Header() {
    return (
        <header className="nav-container">
            <div className="nav-icon">
                <img src="images/logo.svg" alt="logo" />
            </div>
            <div className="nav-child">
                <ul className="menu-nav">
                    <li onMouseOver={navMouseHandle}>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </header>
    );
}

function navMouseHandle() {
    // Handle the mouseover event here
    // You can add your logic for handling the event
}

export default Header;
