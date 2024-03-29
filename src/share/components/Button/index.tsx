import { Link } from "react-router-dom";
import styles from  "./index.module.scss";

const Button = (props) => {
  return (
    <Link to={props.path}>
      <button className={styles.nav__btn}>
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
