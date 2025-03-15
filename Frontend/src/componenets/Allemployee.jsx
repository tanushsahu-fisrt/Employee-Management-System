import React, { useEffect, useState } from "react";
import Header from "./Header";

const Allemployee = () => {

const[employees,setemployees] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3000/employees")
        .then( (res) => res.json() )
        .then( (data) => {
            setemployees(data.data);
        })
        .catch( (err) => console.log('error' + err))
    },[])


    return(

    <div>

    <Header />

    <h1 className="text-3xl text-black mb-8 mt-2 text-center">Employee Details</h1>
        
    <div className="mx-auto max-w-7xl p-2 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.length > 0 ? (
            employees.map((element, index) => (
                <div 
                    key={index} 
                    className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px] rounded-lg shadow-2xl"
                >
                    <div className="bg-white rounded-lg p-2">

                    <div className="text-2xl font-semibold text-gray-800 mb-2 text-center bg-yellow-300 rounded-lg">
                        {element.ename}
                    </div>             
                    <p className="text-gray-600 text-lg mb-1">
                        <span className="font-medium">Email:</span> {element.email}
                    </p>             
                    <p className="text-gray-600 text-lg mb-1">
                        <span className="font-medium">Mobile:</span> {element.mobileNo}
                    </p>             
                    <p className="text-gray-600 text-lg mb-1">
                        <span className="font-medium">Address:</span> {element.Address1}
                    </p>
                    <p className="text-gray-600 text-lg mb-1">
                        <span className="font-medium">City:</span> {element.city} , {element.state}
                    </p>
                    <p className="text-gray-600 text-lg mb-1">
                        <span className="font-medium">Department:</span> {element.Department}
                    </p>             
                    <p className="text-gray-600 text-lg">
                        <span className="font-medium">Designation:</span> {element.Designation}
                    </p>
                    <p className="text-gray-600 text-lg">
                        <span className="font-medium">salary:</span> {element.salary}
                    </p>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-center text-gray-500 col-span-full">
               loading..
            </p>
        )}
    </div>
    </div>


 </div>

    )
};

export default Allemployee;