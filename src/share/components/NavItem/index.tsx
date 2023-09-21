import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink to={props.path}>
        <li className={styles['links-list__item']}>
            {props.text}
        </li>
    </NavLink>
  )
}

export default NavItem;