import GalleryCard from "../../../../share/components/GalleryCard";
import distribution from "../../assets/projects/distribution.png";
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
            link={`/${ROUTES.notif}`}
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
            src={distribution}
            descrpt={"Распределение заявок"}
            link={`/${ROUTES.distribution}`}
          ></GalleryCard>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
