import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter 
} from "react-router-dom";

import './index.css';
import App from './app';
// import Sign from './pages/sign';
// import Resource from './pages/resource';
// import Environment from './pages/enviroment';
// import Report from './pages/report';
// import Job from './pages/job';
// import Help from './pages/help';

// import Layout from './components/layout'
// import Nabvar from './components/navbar'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Sign />,
//   },
//   {
//     path: '/resource',
//     element: <Layout><Resource key={'Resource'}/></Layout>,
//   },
//   {
//     path: '/environment',
//     element: <Layout><Environment key={'Environment'} /></Layout>,
//   },
//   {
//     path: '/report',
//     element: <Layout><Report key={'Report'} /></Layout>,
//   },
//   {
//     path: '/job',
//     element: <Layout><Job key={'Job'} /></Layout>,
//   },
//   {
//     path: '/help',
//     element: <Layout><Help key={'Help'} /></Layout>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
