import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import './footer.css';


const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="app__footer-contents">
        <div className="app__footer-contents_social">
          <a href="https://twitter.com/IIayomide" target="_blank" rel='noreferrer'><AiFillTwitterSquare /></a>
          <a href="https://www.linkedin.com/in/ayomide-adeyemi-69bb7915b/" target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
          <a href="https://github.com/the-aydev" target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <p><span>&copy;2022 <strong>the-Aydev.</strong></span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
