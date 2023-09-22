import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
        <div className={styles.header__logo}><Link to='/cv' >Портфолио</Link></div>
          <Nav></Nav>
        </div>
      </header>
    </>
  )
}

export default Header;