import React from "react";
import {  useNavigate } from "react-router-dom";

const Home = ({showPara}) => {

    const navigate = useNavigate()
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10  mx-4">
        
        {/* Text Section */}
        <div className="text-center md:text-left mx-8 text-white">
          <h2 className="text-5xl font-bold leading-tight drop-shadow-lg">Employee</h2>
          <h2 className="text-5xl font-bold leading-tight drop-shadow-lg">Management</h2>
          <h2 className="text-5xl font-bold leading-tight drop-shadow-lg mb-6">System</h2>
          <p className="text-lg opacity-90 max-w-lg">
            Manage your employees efficiently and effectively with our modern and user-friendly system.
          </p>
          { showPara && <button 
          className="mt-6 px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>}
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/business-people-working-giving-tasks_1262-19728.jpg?semt=ais_hybrid"
            alt="homeimage"
            className="h-[350px] w-[320px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Info Section */}
     { showPara && 
      <div className="mx-auto text-white text-center mt-12 space-y-4 px-6">
        <p className="text-lg">Our system ensures a smooth and effective way to manage employees effortlessly.</p>
        <p className="text-lg">Track attendance, assign tasks, and streamline workflows seamlessly.</p>
        <p className="text-lg">Secure, scalable, and designed for businesses of all sizes.</p>
      </div>
      }
    </>
  );
};

export default Home;
