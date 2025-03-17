import React, { useState , useEffect } from "react";
import Header from "../componenets/Header";

const AttendancePage = () => {

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("All");
  const [attendance, setAttendance] = useState({});
  const[employees,setemployees] = useState([]);
  
      useEffect( () => {
          fetch("http://localhost:3000/employees")
          .then( (res) => res.json() )
          .then( (data) => {
              setemployees(data.data);
          })
          .catch( (err) => console.log('error' + err))
      },[])

  const handleAttendanceChange = (id, status) => {
    setAttendance({ ...attendance, [id]: status });
  };

  console.log(attendance)
  return (
    <>
        <Header />
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-black text-center mb-6">
          Employee Attendance
        </h1>

        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Employee"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="flex justify-center mx-auto space-x-5">
          <select
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-300">
              <tr className="text-left text-gray-900">
                <th className="p-3">ID</th>
                <th className="p-3">Employee Name</th>
                <th className="p-3">Department</th>
                <th className="p-3">Attendance Status</th>
              </tr>
            </thead>
            <tbody>
              {employees
                .filter(
                  (emp) =>
                    emp.ename.toLowerCase().includes(search.toLowerCase()) &&
                    (department === "All" || emp.Department === department)
                )
                .map((emp) => (
                  <tr key={emp.eno} className="border-t text-gray-700">
                    <td className="p-3">{emp.eno}</td>
                    <td className="p-3">{emp.ename}</td>
                    <td className="p-3">{emp.Department}</td>
                    <td className="p-3">
                      <select
                        className={`border border-gray-300 rounded-md p-2 w-full  ${
                          attendance[emp.eno] === "Present"
                            ? "bg-green-500"
                            : attendance[emp.eno] === "Absent"
                            ? "bg-red-500"
                            : attendance[emp.eno] === "Leave"
                            ? "bg-yellow-500"
                            : "bg-gray-200"
                        }`}
                        onChange={(e) => handleAttendanceChange(emp.eno, e.target.value)}
                        value={attendance[emp.eno] || ""}
                      >
                        <option value="">Select</option>
                        <option value="Present">✅ Present</option>
                        <option value="Absent">❌ Absent</option>
                        <option value="Leave">🚀 Leave</option>
                      </select>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit Attendance</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Export Report</button>
        </div>
      </div>
    </div>

    </>
  );
};

export default AttendancePage;
