import React from 'react';
import './index.css'
import '../../global-css/animation.css';
import { Outlet } from 'react-router-dom';
import useAnimationRender from '../../customHook/useAnimationRender';

const Project = () => {
  const isShowBox = useAnimationRender();
  return (
    <section className="achivments">
      <div className={`block ${isShowBox ? "block-show" : ""}`}>
        <div className="achivments__wrapper wrapper ">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Project;