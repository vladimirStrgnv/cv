import { Route, Routes } from 'react-router-dom';
import Layout from './share/components/MainLayout/index';
import Homepage from './pages/Main';
import ProjectsPage from './pages/ProjectsPage';
import AchivementList from './pages/ProjectsPage/components/AchivmentList';
import ContactPage from './pages/ContactPage/index';
import ProjectPage from './share/components/ProjectPage';
import './global-styles/index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/cv' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path='projects' element={<ProjectsPage />}>
            <Route  index element={<AchivementList />}></Route>
            <Route  path=':name' element={<ProjectPage />}></Route>
            <Route  path=':achivemnts' element={<ProjectPage />}></Route>
          </Route>
          <Route  path='contacts' element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
