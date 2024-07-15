import React from "react";
import styles from "./index.module.scss";
import NavItem from "../NavItem";
import { ROUTES } from "../../consts";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__links-list"]}>
        <NavItem path={"/cv"} text="Главная"></NavItem>
        <NavItem path={ROUTES.projects} text="Проекты"></NavItem>
        <NavItem path={ROUTES.contacts} text="Контакты"></NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
