import GalleryCard from "../../../../share/components/GalleryCard";
import distribution from "../../assets/projects/distribution.png";
import notif from "../../assets/projects/notif.jpg";
import postman from "../../assets/projects/postman.jpg";
import shd from "../../assets/projects/shd.webp";
import podvig from "../../assets/projects/podvig.jpg";
import apex from "../../assets/projects/apex.png";
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
            link={`${ROUTES.main}/${ROUTES.notif}`}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={postman}
            descrpt={"Виджет для отправки почты AMO crm"}
            link={`${ROUTES.main}/${ROUTES.postman}`}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={distribution}
            descrpt={"Распределение заявок"}
            link={`${ROUTES.main}/${ROUTES.distribution}`}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={shd}
            descrpt={"Система управления SpaceSAN"}
            link={`${ROUTES.main}/${ROUTES.shd}`}
          ></GalleryCard>
        </li>
        <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={podvig}
            descrpt={"Подвиг"}
            link={`${ROUTES.main}/${ROUTES.podvig}`}
          ></GalleryCard>
        </li>
        {/* <li className={styles["projects__project-list-item"]}>
          <GalleryCard
            src={apex}
            descrpt={"AppexBit"}
            link={`${ROUTES.main}/${ROUTES.apex}`}
          ></GalleryCard>
        </li> */}
      </ul>
    </div>
  );
};

export default ProjectsList;
