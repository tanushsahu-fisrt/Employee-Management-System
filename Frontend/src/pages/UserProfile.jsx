import axios from "axios";
import { useEffect, useState } from "react";
import Userheader from "../componenets/Userheader";

const UserProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`http://localhost:3000/profile?eno=${user.eno}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(result.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user.eno, token]); // Added dependency array to prevent infinite loop

  return (
    <div className="min-h-screen bg-white">
      <Userheader />
      <div className="container mx-auto  ">
        {loading ? (
          <div className="flex justify-center items-center shadow-2xl ">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : data ? (
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden px-5 mx-auto py-5 w-full">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
              <h1 className="text-white text-3xl font-bold mb-2">{data.data[0].ename}</h1>
              <p className="text-blue-100 text-lg">{data.data[0].Designation}</p>
              <div className="flex items-center mt-4">
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Employee no: {data.data[0].eno}
                </span>
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                  {data.data[0].Department}
                </span>
              </div>
            </div>

            <div className="p-6 text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-500 text-sm font-semibold mb-2">CONTACT INFORMATION</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-800">{data.data[0].email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span className="text-gray-800">{data.data[0].mobileNo}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-gray-500 text-sm font-semibold mb-2">PERSONAL DETAILS</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-800">DOB: {data.data[0].dob}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span className="text-gray-800">Gender: {data.data[0].gender}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-500 text-sm font-semibold mb-2">FINANCIAL INFORMATION</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-800">Salary: ₹{data.data[0].salary}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                        </svg>
                        <span className="text-gray-800">Account: {data.data[0].AccountNo}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="text-gray-800">TF Account: {data.data[0].TfAccountNo}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <span className="text-gray-800">Bank Code: {data.data[0].BankCode}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-gray-500 text-sm font-semibold mb-2">ADDRESS</h2>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-800">
                        {data.data[0].Address1}, {data.data[0].Address2}, {data.data[0].city}, {data.data[0].state}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-3xl mx-auto">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> Unable to load profile data.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;