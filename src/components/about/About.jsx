import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='app__about section__padding' id='about'>
      <div className="app__about-heading">
        <h1>ABOUT ME</h1>
      </div>
      <div className="app__about-content">
        <p>
          I'm a <span>Full-Stack</span> Developer. As a developer, I create with code attractive designs aimed at solving problems and successfully communicating to its target audience.
        </p>
        <p>
          The main area of my <span>expertise</span> is the <span>Frontend</span> and everything related to the client side of the web. I am also acquitted with the backend favouring the use of the python framework <span>Django</span>. I build small and medium web apps with feature rich content while adhering to the best practices to create awesome <span>user experiences</span>.
        </p>
        <p>
          I am enthusiastic about learning new <span>technologies</span> as I have begun dabbling in <span>React native</span>. More than anything, I am always willing to learn and adapt to the ever-changing facets of the web.
        </p>
      </div>
    </div >
  );
};

export default About;
