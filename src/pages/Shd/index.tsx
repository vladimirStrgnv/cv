import ProjectPage from "../../share/components/ProjectPage";
import { DISTRIBUTION__PAGE__DATA } from "./consts";
import styles from "./index.module.scss";

export const ShdPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <ProjectPage
          title={DISTRIBUTION__PAGE__DATA.title}
          descrpt={DISTRIBUTION__PAGE__DATA.descrpt}
          images={DISTRIBUTION__PAGE__DATA.images}
          tech={DISTRIBUTION__PAGE__DATA.tech}
          link={DISTRIBUTION__PAGE__DATA.link}
        />
      </div>
    </div>
  );
};
