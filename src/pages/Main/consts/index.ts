import notif from "../assets/notif.jpg";
import postman from "../assets/postman.jpg";
import distribution from "../assets/distribution.png";
import { ROUTES } from "../../../share/consts";

export const educationListInfo = [
  " Реклама и связь с общественностью (ЮФУ, 2017-2021, оконченное высшее образование)",
  "Гостиничное дело (ЮФУ, 2021-2023)",
  "Информатика и вычислительная техника (ЮФУ, 2020-2025)",
  "Стажировка в RSS  с 01.09.2021 по 10.09.2022",
  "Full stack разработчик в компании REON 10.09.2022 по 20.09.2023",
  "Middle React разработчик  в компании Беттинг КО (проектная занятость) 01.10.2023 по 20.12.2023",
  "Middle React разработчик в ФГАНУ НИИ Спецвузавтоматика  c января 2024 по текущее время",
];

export const hardSkills = {
  languages: ["JavaScript+TypeScript"],
  backend: ["NodeJS", "MongoDB"],
  ["frameworks/labs"]: ["React", "Express", "node-shedule", "multer", "Vue 3"],
  other: ["HTML", "CSS", "SCSS", "AJAX", "REST", "CRUD"],
  tools: ["Git", "VScode", "Figma"],
  ["react ecosystem"]: [
    "React-router",
    "React-hook-form",
    "Redux/Rtk",
    "React-framer-motion",
    "Mui",
    "Mobx",
    "Next",
  ],
};

export const projectCardsInfo = [
  {
    descrpt: 'Виджет для уведомлений в AMO crm"',
    link: `${ROUTES.main}/${ROUTES.notif}`,
    img: notif,
  },
  {
    descrpt: "Виджет для отправки почты AMO crm",
    link: `${ROUTES.main}/${ROUTES.postman}`,
    img: postman,
  },
  {
    descrpt:
      "Приложение для распределения лидов среди менеджеров по определенному типу конверсии",
    link: `${ROUTES.main}/${ROUTES.distribution}`,
    img: distribution,
  },
];
