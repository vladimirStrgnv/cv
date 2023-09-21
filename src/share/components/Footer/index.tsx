import styles from './index.module.scss'
import github from './assets/github.svg';
import email from './assets/email.svg';
import codewars from './assets/codewars.svg';
import hh from './assets/hh.svg';
import {HandySvg} from 'handy-svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <h2 className={styles["footer__media-title"]}>Медиа:</h2>
        <ul className={styles.footer__media}>
          <li>
            <a href='https://www.codewars.com/users/antipachita'><HandySvg src={codewars} className={styles.footer__icon} width="40" height="40" /></a>
          </li>
          <li>
            <a href='https://github.com/vladimirStrgnv?tab=repositories'><HandySvg src={github} className={styles.footer__icon} width="40" height="40" /></a>
          </li>
          <li>
            <a href='mailto:nice.strogonov@inbox.ru'><HandySvg src={email} className={styles.footer__icon} width="40" height="40" /></a>
          </li>
          <li>
            <a href='https://rostov.hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header'><HandySvg src={hh} className={styles.footer__icon} width="50" height="50" /></a>
          </li>
        </ul>
        <div className={styles.footer__author}>© Выполнил Владимир Строгонов 2023</div>
      </div>
    </footer>
  );
}

export default Footer;