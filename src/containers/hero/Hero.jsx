import React from 'react';
import Typewriter from 'typewriter-effect';

import './hero.css';

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className="app__hero-content">
        <h1>Hi, I'm <span>Ayomide</span></h1>
        <div id='text'>
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'UI Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
