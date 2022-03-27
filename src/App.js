import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, About, Contact } from './components';
import { Hero, Skills, Portfolio, Footer } from './containers';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='home' id='home'>
        <Navbar />
        <Hero />
      </div>
      <div className='grad__abt'>
        <About />
        <Skills />
      </div>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
