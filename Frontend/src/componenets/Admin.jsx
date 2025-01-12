import React, { useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = () => {

     const notify = () => toast("Logged In Successfully");
    
      useEffect(() => {
        notify();
      }, []);
   

    return(
    <>

    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">

    <Header />
    <Home />

    <div className="flex flex-wrap justify-center  gap-5 mt-3" >

        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 p-[2px] rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Add & Delete Employee</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly add & delete employees to the system.</p>
            <a id="add" href="/insert" className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">Insert</a>
            </div>
        </div>

        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 p-[2px] rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Update & Delete Employee</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly find, update, and delete employees in the system.</p>
            <a id="find" href="/insert" className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">Find</a>
            </div>
        </div>

        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-green-500 p-[2px] b-3 rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Show All Employees</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly see existing employees in the system.</p>
            <a id="update" href="/getallemp" className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">Show</a>
            </div>
        </div>        
        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-green-500 p-[2px] b-3 rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Show salaries for all Employees</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly see existing employees in the system.</p>
            <a id="update" href="/getallsalary" className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">Show</a>
            </div>
        </div>

    </div>
    

    </div>
    <ToastContainer/>
    </>
    )
}

export default Admin;