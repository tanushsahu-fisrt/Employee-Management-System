import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const Header = () => {
  const [login, setLogin] = useState("Login");
  const [showMenu, setShowMenu] = useState(false);
  const token = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const admin = JSON.parse(token);
      setLogin(admin.email);
    }
  }, [token]);

  const handleLoginClick = () => {
    if (token) {
      setShowMenu(!showMenu);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isfromLogin");
    toast.success("Logout Successfully")
    setTimeout(() => navigate("/"),1000)
  };

  return (
    <header className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={imgLogo}
            alt="logo"
            width="50"
            onClick={() => navigate("/")}
            className="mx-5 cursor-pointer rounded-md border-2 border-blue-800"
          />
          <nav className="ml-6 hidden md:flex space-x-4 text-black text-xl">
            <a href="/employees" className="border-2 border-white p-1 rounded-md">Employees</a>
            <a href="/departments" className="border-2 border-white p-1 rounded-md">Departments</a>
            <a href="/reports" className="border-2 border-white p-1 rounded-md">Reports</a>
            <a href="/attendance" className="border-2 border-white p-1 rounded-md">Attendance</a>
            <a href="/payroll" className="border-2 border-white p-1 rounded-md">Payroll</a>
            
          </nav>
        </div>

        {/* User Button and Dropdown */}
        <div className="relative bg-white text-black rounded-md">
          <button
            onClick={handleLoginClick}
            className="border-2 border-white rounded-lg px-3 py-2 hover:bg-white/30 transition-colors duration-200"
          >
            {login}
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
              <a
                href="/changepw"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Change Password
              </a>
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
    </header>
  );
};

export default Header;