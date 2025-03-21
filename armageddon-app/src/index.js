import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Asteroid } from './pages/Asteroid';
import { Destroyment } from './pages/Destroyment';
import { Asteroids } from './pages/Asteroids';
import { AsteroidsContextProvider } from './components/asteroids_context/AsteroidsContext';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Navigate to="/asteroids" replace />,
    },
    {
      path: '*',
      element: <Navigate to="/asteroids" replace />,
    },

    {
      path: '/asteroids',
      element: <Asteroids />,
    },
    {
      path: '/destroyment',
      element: <Destroyment />,
    },
    {
      path: '/asteroid/:id',
      element: <Asteroid />,
    },
  ]
  /*{
      basename: '/React_Asteroid',
    }*/
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AsteroidsContextProvider>
      <RouterProvider router={router} />
    </AsteroidsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
