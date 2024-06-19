import image from "../assets/1.jpg";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import styles from "../index.module.scss";

const postman = [
  {
    original: image,
    thumbnail: image,
    originalClass: styles["img"],
    thumbnailHeight: "50px",
    
  },
  {
    original: image2,
    thumbnail: image2,
    originalClass: styles["img"],
    thumbnailHeight: "50px",
  },
  {
    original: image3,
    thumbnail: image3,
    originalClass: styles["img"],
    thumbnailHeight: "50px",
  },
  {
    original: image4,
    thumbnail: image4,
    originalClass: styles["img"],
    thumbnailHeight: "50px",
  },
];

export const NOTIF__PAGE__DATA = {
  title: "Виджет уведомления от компании Reon",
  images: postman,
  descrpt:
    "Виджет отправляет пуш-уведомления в день события всем коллегам кроме именинника. Так же виджет позволяет напоминать о любых других важных событиях, достаточно просто указать дату и способ уведомления.",
  tech: "Express.js, dayJs, node-shedule, mongoDB",
  link: "https://reon.pro/reminders",
};
