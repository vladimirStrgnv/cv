import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__wrapper wrapper'>
          <Link to='/cv' ><div className='logo'>Портфолио</div></Link>
          <Nav></Nav>
        </div>
      </header>
    </>
  )
}

export default Header;