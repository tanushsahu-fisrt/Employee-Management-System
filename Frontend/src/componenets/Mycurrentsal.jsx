import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Mycurrentsal = () => {

  const[salary,setsalary] = useState({});
    

    let token = sessionStorage.getItem("empsalary")

  useEffect( () => {
      if(token){
        const user = JSON.parse(token)
        setsalary(user)
     }
  },[])


  return (

    <div>
        <header className="text-white py-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-[2px] ">
            <div className="container">
            <p className="text-bold text-2xl text-center ">Employee Management System</p>
            </div>
        </header>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-2 mx-5">
        <table className="min-w-full table-auto border-collapse ">
          <thead className="bg-gray-400">
            <tr>
              <th className="border px-3 py-2">ID</th>
              <th className="border px-4 py-2">Employee No</th>
              <th className="border px-4 py-2">Month</th>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Salary</th>
              <th className="border px-4 py-2">DA</th>
              <th className="border px-4 py-2">TA</th>
              <th className="border px-4 py-2">HRA</th>
              <th className="border px-4 py-2">EPT</th>
              <th className="border px-4 py-2">ESI</th>
              <th className="border px-4 py-2">SPALL</th>
              <th className="border px-4 py-2">GROSS_NET</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td className="border px-4 py-2">{salary.id}</td>
                <td className="border px-4 py-2">{salary.eno}</td>
                <td className="border px-4 py-2">{salary.month}</td>
                <td className="border px-4 py-2">{salary.year}</td>
                <td className="border px-4 py-2">{salary.salary}</td>
                <td className="border px-4 py-2">{salary.DA}</td>
                <td className="border px-4 py-2">{salary.TA}</td>
                <td className="border px-4 py-2">{salary.HRA}</td>
                <td className="border px-4 py-2">{salary.EPT}</td>
                <td className="border px-4 py-2">{salary.ESI}</td>
                <td className="border px-4 py-2">{salary.SPALL}</td>
                <td className="border px-4 py-2">{salary.GROSS_NET}</td>
              </tr>
            </tbody>
        </table>
      </div>


    </div>
  )

}

export default Mycurrentsal