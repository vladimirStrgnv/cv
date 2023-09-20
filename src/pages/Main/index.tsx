import React from 'react';
import styles from './index.scss';
import '../../global-css/animation.css';
import Greeting from './components/Greeting/index';
import ProjectsList from '../projects/projects-list';
import SkillsList from './components/SkillsList';

const Homepage = () => {
  return (
    <section className={styles.main}>
        <div className={styles.wrapper}>
          <Greeting></Greeting>
          <ProjectsList></ProjectsList>
          <SkillsList></SkillsList>
        </div>
    </section>
  );
};

export default Homepage;