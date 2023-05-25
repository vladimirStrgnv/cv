import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/index';
import Footer from '../footer/index';
import './index.css';
import useAnimationRender from '../../customHook/useAnimationRender';

const Layout = () => {
  const isShowBox = useAnimationRender();

  return (
    <>
      <Header></Header>
      <main className={`block ${isShowBox ? "block-show" : ""}`}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;