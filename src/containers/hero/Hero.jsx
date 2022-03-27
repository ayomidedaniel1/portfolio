import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import './hero.css';


const Hero = () => {
  return (
    <div className='app__hero'>
      <div className="app__hero-content">
        <h2>Hi, I'm</h2>
        <h1>Ayomide</h1>
        <p>Fullstack Developer / UI Designer</p>
        <div className='app__hero-content_space' />
        <div className="app__hero-content_links">
          <a href="https://twitter.com/IIayomide" target="_blank" rel='noreferrer'><AiFillTwitterSquare /></a>
          <a href="https://github.com/the-aydev" target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/ayomide-adeyemi-69bb7915b/" target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
