import React from 'react';
import './index.css'
import '../../global-css/animation.css';
import { Outlet } from 'react-router-dom';

const Project = () => {
  return (
    <section className="achivments">
      <div className={`block block-show`}>
        <div className="achivments__wrapper wrapper ">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Project;