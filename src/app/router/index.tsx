import { createBrowserRouter } from "react-router-dom";
import Layout from "../../share/components/MainLayout";
import Main from "../../pages/Main";
import { ROUTES } from "../../share/consts";
import ProjectsPage from "../../pages/ProjectsPage";
import ContactPage from "../../pages/ContactPage";
import { Navigate } from "react-router-dom";
import { PostmanPage } from "../../pages/PostmanPage";
import { NotifPage } from "../../pages/NotifPage";
import { DistributionPage } from "../../pages/DistributionPage";
import { ShdPage } from "../../pages/Shd";
import { Podvig } from "../../pages/Podvig";
import { Apex } from "../../pages/Apex";

const BrowserRouter = createBrowserRouter([
  {
    path: "/cv",
    element: <Layout />,
    children: [
      {
        path: ROUTES.any,
        element: <Navigate to={ROUTES.main} replace />,
      },
      { index: true, element: <Main /> },
      {
        path: ROUTES.contacts,
        element: <ContactPage />,
      },
      { path: ROUTES.projects, element: <ProjectsPage /> },
      {
        path: ROUTES.postman,
        element: <PostmanPage />,
      },
      {
        path: ROUTES.notif,
        element: <NotifPage />,
      },
      {
        path: ROUTES.distribution,
        element: <DistributionPage />,
      },
      {
        path: ROUTES.shd,
        element: <ShdPage />,
      },
      {
        path: ROUTES.podvig,
        element: <Podvig />,
      },
      {
        path: ROUTES.apex,
        element: <Apex />,
      },
    ],
  },
]);

export default BrowserRouter;
