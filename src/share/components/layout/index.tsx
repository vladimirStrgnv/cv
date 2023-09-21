import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;