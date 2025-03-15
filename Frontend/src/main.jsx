import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  BrowserRouter} from "react-router-dom";
// import Mycurrentsal from './componenets/Mycurrentsal.jsx';
// import  Changepw  from './componenets/Changepw.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
