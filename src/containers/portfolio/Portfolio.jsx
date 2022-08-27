import React from 'react';
import { gpt3, jadoo, tagcrypto, travek, amazon, smartspace } from '../../assets';
import Projects from '../../components/projects/projects';

import './portfolio.css';

const projectLinks = [
  {
    link: 'https://3gpt3.netlify.app/',
    img: gpt3
  },
  {
    link: 'https://tagcrypto.netlify.app/',
    img: tagcrypto
  },
  {
    link: 'https://jad-oo.netlify.app/',
    img: jadoo
  },
  {
    link: 'https://cloneio.web.app/',
    img: amazon
  },
  {
    link: 'https://travek.netlify.app/',
    img: travek
  },
  {
    link: 'https://master--smartspaceio.netlify.app/',
    img: smartspace
  },
];

const Portfolio = () => {
  return (
    <div className='app__portfolio section__padding' id='works'>
      <div className="app__portfolio-content">
        {projectLinks.map((item, index) => (
          <Projects link={item.link} img={item.img} key={item.link + index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;