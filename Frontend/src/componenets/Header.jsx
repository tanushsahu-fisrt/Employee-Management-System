import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


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
  }, []);

  const handleLoginClick = () => {
    if (token) {
      setShowMenu(!showMenu); // Toggle the menu visibility
    } else {
      navigate("/login"); 
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <header className="text-black py-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-[2px] ">
          <div className="container">
            <nav>
              <ul className="flex space-x-6 my-1 text-xl mx-5">
                <li>
                  <a
                    href="#"
                    id="homedash"
                    className=" border-2 border-white rounded-lg px-1 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" border-2 border-white rounded-lg px-1 "
                  >
                    New Employee
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    id="admindash"
                    className=" border-2 border-white rounded-lg px-1"
                  >
                    Admin Dashboard
                  </a>
                </li>
              </ul>
              <button
                onClick={handleLoginClick}
                className="absolute right-8 top-5 hover:underline text-white border-2 border-white rounded-lg px-1 space-x-10"
              >
                {login}
              </button>
            </nav>
          </div>
        </header>
      </div>

      {showMenu && (
        <div className="absolute right-4 top-15 p-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-black-200/20">
            <div className="flex flex-col min-w-[200px]">
              <a
                href="/changepw"
                className="px-4 py-3 text-gray-700 hover:bg-gray-100/50 rounded-t-lg text-lg transition-colors duration-200 flex items-center"
              >
                Change Password
              </a>
              <div className="h-[1px] bg-gray-200/50" />
              <button
                onClick={handleLogout}
                className="px-4 py-3 text-gray-700 hover:bg-gray-100/50 rounded-b-lg transition-colors duration-200 text-left text-lg w-full"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
