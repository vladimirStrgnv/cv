import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/index';
import Footer from '../footer/index';
import './index.css';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className={`block block-show`}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;