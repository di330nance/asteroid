import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, BrowserRouter, Navigate } from "react-router-dom";
import { Asteroid } from "./pages/Asteroid";
import { Destroyment } from "./pages/Destroyment";
import { Asteroids } from "./pages/Asteroids";
import { AsteroidsContextProvider } from './components/AsteroidCard/AsteroidContext/AsteroidsContext';

const router = createHashRouter(
  [
    { path: "/", element: <Navigate to="/asteroids" replace /> },
    { path: "/asteroids", element: <Asteroids /> },
    { path: "/destroyment", element: <Destroyment /> },
    { path: "/asteroid/:id", element: <Asteroid /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AsteroidsContextProvider>
          <RouterProvider router={router} />
      </AsteroidsContextProvider>
  </React.StrictMode>
);

reportWebVitals();
