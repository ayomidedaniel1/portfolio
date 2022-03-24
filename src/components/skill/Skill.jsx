import React from 'react';
import './skill.css';

const Skill = ({ img, name }) => {
  return (
    <div className='app__skills-container__skill'>
      <div className="app__skills-container__skill-img">
        <img src={img} alt="img" />
      </div>
      <div className="app__skills-container__skill-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Skill;