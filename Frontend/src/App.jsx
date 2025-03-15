import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Allemployee from './componenets/Allemployee';
import Allsalary from './componenets/Allsalary.jsx';
import ErrorPage from './pages/BadURLS';
import Admin from './pages/Admin';
import User from './pages/User';
import Form from './componenets/Form';



const App = () => {

  return ( 
    
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path= "/getallemp" element={ <Allemployee/>} />
          <Route  path='/admin' element={<Admin />}/>
          <Route  path='/user' element={<User />}/>
          <Route  path='/employees' element={<Allemployee />}/>
          <Route  path='/insert' element={<Form />}/>
          <Route  path='/empsal' element={<Allsalary />}/>

          <Route path='*' element={<ErrorPage />}/>

        </Routes>

    </>
  )
}

export default App;
