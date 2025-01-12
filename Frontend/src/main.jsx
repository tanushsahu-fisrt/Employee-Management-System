import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from './componenets/Form.jsx';
import Allemployee from './componenets/Allemployee.jsx';
import Login from './componenets/Login.jsx';
import Admin from './componenets/Admin.jsx';
import User from './componenets/User.jsx';
import Allsalary from './componenets/Allsalary.jsx';
import Mycurrentsal from './componenets/Mycurrentsal.jsx';
import  Changepw  from './componenets/Changepw.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/insert',
    element: <Form />
  },
  {
    path: '/getallemp',
    element: <Allemployee />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/getallsalary',
    element: <Allsalary />
  },
  {
    path: '/mycurrentsal',
    element: <Mycurrentsal />
  },
  {
    path: '/changepw',
    element: <Changepw />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
