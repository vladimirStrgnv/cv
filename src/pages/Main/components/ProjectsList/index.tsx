import styles from "./index.module.scss";
import Button from "../../../../share/components/Button";
import GalleryCard from "../../../../share/components/GalleryCard";

import { projectCardsInfo } from "../../consts";
import { motion } from "framer-motion";

const animationDelay = 5;
const listAnimationConfig = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0, x: 100 },
};

const ProjectsList = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projects__header}>
        <h2 className={styles.projects__title}>Проекты</h2>
        <Button text="Посмотреть все проекты" path="projects"></Button>
      </div>
      <motion.ul
        className={styles["projects__cards-list"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectCardsInfo.map((card, index) => (
          <motion.li key={index} variants={listAnimationConfig} custom={index+animationDelay} >
            <GalleryCard
              src={card.img[0].original}
              descrpt={card.descrpt}
              link={card.link}
            ></GalleryCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsList;
