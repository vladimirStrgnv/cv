import styles from './index.module.scss';
import Button from '../../../../share/components/Button';
import { motion } from "framer-motion";
import { educationListInfo } from '../../consts';

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

const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <h2 className={styles.greeting__title}>Строгонов Владимир<br />front-end разработчик</h2>
      <Button text={"Связаться со мной"} path={"contacts"}></Button>
      <h3 className={styles.greeting__subtitle}>Опыт работы</h3>
      <ul className={styles["greeting__experience-list"]}>
        <li className={styles["greeting__experience-item"]}>
          JS full stack developer в компании REON c 04.09.2022 по
          10.09.2023
        </li>
        <p>
          Занимался созданием виджетов для срм системы amoCRM. Выполнял задания
          связанные с серверной частью приложения, на таких технологиях, как
          express и mongoDB, так и задания связанные с клиентской частью
          приложения, приемущественно на таких технологиях, как React + Redux и
          Vue 3.
          Прошел восьмимесячный курс от компании EPAM на сертификат по frontend разработке.
        </p>
      </ul>
      <h3 className={styles.greeting__subtitle}>Образование</h3>
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
}

export default Greeting;