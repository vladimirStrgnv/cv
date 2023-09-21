import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link to='/cv' ><div className={styles.header__logo}>Портфолио</div></Link>
          <Nav></Nav>
        </div>
      </header>
    </>
  )
}

export default Header;