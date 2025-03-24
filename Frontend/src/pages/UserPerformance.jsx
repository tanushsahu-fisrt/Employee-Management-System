import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Userheader from "../componenets/Userheader";

const UserPerformance = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = sessionStorage.getItem("token");
  const location = useLocation();

  useEffect(() => {
    const userId = location.state;
    if (!userId) {
      setError("User ID not found.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/employee/${userId}/performance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch performance data.");
        }
        return res.json();
      })
      .then((data) => {
        setPerformanceData(data.data);
        if (data.data && data.data.length > 0) {
          setEmployeeInfo({
            ename: data.data[0].ename,
            department: data.data[0].department,
          });
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [location.state, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Userheader />
      <div className=" mx-auto p-6">
        {employeeInfo && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-8 mx-4">
            <h2 className="text-3xl font-bold mb-2">{employeeInfo.ename}</h2>
            <p className="text-lg text-gray-200">
              Department: {employeeInfo.department}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4">
          {performanceData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500 transition-transform hover:scale-105"
            >
              <p className="text-gray-600 text-sm mb-2">
                {new Date(item.review_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rating: <span className="text-yellow-500">⭐ {item.rating.toFixed(1)}</span>
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Feedback:</span> {item.feedback}
              </p>
              <p className="text-gray-500 mb-1">
                <span className="font-semibold">Projects:</span> {item.projects_completed}
              </p>
              <p className="text-gray-500 mb-1">
                <span className="font-semibold">Attendance:</span> {item.attendance_percentage}%
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Training:</span> {item.training_completed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPerformance;