import React from 'react';
import './index.css';
import github from './assets/github.svg';
import email from './assets/email.svg';
import codewars from './assets/codewars.svg';
import hh from './assets/hh.svg';
import {HandySvg} from 'handy-svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <h2 className="footer__media-title">Медиа:</h2>
        <ul className="footer__media">
          <li>
            <a href='https://www.codewars.com/users/antipachita'><HandySvg src={codewars} className="footer__icon" width="40" height="40" /></a>
          </li>
          <li>
            <a href='https://github.com/vladimirStrgnv?tab=repositories'><HandySvg src={github} className="footer__icon" width="40" height="40" /></a>
          </li>
          <li>
            <a href='mailto:nice.strogonov@inbox.ru'><HandySvg src={email} className="footer__icon" width="40" height="40" /></a>
          </li>
          <li>
            <a href='https://rostov.hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header'><HandySvg src={hh} className="footer__icon" width="50" height="50" /></a>
          </li>
        </ul>
        <div className="footer_author">© Выполнил vladimirStrgnv 2023</div>
      </div>
    </footer>
  );
}

export default Footer;