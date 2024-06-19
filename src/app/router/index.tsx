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

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);

export default BrowserRouter;
