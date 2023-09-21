import { notif, postman, lang } from "../../../share/components/ProjectPage/consts/images";

export const educationListInfo = [
  " Реклама и связь с общественностью (ЮФУ, 2017-2021, оконченное высшее образование)",
  "Гостиничное дело (ЮФУ, 2021-2023, неоконченное высшее образование)",
  "Информатика и вычислительная техника (ЮФУ, 2020-2022, неоконченное высшее образование)",
  " Стажировка в Ylab с 10.05.2023 по 10.06.2023",
  "Обучение в RS School(Epam) с 23.02.2022 по 20.09.2022",
];

export const hardSkills = {
    languages: [
      'JavaScript+TypeScript'
    ],
    backend: [
      'NodeJS', 'MongoDB'
    ],
    ['frameworks/labs']: [
      'React', 'Express', 'node-shedule', 'multer', 'Vue 3'
    ],
    other: [
      'HTML', 'CSS', 'SCSS', 'AJAX','REST', 'CRUD'
    ],
    tools: [
      'Git', 'VScode', 'Figma'
    ]
}

export const projectCardsInfo = [
    {
        descrpt: 'Виджет для уведомлений в AMO crm"',
        link: 'projects/notif',
        img: notif
    },
    {
        descrpt: 'Виджет для отправки почты AMO crm',
        link: 'projects/mails',
        img: postman
    },
    {
        descrpt: 'Приложение для изучения языка со сбором статистики',
        link: 'projects/lang',
        img: lang
    }
]      