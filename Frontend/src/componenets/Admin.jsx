import React, { useCallback, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";


const Admin = () => {

    const navigate = useNavigate()


    const[showHead,setShowHead] = useState({
        showAdd : true,
        showUpdate : true,
    });

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
            <button 
            className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg"
            onClick={() => navigate("/insert",{ state :{add: 'add',show: showHead.showAdd }})
            }
            >Insert & Delete</button>
            </div>
        </div>

        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 p-[2px] rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Update & Delete Employee</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly find, update, and delete employees in the system.</p>
            <button 
            className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg"
            onClick={() => navigate("/insert",{ state : showHead.showUpdate })}
            >Find
            </button>
            </div>
        </div>

        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-green-500 p-[2px] b-3 rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Show All Employees</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly see existing employees in the system.</p>
            <button  
            onClick={() => navigate("/getallemp")}
            className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">
            Show
            </button>
            </div>
        </div>        
        <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-green-500 p-[2px] b-3 rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
            <h3 className="text-xl font-bold mb-2">Show salaries for all Employees</h3>
            <p className="text-sm text-gray-600 mb-4">Quickly see existing employees in the system.</p>
            <button
            onClick={() => navigate("/getallsalary")}
            className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">
            Show
            </button>
            </div>
        </div>

    </div>
    

    </div>
    
    </>
    )
}

export default Admin;