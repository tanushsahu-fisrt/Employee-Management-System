import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Changepw = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_Password, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState(false);

  const token = sessionStorage.getItem("admin");

  const notify = () => toast.success("Password Changed" , { toastId: "changepw-success" });

  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      setEmail(user.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirm_Password) {
      const data = await axios.post("http://localhost:3000/changepw", {
        email,
        confirm_Password,
      });
      console.log("here");

      if (data.data.msg) {
        console.log("success in changeing  password");
        notify();
        setPassword("");
        setConfirmPassword("");
       
      }
    } else {
      setMsg(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">

      <header className="text-white py-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 p-[2px] ">
        <div className="container">
          <p className="text-bold text-2xl text-center ">
            Employee Management System
          </p>
        </div>
      </header>

      <div className="fixed inset-0   flex justify-center items-center ">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] relative">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Change Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter new Password"
                value={password}
                onChange={(Event) => setPassword(Event.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Confirm Password"
                value={confirm_Password}
                onChange={(Event) => setConfirmPassword(Event.target.value)}
                required
              />
              {msg && <p>Please enter same password</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg w-full"
              >
                Confirm
              </button>
            </div>
          </form> 
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Changepw;
