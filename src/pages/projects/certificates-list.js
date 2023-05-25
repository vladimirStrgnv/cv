import React from 'react';
import GalleryCard from "../../components/gallery-card";
import certificate1 from './assets/certificates/certificate1.png';
import certificate2 from './assets/certificates/certificate2.png';
import './certificates-list.css';

const CertificatesList = () => {
  return (
    <div className="certificates">
      <h2 className="certificates__title">Сертификаты</h2>
      <ul className="certificates__certificate-list">
        <li className="certificates__certificate-list-item">
          <a href='https://app.rs.school/certificate/4hrhhurp' target="_blank">
            <GalleryCard
              src={certificate1}
              descrpt={"RSS School JS / FRONT-END"}
            ></GalleryCard>
          </a>
        </li>
        <li className="certificates__certificate-list-item">
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