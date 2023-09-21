
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { projetsData } from './consts/projects';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './index.module.scss';

const ProjectPage = () => {
    const {name} = useParams();

    return (
      <div className={styles['project-page']}>
        <h2 className={styles['project-page__title']}>{projetsData[name]?.title}</h2>
        <div className={styles['project-page__gallery']}><ImageGallery items={projetsData[name]?.images} showFullscreenButton={false} showPlayButton={false}/></div>
        <p className={styles['project-page__descrpt']}>{projetsData[name]?.descrpt}</p>
        <p className={styles['project-page__tech']}>{`Технологии: ${projetsData[name]?.tech}`}</p>
        <a href={projetsData[name]?.link} className={styles['project-page__app-link']} target="_blank" >Ссылка на приложение</a>
      </div>
    );
}

export default ProjectPage;