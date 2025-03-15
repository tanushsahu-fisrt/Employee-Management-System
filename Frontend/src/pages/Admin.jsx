import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Header from "../componenets/Header";

const Admin = () => {
  const navigate = useNavigate();
  
  const [showHead, setShowHead] = useState({
    showAdd: true,
    showUpdate: true,
  });

  return (
    <>
    <Header />
    <Home />
      
    <div className="">
      <div className="container mx-auto px-3 mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Card 1 - Add & Delete */}
          <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-yellow-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Add & Delete Employee</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quickly add new employees or remove existing ones from the system.
              </p>
              <button
                onClick={() => navigate("/insert", { state: { add: 'add', show: showHead.showAdd }})}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Insert & Delete
              </button>
            </div>
          </div>

          {/* Card 2 - Update & Delete */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7 ">
            <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-purple-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Update & Delete Employee</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Find, update, and manage existing employee information in the system.
              </p>
              <button
                onClick={() => navigate("/insert", { state: showHead.showUpdate })}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Find & Update
              </button>
            </div>
          </div>

          {/* Card 3 - Show All Employees */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7 ">
            <div className="h-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Show All Employees</h3>
              </div>
              <p className="text-gray-600 mb-6">
                View a complete list of all employees currently in the system.
              </p>
              <button
                onClick={() => navigate("/employees")}
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                View Employees
              </button>
            </div>
          </div>

          {/* Card 4 - Show Salaries */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7">
            <div className="h-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Show All Salaries</h3>
              </div>
              <p className="text-gray-600 mb-6">
                View salary information for all employees in the organization.
              </p>
              <button
                onClick={() => navigate("/empsal")}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                View Salaries
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Admin;