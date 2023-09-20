import React from 'react';
import './nav-item.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <Link to={props.path}>
        <li className='links-list__item'>
            {props.text}
        </li>
    </Link>
  )
}

export default NavItem;