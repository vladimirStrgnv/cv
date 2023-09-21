import styles from "./index.module.scss";
import Skill from "../../../../share/components/SkillTable";
import { hardSkills } from "../../consts";
import { motion } from "framer-motion";

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

const SkillsList = () => {
  return (
    <div className={styles.skills}>
      <h2 className={styles.skills__title}>Навыки</h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        className={styles.skills__list}
      >
        {Object.entries(hardSkills).map((skill, index) => (
          <motion.li
            className={styles["skills__list-item"]}
            key={index}
            variants={listAnimationConfig}
            custom={index}
          >
            {<Skill title={skill[0]} skills={skill[1]}></Skill>}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SkillsList;
