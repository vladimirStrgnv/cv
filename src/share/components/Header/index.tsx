import styles from "./index.module.scss";
import Nav from "../Nav";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <NavLink to={ROUTES.main}>Портфолио</NavLink>
          </div>
          <Nav></Nav>
        </div>
      </header>
    </>
  );
};

export default Header;
