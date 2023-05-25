import React from 'react';
import './skills.css';
import Skill from '../../components/skill';

const Skills = () => {
  return (
    <div className='skills'>
        <h2 className='skills__title'>Навыки</h2>
        <ul className='skills__list'>
            <Skill title={'Языки'} descrpt={'JavaScript+TypeScript'}></Skill>
            <Skill title={'Бэкенд'} descrpt={'NodeJS MongoDB'}></Skill>
            <Skill title={'Библиотеки'} descrpt={'React Express'}></Skill>
            <Skill title={'Другое'} descrpt={'HTML CSS SCSS'}></Skill>
            <Skill title={'Инструменты'} descrpt={'Git VScode Figma'}></Skill>
        </ul>
    </div>
  )
}

export default Skills