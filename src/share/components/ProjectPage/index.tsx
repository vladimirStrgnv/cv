import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

interface IProjectPage {
  title: string;
  images: Record<string, string>[];
  descrpt: string;
  tech: string;
  link: string;
}

const ProjectPage: React.FC<IProjectPage> = ({
  title,
  images,
  descrpt,
  tech,
  link,
}) => {
  return (
    <motion.div
      className={styles["project-page"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className={styles["project-page__title"]}>{title}</h2>
      <div className={styles["project-page__gallery"]}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
      <p className={styles["project-page__descrpt"]}>{descrpt}</p>
      <p className={styles["project-page__tech"]}>{`Технологии: ${tech}`}</p>
      <a
        href={link}
        className={styles["project-page__app-link"]}
        target="_blank"
      >
        Ссылка на приложение
      </a>
    </motion.div>
  );
};

export default ProjectPage;
