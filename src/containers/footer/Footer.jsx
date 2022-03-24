import React from 'react';
import Baseline from '../../assets/Baseline.svg';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="app__footer-contents">
        <a href="#home"><img src={Baseline} alt="img" /></a>
        <a href="#home"><h3>Back To Top</h3></a>
        <div className="app__footer-contents_social">
          <a href="https://twitter.com/IIayomide" target="_blank" rel='noreferrer'><AiFillTwitterSquare /></a>
          <a href="https://www.linkedin.com/in/ayomide-adeyemi-69bb7915b/" target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
          <a href="https://github.com/the-aydev" target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <a href="mailto:ayomidedans@gmail.com?body=" ><AiOutlineMail /></a>
        </div>
        <p><span>&copy;2022 <strong>Ayomide Adeyemi.</strong> All Rights Reserved. </span></p>
      </div>
    </div>
  );
};

export default Footer;
