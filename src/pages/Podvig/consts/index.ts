import image from "../assets/1.jpg";
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
  title: "Интерактивная платформа",
  images: distribution,
  descrpt:
    "Интерактивная платформа, на которой вы найдете искренние истории о подвигах, онлайн-конкурсы, акции, а также информацию о мероприятиях в реальном времени, таких как выставки, лекции и квесты.",
  link: "https://xn--b1acbr1af.xn--p1ai/",
  tech: "NDA",
};
