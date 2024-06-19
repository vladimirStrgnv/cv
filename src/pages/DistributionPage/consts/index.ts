import image from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import styles from "../index.module.scss";

const distribution = [
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
];

export const DISTRIBUTION__PAGE__DATA = {
  title: "Виджет распределения заявок от компании Reon",
  images: distribution,
  descrpt:
    "Виджет позволяет автоматически распределять сделки по различным алгоритмам среди пользователей amoCRM.",
  tech: "Frontend: React, mui, react-hook-form, react-router, redux . Backend: nest.js, node-shedule,  multer, dayjs, mongoDB",
  link: "https://reon.pro/distribution_of_leads",
};
