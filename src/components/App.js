import React, { Component } from 'react';

import '../assets/styles/App.css';
import Header from './Header'
import Products from './Products/Products'
import Footer from './Footer'
//import { Link, Route } from 'react-router-dom';
import Navigation from './Navigation';

const App = () => (
  <div>
    <Header />
    <Navigation />
    <Products />
    <Footer />
  </div>
)

export default App;
