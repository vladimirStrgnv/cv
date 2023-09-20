import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

const GalleryCard = (props) => {
  return (
    <div className="card">
      {props.link
        ?
        <Link to={props.link}>
          <img src={props.src} alt="img" className="card__img" />
        </Link>
        :
          <img src={props.src} alt="img" className="card__img" />
      }
      <p>{props.descrpt}</p>
    </div>
  );
}

export default GalleryCard;