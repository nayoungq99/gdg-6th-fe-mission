import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User1Page from './pages/User1Page.jsx'
import User2Page from './pages/User2Page.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/1",
    element: <User1Page />,
  },
   {
    path: "/users/2",
    element: <User2Page />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
