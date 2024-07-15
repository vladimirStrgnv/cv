import image from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
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
  title: "Система управления SpaceSAN",
  images: distribution,
  descrpt:
    "Система позволяет мониторить все параметры СХД и подключенных к ним дисков, а также предоставляет доступ для работы с такими технологиями как: ZFS, Fibre Channel, iSCSI, NFS. Помимо этого приложение позволяет выполнять настройку сети, в которой работает СХД и другие операции.",
  tech: "NDA",
  link: "https://spacesan.ru/",
};
