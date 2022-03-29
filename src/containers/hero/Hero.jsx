import React from 'react';
import './hero.css';

const Hero = () => {
  const p = document.getElementById('text');
  const text = 'Fullstack Developer / UI Designer';
  let idx = 1;

  setInterval(write, 115);
  function write () {
    p.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      idx = 1;
    }
  }

  return (
    <div className='app__hero'>
      <div className="app__hero-content">
        <h1>Hi, I'm <span>Ayomide</span></h1>
        <p id='text'>{text}</p>
      </div>
    </div>
  );
};

export default Hero;
