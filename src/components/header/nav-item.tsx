import React from 'react';
import './nav-item.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink to={props.path}>
        <li className='links-list__item'>
            {props.text}
        </li>
    </NavLink>
  )
}

export default NavItem;