import React from "react";
import ProjectPage from "../../share/components/ProjectPage";
import { NOTIF__PAGE__DATA } from "./consts";
import styles from "./index.module.scss";

export const NotifPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <ProjectPage
          title={NOTIF__PAGE__DATA.title}
          descrpt={NOTIF__PAGE__DATA.descrpt}
          images={NOTIF__PAGE__DATA.images}
          tech={NOTIF__PAGE__DATA.tech}
          link={NOTIF__PAGE__DATA.link}
        />
      </div>
    </div>
  );
};
