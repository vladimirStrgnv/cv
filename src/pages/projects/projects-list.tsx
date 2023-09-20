import React from "react";
import GalleryCard from "../../components/gallery-card";
import lang from './assets/projects/lang.jpg';
import notif from './assets/projects/notif.jpg';
import postman from './assets/projects/postman.jpg';
import "./projects-list.css";

const ProjectsList = () => {
  return (
    <div className="projects">
      <h2 className="projects__title">Проекты</h2>
      <ul className="projects__project-list">
        <li className="projects__project-list-item">
          <GalleryCard
            src={notif}
            descrpt={"Виджет для уведомлений в AMO crm"}
            link={"notif"}
          ></GalleryCard>
        </li>
        <li className="projects__project-list-item">
          <GalleryCard
            src={postman}
            descrpt={"Виджет для отправки почты AMO crm"}
            link={"mails"}
          ></GalleryCard>
        </li>
        <li className="projects__project-list-item">
          <GalleryCard
            src={lang}
            descrpt={"Приложение для изучения языка со сбором статистики"}
            link={"lang"}
          ></GalleryCard>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
