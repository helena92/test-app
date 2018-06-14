import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header'
import Products from './Products/Products'
import Footer from './Footer'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Contact from './Contact';

const App = () => (
  <Router>
    <div>
      <Header />
      <Navigation />
      <Route exact path='/' component={Products} />
      <Route path='/contact' component={Contact} />
      <Footer />
    </div>
  </Router>
)

export default App;
