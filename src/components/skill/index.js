import React from 'react';
import './index.css';

const Skill = (props) => {
  return (
    <li className='skill'>
        <h2 className='skill__title'>{props.title}</h2>
        <p className='skill__descrpt'>{props.descrpt}</p>
    </li>
  )
}

export default Skill;