import GalleryCard from "../../../../share/components/GalleryCard";
import lang from "../../assets/projects/lang.jpg";
import notif from "../../assets/projects/notif.jpg";
import postman from "../../assets/projects/postman.jpg";
import styles from "./index.module.scss";
import { ROUTES } from "../../../../share/consts";

const ProjectsList = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projects__title}>Проекты</h2>
      <ul className={styles["projects__project-list"]}>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={notif}
            descrpt={"Виджет для уведомлений в AMO crm"}
            link={"notif"}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={postman}
            descrpt={"Виджет для отправки почты AMO crm"}
            link={`/${ROUTES.postman}`}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
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
