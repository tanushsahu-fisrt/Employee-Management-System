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
import  Changepw  from './componenets/Changepw.jsx'
import Department from './pages/Department.jsx';
import EmpByDepartment from './pages/EmpByDepartment.jsx';
import AttendancePage from './pages/Attendance.jsx';
import AdminDashboard from './pages/Admindashboard.jsx';
import Payroll from './pages/Payroll.jsx';
import UserProfile from './pages/UserProfile.jsx';
import UserPerformance from './pages/UserPerformance.jsx';
import UserAttendance from './pages/userAttendance.jsx';


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
          <Route  path='/changepw' element={<Changepw />}/>
          <Route  path='/department' element={<Department />}/>
          <Route  path='/department/:departmentName' element={<EmpByDepartment />}/>
          <Route  path='/attendance' element={<AttendancePage />}/>
          <Route  path='/dashboard' element={<AdminDashboard />}/>
          <Route  path='/payroll' element={<Payroll />}/>
          <Route  path='/profile' element={<UserProfile />}/>
          <Route  path='/performance' element={<UserPerformance />}/>
          <Route  path='/attend/:eno' element={<UserAttendance />}/>


          <Route path='*' element={<ErrorPage />}/>
        </Routes>

    </>
  )
}

export default App;
