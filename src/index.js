import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPage from './Components/AdminPanel/BlogPage';
import PageActifs from './Components/AdminPanel/PageActifs';
import PageEntreprise from './Components/AdminPanel/PageEntreprise';
import PagePro from './Components/AdminPanel/PagePro';
import PageRapport from './Components/AdminPanel/PageRapport';
import PageReglage from './Components/AdminPanel/PageReglage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/BlogPage",
    element: <BlogPage/>,
  },
  {
    path: "/PageActifs",
    element: <PageActifs/>,
  },
  {
    path: "/PageEntreprise",
    element: <PageEntreprise/>,
  },
  {
    path: "/PagePro",
    element: <PagePro/>,
  },
  {
    path: "/PageRapport",
    element: <PageRapport/>,
  },
  {
    path: "/PageReglage",
    element: <PageReglage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
