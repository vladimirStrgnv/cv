import { createRoot } from 'react-dom/client';
import App from './App';
import BrowserRouter from './app/router';
import { RouterProvider } from 'react-router-dom';
import './app/global-styles/index.scss';


const root = createRoot(document.getElementById('root')!);
root.render(
    <RouterProvider router={BrowserRouter}/>
);


