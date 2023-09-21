import React from 'react'
import styles from './index.module.scss';
import NavItem from '../NavItem';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        <NavItem path='/cv' text='Главная'></NavItem>
        <NavItem path='projects' text='Проекты'></NavItem>
        <NavItem path='contacts' text='Контакты'></NavItem>
      </ul>
    </nav>
  );
};

export default Nav;