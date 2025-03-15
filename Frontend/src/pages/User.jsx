import { useEffect, useState } from "react"
import Userheader from "../componenets/Userheader"
import axios from "axios"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./Home"

const User = () => {
  const token = sessionStorage.getItem("user")
  let employeeNo = 0

  useEffect(() => {
    if (token) {
      const user = JSON.parse(token)
      employeeNo = user.eno 
    }
  }, [])

  useEffect(() => {
    if (employeeNo) {
      axios.get("http://localhost:3000/empsalary").then((result) => {
        result.data.data.forEach((v) => {
          if (v.eno === employeeNo) {
            sessionStorage.setItem("empsalary", JSON.stringify(v))
          }
        })
      })
    }
  }, [employeeNo])

  return (
    <>
      <Userheader />
      <Home />
      

      <div className="">
      <div className="container mx-auto px-3 mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Card 1 - Add & Delete */}
          <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
            <div className="h-2 bg-gradient-to-r  from-blue-300 to-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Profile</h3>
              </div>
              <p className="text-gray-600 mb-6">
               show my Profile
              </p>
              <button
                onClick={() => navigate("/insert", { state: { add: 'add', show: showHead.showAdd }})}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Profile
              </button>
            </div>
          </div>

          {/* Card 2 - Update & Delete */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7 ">
            <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Attendance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                View Attendance
              </p>
              <button
                onClick={() => navigate("/insert", { state: showHead.showUpdate })}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Attendance
              </button>
            </div>
          </div>

          {/* Card 3 - Show All Employees */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7 ">
            <div className="h-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-green-300">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-gray-800">Salary</h3>
              </div>
              <p className="text-gray-600 mb-6">
                view this month salary
              </p>
              <button
                onClick={() => navigate("/employees")}
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
              >
                Salary
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default User


                
                