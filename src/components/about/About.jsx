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
          Hi, I’m Ayomide, a Full-Stack Developer. As a developer, I create with code attractive designs that solve problems efficiently and successfully communicate to its target audience.
        </p>
        <p>
          The main area of my expertise is the Frontend and everything related to the client side of the web. Using the python framework Django for the backend, I build small and medium web apps with feature rich content and animations using different frontend technologies - HTML, CSS, JS and React.js to create awesome user experiences.
        </p>
        <p>
          I am enthusiastic in learning new technologies in which I have begun dabbling in React native. More than anything, I am always eager and willing to learn and adapt to the ever-changing facets of the web.
        </p>
      </div>
    </div >
  );
};

export default About;
