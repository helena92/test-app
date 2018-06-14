import React from 'react';
//import { Link, Route } from 'react-router-dom';
import Contact from './Contact'

const Navigation = () => (
    <nav className="nav-flex-container">
        <a className="Menu">Menu</a>
        <a className="Catering">Catering</a>
        <a className="About_Us">About Us</a>
        <a className="Contact">Contact</a>
        {/* <a class="Contact"><Link to="/contact">Contact</Link></a> */}
        {/* <Route path="/contact" component={Contact} /> */}
    </nav>
)

export default Navigation;
