import styles from "./index.module.scss";
import Button from "../../../../share/components/Button";
import { motion } from "framer-motion";
import { educationListInfo } from "../../consts";

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

const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <h2 className={styles.greeting__title}>
        Строгонов Владимир
        <br />
        front-end разработчик
      </h2>
      <Button text={"Связаться со мной"} path={"contacts"}></Button>
      <h3 className={styles.greeting__subtitle}>Обязанности</h3>
      <ul className={styles["greeting__experience-list"]}>
        <li className={styles["greeting__experience-item"]}>
          <h3 className={styles["greeting__experience-subtitle"]}>
            Стажер в компании RSS с декабря 2021 по сентябрь 2022
          </h3>
          <p>
            Прохождение образовательной программы компании. Работа в команде над
            проектом по изучению иностранного языка Lang.
          </p>
        </li>
        <li className={styles["greeting__experience-item"]}>
          <h3 className={styles["greeting__experience-subtitle"]}>
            JS full stack developer в компании REON с сентября 2022 по сентябрь
            2023
          </h3>
          <p>
            Занимался созданием виджетов для срм системы amoCRM. Выполнял
            задания связанные с серверной частью приложения, на таких
            технологиях, как express и mongoDB, так и задания связанные с
            клиентской частью приложения, приемущественно на таких технологиях,
            как React + Redux и Vue 3.
          </p>
        </li>
        <li className={styles["greeting__experience-item"]}>
          <h3 className={styles["greeting__experience-subtitle"]}>
            Frontend-разработчик в ФГАНУ НИИ Спецвузавтоматика с декабря 2024
          </h3>
          <p>
            Поддержка и разработка веб проектов в стеке React, typescript, rtk,
            react-hook-form, react-router-6, mui, module css, fsd.
          </p>
        </li>
      </ul>
      <h3 className={styles.greeting__subtitle}>Опыт работы/Образование</h3>
      <ul className={styles["greeting__education-list"]}>
        {educationListInfo.map((text, index) => (
          <motion.li
            className={styles["greeting__education-item"]}
            variants={listAnimationConfig}
            initial="hidden"
            animate="visible"
            custom={index}
            key={index}
          >
            {text}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Greeting;
