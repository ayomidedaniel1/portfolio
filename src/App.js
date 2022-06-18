import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Contact, Navbar } from './components';
import { Footer, Hero, Portfolio, Skills } from './containers';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className='div' />
        <Routes>
          <Route path='/' exact element={<Hero />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/skills' exact element={<Skills />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
