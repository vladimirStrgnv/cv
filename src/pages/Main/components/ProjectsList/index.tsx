import styles from './index.module.scss';
import Button from '../../../../UI/button';
import GalleryCard from '../../../../components/gallery-card';

import { projectCardsInfo } from '../../consts';
import { motion } from "framer-motion";

const listAnimationConfig = {
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0, x:100 },
};

const ProjectsList = () => {

  return (
    <section className={styles.projects}>
      <div className={styles.projects__header}>
        <h2 className={styles.projects__title}>Проекты</h2>
        <Button text="Посмотреть все проекты" path="projects"></Button>
      </div>
      <ul className={styles["projects__cards-list"]}>
        {projectCardsInfo.map((card, index) => (
          <motion.li
            key={index}
            variants={listAnimationConfig}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <GalleryCard
              src={card.img[0].original}
              descrpt={card.descrpt}
              link={card.link}
            ></GalleryCard>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;