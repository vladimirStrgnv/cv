import React from 'react';
import {HandySvg} from 'handy-svg';
import gmail from './assets/gmail.svg';
import tg from './assets/tg.svg';
import whtsp from './assets/whtsp.svg';
import './contact-list.css';

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li className='contact-list__item'>
        <HandySvg src={gmail} width="40" height="40" />
        <span className='contact-list__item-value'>vstroganov.reon@gmail.com</span>
      </li>
      <li className='contact-list__item'>
        <HandySvg src={tg} width="40" height="40" />
        <span className='contact-list__item-value'>@vladFtd</span>
      </li>
      <li className='contact-list__item'>
        <HandySvg src={whtsp} width="40" height="40" />
        <span className='contact-list__item-value'>7-908-199-36-38</span>
      </li>
    </ul>
  );
};

export default ContactList;