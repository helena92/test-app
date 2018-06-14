import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className="nav-flex-container">
        <Link className="Menu" to="/">Menu</Link>
        <Link className="Catering" to="/catering">Catering</Link>
        <Link className="About_Us" to="/about">About Us</Link>
        <Link className="Contact" to="/contact">Contact</Link>
    </nav>
)

export default Navigation;
