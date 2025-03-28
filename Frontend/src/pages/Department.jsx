import { useNavigate } from "react-router-dom";
import Header from "../componenets/Header";

const Department = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="mx-4 mt-2">
        <div className="container mx-auto px-3 mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            
            {/* hr */}
            <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
              <div className="h-2 bg-gradient-to-r  from-blue-300 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-800">
                    HR Department
                  </h3>
                </div>

                <button
                  onClick={() => navigate("/department/HR")
                  }
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  VIEW EMPLOYEES
                </button>
              </div>
            </div>{" "}
            <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
              <div className="h-2 bg-gradient-to-r  from-blue-300 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-800">
                    IT Department
                  </h3>
                </div>

                <button
                  onClick={() => navigate("/department/IT")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  VIEW EMPLOYEES
                </button>
              </div>
            </div>{" "}
            <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
              <div className="h-2 bg-gradient-to-r  from-blue-300 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-800">
                    Finance Department
                  </h3>
                </div>
                <button
                  onClick={() =>
                    navigate("/department/Finance")
                  }
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  VIEW EMPLOYEES
                </button>
              </div>
            </div>{" "}
            <div className="bg-white rounded-md overflow-hidden shadow-2xl mb-7 ">
            <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-800">
                    Marketing Department
                  </h3>
                </div>

                <button
                  onClick={() => navigate("/department/Marketing")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  VIEW EMPLOYEES
                </button>
              </div>
            </div>
            {/* Card 2 - Update & Delete */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-7 ">
              <div className="h-2 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-800">
                    Sales Department
                  </h3>
                </div>
                <button
                  onClick={() =>
                    navigate("/department/Sales")
                  }
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300"
                >
                  VIEW EMPLOYEES
                </button>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
