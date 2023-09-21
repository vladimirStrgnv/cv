import styles from  './index.module.scss';
import '../../global-styles/animation.scss';
import { Outlet } from 'react-router-dom';
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.section
      className={styles.achivments}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.achivments__wrapper}>
        <Outlet></Outlet>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;