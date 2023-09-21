import React from 'react';
import styles from './index.module.scss';

const SkillTable = (props) => {
  return (
    <div className={styles.skill}>
      <h2 className={styles.skill__title}>{props.title}</h2>
      <ul className={styles.skill__list}>
        {props.skills.map((skill, idnex) => <li className={styles['skill__list-item']} key={idnex}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default SkillTable;