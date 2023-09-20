import React from 'react';
import './index.css';
import Button from '../../../../UI/button';
import GalleryCard from '../../../../components/gallery-card';
import lang from './assets/lang.jpg';
import notif from './assets/notif.jpg';
import postman from './assets/postman.jpg';

const Projects = () => {
  return (
    <div className="projects-cards">
      <div className="projects__header">
        <h2 className="projects__header-title">Проекты</h2>
        <Button text="Посмотреть все проекты" path="projects"></Button>
      </div>
      <div className="projects__cards-list">
        <GalleryCard
          src={notif}
          descrpt={"Виджет для уведомлений в AMO crm"}
          link={"projects/notif"}
        ></GalleryCard>
        <GalleryCard
          src={postman}
          descrpt={"Виджет для отправки почты AMO crm"}
          link={"projects/mails"}
        ></GalleryCard>
        <GalleryCard
          src={lang}
          descrpt={"Приложение для изучения языка со сбором статистики"}
          link={"projects/lang"}
        ></GalleryCard>
      </div>
    </div>
  );
};

export default Projects;