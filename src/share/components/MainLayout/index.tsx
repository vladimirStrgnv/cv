import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import Footer from "../Footer/index";
import "../../../app/global-styles/animation.scss";

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
};

export default Layout;
