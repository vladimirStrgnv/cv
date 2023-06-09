import { notif, postman, lang  } from './images';


const projetsData = {
  lang: {
    title: "Lang(в разработке)",
    images: lang,
    descrpt:
      "Приложение для изучения английского языка. Приложение состоит из учебника, вклюающего себя 3600 слов, страницы статистики и 2х игр.",
    tech: "React, CSS modules, React Router, Redux",
    link: 'https://github.com/vladimirStrgnv/lang/tree/development'
  },
  notif: {
    title: "Виджет уведомления от компании Reon",
    images: notif,
    descrpt:
      "Виджет отправляет пуш-уведомления в день события всем коллегам кроме именинника. Так же виджет позволяет напоминать о любых других важных событиях, достаточно просто указать дату и способ уведомления.",
    tech: "Express.js, dayJs, node-shedule, mongoDB",
    link: 'https://reon.pro/reminders'
  },
  mails: {
    title: "Виджет для отправки электронной почты от компании Reon",
    images: postman,
    descrpt:
      "Виджет позволяет расширить стандартный функционал amoCRM для работы с письмами. Предотсавляет возможность персонализировать письма; осуществлять предпросмотр  и отложенную отправку, создавать шаблоны.",
    tech: "Frontend: Vue.js 3, naive-ui. Backend: express.js, node-shedule, nodemailer, multer, dayjs, mongoDB",
    link: 'https://reon.pro/email2'
  },
};

export {projetsData};