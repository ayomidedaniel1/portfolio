import React from 'react';
import './projects.css';

const Projects = ({ img, link }) => {
  return (
    <div className='app__portfolio-container__projects'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt="img" target='_blank' />
      </a>
    </div>
  );
};

export default Projects;