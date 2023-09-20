import React from 'react'
import './nav.css';
import NavItem from './nav-item';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links-list">
        <NavItem path='/cv' text='Главная'></NavItem>
        <NavItem path='projects' text='Проекты'></NavItem>
        <NavItem path='contacts' text='Контакты'></NavItem>
      </ul>
    </nav>
  );
};

export default Nav;