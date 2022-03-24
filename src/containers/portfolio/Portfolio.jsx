import React from 'react';
import Projects from '../../components/projects/projects';
import './portfolio.css';

import { gpt3, gericht, jadoo, aimouse, tagcrypto, travek } from '../../assets';

const projectLinks = [
  {
    link: 'https://3gpt3.netlify.app/',
    img: gpt3
  },
  {
    link: 'https://app-gericht.netlify.app/',
    img: gericht
  },
  {
    link: 'https://jad-oo.netlify.app/',
    img: jadoo
  },
  {
    link: 'https://ai-mouse.netlify.app/',
    img: aimouse
  },
  {
    link: 'https://tagcrypto.netlify.app/',
    img: tagcrypto
  },
  {
    link: 'https://travek.netlify.app/',
    img: travek
  },
];

const Portfolio = () => {
  return (
    <div className='app__portfolio section__padding' id='works'>
      <div className="app__portfolio-heading">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="app__portfolio-content">
        {projectLinks.map((item, index) => (
          <Projects link={item.link} img={item.img} key={item.link + index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;