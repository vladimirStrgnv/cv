import React from "react";
import ProjectPage from "../../share/components/ProjectPage";
import { POSTMAN__PAGE__DATA } from "./consts";
import styles from "./index.module.scss";

export const PostmanPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <ProjectPage
          title={POSTMAN__PAGE__DATA.title}
          descrpt={POSTMAN__PAGE__DATA.descrpt}
          images={POSTMAN__PAGE__DATA.images}
          tech={POSTMAN__PAGE__DATA.tech}
          link={POSTMAN__PAGE__DATA.link}
        />{" "}
      </div>
    </div>
  );
};
