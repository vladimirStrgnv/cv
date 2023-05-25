
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { projetsData } from './consts/projects';
import "react-image-gallery/styles/css/image-gallery.css";
import './index.css';

const ProjectPage = () => {
    const {name} = useParams();

    return (
      <div className='project-page'>
        <h2 className='project-page__title'>{projetsData[name]?.title}</h2>

        <div className='project-page__gallery'><ImageGallery items={projetsData[name]?.images} showFullscreenButton={false} showPlayButton={false}/></div>
        <p className='project-page__descrpt'>{projetsData[name]?.descrpt}</p>
        <p className='project-page__tech'>{`Технологии: ${projetsData[name]?.tech}`}</p>
        <a href={projetsData[name]?.link} className='project-page__app-link' target="_blank"  >Ссылка на приложение</a>
      </div>
    );
}

export default ProjectPage;