import styles from "./index.module.scss";
import Greeting from "./components/Greeting/index";
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Greeting></Greeting>
        <ProjectsList></ProjectsList>
        <SkillsList></SkillsList>
      </motion.div>
    </div>
  );
};

export default Main;
