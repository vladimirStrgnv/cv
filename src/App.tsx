import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/index';
import Homepage from './pages/Main';
import Project from './pages/projects/index';
import ProjectPage from './components/project-page/index';
import AchivementList from './pages/projects/achivments-list';
import ContactPage from './pages/contacts/index';
import './global-css/index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/cv' element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path='projects' element={<Project />}>
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
