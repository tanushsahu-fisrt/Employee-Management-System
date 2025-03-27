import React, { useEffect, useState } from "react";
import imgLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import Changepw from "./Changepw";

const Userheader = () => {

  const navigate = useNavigate();
  const [login, setLogin] = useState("Login");
  const [showMenu, setShowMenu] = useState(false);
  const [showPW, setShowPW] = useState(false);
  const [userId, setUserId] = useState(null);
  

  const token = sessionStorage.getItem("user");

  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      setLogin(user.email);
      setUserId(user.eno);
    }
  }, []);

  const handleLoginClick = () => {
    if (token) {
      setShowMenu(!showMenu); // Toggle the menu visibility
    } else {
      window.location.href = "/login"; // Redirect to login page if not logged in
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("empsalary");
    sessionStorage.removeItem("isfromLogin");
    sessionStorage.removeItem("token");
    toast.success("Logout Successfully")
    setTimeout(() => navigate("/"),1000)
  };

  return (
    <header className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-3 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={imgLogo}
            alt="logo"
            width="50"
            onClick={() => navigate("/")}
            className="mx-5 cursor-pointer rounded-md border-2 border-blue-800"
          />
          <nav className="ml-6 hidden md:flex space-x-4 text-black text-xl">
            <a href="/profile" className="border-2 border-white p-1 rounded-md">
              profile
            </a>
            <a
              href="/salaryslip"
              className="border-2 border-white p-1 rounded-md"
            >
              salary Slip
            </a>
            <p
              onClick={() => navigate("/performance", { state : userId } )}
              className="border-2 border-white p-1 rounded-md cursor-pointer"
            >
              Performance
            </p>
          </nav>
        </div>

        <div className="relative bg-white text-black rounded-md">
          <button
            onClick={handleLoginClick}
            className="border-2 border-white rounded-lg px-3 py-2 hover:bg-white/30 transition-colors duration-200"
          >
            {login}
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
              <button
                onClick={() => setShowPW(true)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Change Password
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
            <ToastContainer autoClose={1000} />
      
    {showPW && <Changepw  onClose={() => setShowPW(false) }/>}

    </header>
  );
};

export default Userheader;
