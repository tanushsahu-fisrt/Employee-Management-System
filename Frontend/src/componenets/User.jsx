import React, { useEffect } from "react";
import Home from "./Home";
import Userheader from "./Userheader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const token = sessionStorage.getItem("user");
  let employeenNo = 0;

  const notify = () => toast("Logged In Successfully");

  useEffect(() => {
    notify();
  }, []);

  useEffect(() => {
    if (token) {
      const user = JSON.parse(token);
      employeenNo = user.eno;
      console.log(employeenNo);
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/empsalary").then((result) => {
      result.data.data.map((v) => {
        if (v.eno === employeenNo) {
          sessionStorage.setItem("empsalary", JSON.stringify(v));
        }
      });
    });
  });

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
        <Userheader />
        <Home />

        <div className="flex flex-wrap justify-center  gap-6 ">
          <div className="relative bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 p-[2px] rounded-lg">
            <div className="rounded-lg shadow bg-white p-4">
              <h3 className="text-xl font-bold mb-2">Current Month salary </h3>
              <p className="text-sm text-gray-600 mb-4">
                Quickly See Your This Month salary.
              </p>
              <a
                id="add"
                href="/mycurrentsal"
                className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg"
              >
                Show
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default User;
