import React from 'react';
import './index.css';

const Skill = (props) => {
  return (
    <div className='skill'>
      <h2 className='skill__title'>{props.title}</h2>
      <ul className='skill__list'>
        {props.skills.map((skill, idnex) => <li className='skill__list-item' key={idnex}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skill;