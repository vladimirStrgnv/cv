import React from 'react';
import './index.css';
import '../../global-css/animation.css';
import Greeting from './greeting';
import Projects from './projects-gallery';
import Skills from './skills';
import useAnimationRender from '../../customHook/useAnimationRender';

const Homepage = () => {
  const isShowBox = useAnimationRender();
  return (
    <section className="main">
      <div className={`block ${isShowBox ? "block-show" : ""}`}>
        <div className="wrapper main__wrapper">
          <Greeting></Greeting>
          <Projects></Projects>
          <Skills></Skills>
        </div>
      </div>
    </section>
  );
};

export default Homepage;