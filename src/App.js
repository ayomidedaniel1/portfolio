import React from 'react';
import './App.css';
import { About, Contact, Navbar } from './components';
import { Footer, Hero, Portfolio, Skills } from './containers';

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
