import React from "react";
import { useEffect , useState } from "react";
import {  useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const [adminData, setAdminData] = useState(false)
    const [userData, setUserData] = useState(false)

    useEffect( () => { 
        if(sessionStorage.getItem("admin")){
          setAdminData(true);
          navigate("/admin");
        }
        else if(sessionStorage.getItem("user")){
          setUserData(true);
          navigate("/user");
        }
        else{
          navigate("/login")
        }
      },
    [] )

  return (
    <>

     
      <div className="container mx-auto px-4 py-12 text-black ">
      <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px] rounded-lg shadow-2xl">
        <div className="bg-white backdrop-blur-sm rounded-md shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold  mb-4 leading-tight">
                Welcome !!
              </h1>
              <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Employee Management System</h2>
              <p className="text-lg mb-8 max-w-lg">
                { adminData && <p>Manage your employees efficiently and effectively with our modern and user-friendly system </p> }
                { userData && <p>Access your employment information, view your salary details, and manage your profile all in one place </p> }
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                  src="https://empmonitor.com/blog/wp-content/uploads/2021/08/Work-from-home.jpg"
                  alt="Employee Management"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Home;
