import React from 'react';
import './skills.css';
import Skill from '../../components/skill';

const Skills = () => {
  const skills = {
    languages: [
      'JavaScript+TypeScript'
    ],
    backend: [
      'NodeJS', 'MongoDB'
    ],
    frameworks: [
      'React', 'Express'
    ],
    other: [
      'HTML', 'CSS', 'SCSS', 'AJAX'
    ],
    tools: [
      'Git', 'VScode', 'Figma'
    ]
  }
  return (
    <div className='skills'>
        <h2 className='skills__title'>Навыки</h2>
        <div className='skills__list'>
            <Skill title={'Языки'} skills={skills.languages}></Skill>
            <Skill title={'Бэкенд'} skills={skills.backend}></Skill>
            <Skill title={'Библиотеки'} skills={skills.frameworks}></Skill>
            <Skill title={'Другое'} skills={skills.other}></Skill>
            <Skill title={'Инструменты'} skills={skills.tools}></Skill>
        </div>
    </div>
  )
}

export default Skills