import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { projetsData } from "./consts/projects";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const { name } = useParams();

  return (
    <motion.div
      className={styles["project-page"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className={styles["project-page__title"]}>
        {projetsData[name]?.title}
      </h2>
      <div className={styles["project-page__gallery"]}>
        <ImageGallery
          items={projetsData[name]?.images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <p className={styles["project-page__descrpt"]}>
        {projetsData[name]?.descrpt}
      </p>
      <p
        className={styles["project-page__tech"]}
      >{`Технологии: ${projetsData[name]?.tech}`}</p>
      <a
        href={projetsData[name]?.link}
        className={styles["project-page__app-link"]}
        target="_blank"
      >
        Ссылка на приложение
      </a>
    </motion.div>
  );
};

export default ProjectPage;
