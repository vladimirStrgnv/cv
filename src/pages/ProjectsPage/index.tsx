import styles from  './index.module.scss';
import '../../global-styles/animation.scss';
import { Outlet } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <section className={styles.achivments}>
        <div className={styles.achivments__wrapper}>
          <Outlet></Outlet>
        </div>
    </section>
  );
};

export default ProjectsPage;