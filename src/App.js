import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, Contact, Navbar } from './components';
import { Footer, Hero, Portfolio, Skills } from './containers';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='div' />
      <Routes>
        <Route path='/' exact element={<Hero />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/skills' exact element={<Skills />} />
        <Route path='/portfolio' exact element={<Portfolio />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
