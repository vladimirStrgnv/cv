import { createBrowserRouter } from "react-router-dom";
import Layout from "../../share/components/MainLayout";
import Main from "../../pages/Main";
import { ROUTES } from "../../share/consts";
import ProjectsPage from "../../pages/ProjectsPage";
import ContactPage from "../../pages/ContactPage";
import { Navigate } from "react-router-dom";
import AchivementList from "../../pages/ProjectsPage/components/AchivmentList";
import { PostmanPage } from "../../pages/PostmanPage";

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
        children: [{ index: true, element: <AchivementList /> }],
      },
      { path: ROUTES.projects, element: <ProjectsPage /> },
      {
        path: ROUTES.postman,
        element: <PostmanPage />,
      },
    ],
  },
]);

export default BrowserRouter;
