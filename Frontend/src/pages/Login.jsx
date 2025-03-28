import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const token = () => toast.success('Login Sucessfully!')

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/checklogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password , role }),
      });

      const { msg, jwtoken, data } = await response.json();

      if (msg === "success") {
        sessionStorage.setItem("token", jwtoken);
        sessionStorage.setItem("isLogin", true);
        
        if (data.type === "admin") {
          sessionStorage.setItem("admin", JSON.stringify(data));
          token();
          setTimeout(() => {
            navigate("/admin");
          },1000)
        } else if (data.type === "user"){
          sessionStorage.setItem("user", JSON.stringify(data));
          token();
          setTimeout(() => {
            navigate("/user");
          },1000)
        } else {
          navigate("/");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Error logging in:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-green-600">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-lg">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
          <div className="text-white text-center mt-6 space-y-1">
            <h1 className="text-3xl font-bold">Employee</h1>
            <h2 className="text-3xl font-bold">Management</h2>
            <p className="text-3xl font-bold">System</p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Welcome Back
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                  </button>
                </div>
                <div className="relative flex mt-8 text-center gap-5 ">
                    <label className="block text-sm font-medium text-gray-700 mb-1 mx-1">
                      SELECT 
                     </label>
                    <select 
                    name="drop-type"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    > 
                      <option value="select" defaultValue={true} >Select An Role</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={ !email.trim() || !password.trim() || !role.trim() }
                className="w-full py-3 px-6 text-white bg-indigo-600 rounded-lg font-medium  disabled:bg-indigo-400"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;