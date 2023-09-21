import styles from './index.module.scss'
import { Link } from 'react-router-dom';

const GalleryCard = (props) => {
  return (
    <div className={styles.card}>
      {props.link
        ?
        <Link to={props.link}>
          <img src={props.src} alt="img" className={styles.card__img}/>
        </Link>
        :
          <img src={props.src} alt="img" className={styles.card__img} />
      }
      <p>{props.descrpt}</p>
    </div>
  );
}

export default GalleryCard;