import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Asteroid } from "./pages/Asteroid";
import { Destroyment } from "./pages/Destroyment";
import { Asteroids } from "./pages/Asteroids";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/asteroids" replace />
    },
    {
        path: "/asteroids",
        element: <Asteroids />
    },
    {
        path: "/destroyment",
        element: <Destroyment />
    },
    {
        path: "/asteroid/:id",
        element: <Asteroid />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
