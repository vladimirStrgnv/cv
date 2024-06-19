import image from "../assets/1.png";
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

export const POSTMAN__PAGE__DATA = {
  title: "Виджет для отправки электронной почты от компании Reon",
  images: postman,
  descrpt:
    "Виджет позволяет расширить стандартный функционал amoCRM для работы с письмами. Предоставляет возможность персонализировать письма; осуществлять предпросмотр  и отложенную отправку, создавать шаблоны.",
  tech: "Frontend: Vue.js 3, naive-ui. Backend: express.js, node-shedule, nodemailer, multer, dayjs, mongoDB",
  link: "https://reon.pro/email2",
};
