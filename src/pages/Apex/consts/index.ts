import image from "../assets/1.png";

import styles from "../index.module.scss";

const distribution = [
  {
    original: image,
    thumbnail: image,
    originalClass: styles["img"],
    thumbnailHeight: "50px",
  },
];

export const DISTRIBUTION__PAGE__DATA = {
  title: "P2P процессинг",
  images: distribution,
  descrpt:
    "Биржа для p2p процессинга, в которой можно принимать участие, как в роли клиента, так и в роли трейдера",
  link: " ",
  tech: "React; React Router; mui; Rtk; yup + formik; TS; react-mask",
};
