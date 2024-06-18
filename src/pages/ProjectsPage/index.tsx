import styles from "./index.module.scss";
import { motion } from "framer-motion";
import AchivementList from "./components/AchivmentList";

const ProjectsPage = () => {
  return (
    <motion.section
      className={styles.achivments}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.achivments__wrapper}>
        <AchivementList></AchivementList>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
