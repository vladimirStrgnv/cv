import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink
      to={props.path}
      end 
      className={({ isActive, isPending }) =>
        isActive
          ? `${styles["links-list__item--active"]} ${styles["links-list__item"]}`
          : styles["links-list__item"]
      }
    >
      {props.text}
    </NavLink>
  );
};

export default NavItem;