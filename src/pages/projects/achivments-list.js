import React from 'react';
import './achivments-list.css';
import ProjectsList from './projects-list';
import CertificatesList from './certificates-list';

const AchivementList = () => {
  return (
    <>
      <ProjectsList></ProjectsList>
      <CertificatesList></CertificatesList>
    </>
  );
};

export default AchivementList;