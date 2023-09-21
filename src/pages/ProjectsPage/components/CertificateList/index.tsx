import React from 'react';
import GalleryCard from '../../../../share/components/GalleryCard';
import certificate1 from '../../assets/certificates/certificate1.png';
import certificate2 from '../../assets/certificates/certificate2.png';
import styles from './index.module.scss';

const CertificatesList = () => {
  return (
    <div className={styles.certificates}>
      <h2 className={styles.certificates__title}>Сертификаты</h2>
      <ul className={styles['certificates__list']}>
        <li className={styles['certificates__list-item']}>
          <a href='https://app.rs.school/certificate/4hrhhurp' target="_blank">
            <GalleryCard
              src={certificate1}
              descrpt={"RSS School JS / FRONT-END"}
            ></GalleryCard>
          </a>
        </li>
        <li className={styles['certificates__list-item']}>
          <a href='https://app.rs.school/certificate/9zrto4f4' target="_blank">
            <GalleryCard
              src={certificate2}
              descrpt={"RSS School JS / FRONT-END. STAGE 0"}
            ></GalleryCard>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CertificatesList;