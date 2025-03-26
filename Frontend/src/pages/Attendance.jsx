import React, { useState , useEffect } from "react";
import Header from "../componenets/Header";
import axios from "axios";
import { ToastContainer , toast} from "react-toastify";
import "react-toastify/ReactToastify.css"

const AttendancePage = () => {

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("All");
  const [attendance, setAttendance] = useState({});
  const[employees,setemployees] = useState([]);

  const token = sessionStorage.getItem("token");
      
  useEffect( () => {
          fetch("http://localhost:3000/employees",{
            method : "Get",
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          .then( (res) => res.json() )
          .then( (data) => {
              setemployees(data.data);
          })
          .catch( (err) => console.log('error' + err))
      },[])

  const handleAttendanceChange = (id, status) => {
    setAttendance({ ...attendance, [id]: status });
  };

  const func = (date,obj) => Object.entries(obj).map(([k,v]) =>({ 'emp_id': k, 'attendance_status' : v , 'Date' : date}) )

  const handleSubmit = async () => {
    const data = func(date,attendance)

    const result = await axios.post("http://localhost:3000/attendance" , data ,{
      headers : {
        Authorization :  `Bearer ${token}`
      }, 
    })
    console.log(result);
      if(result.data.succes){
        toast.success('Attendance Filed!')
        setDate("")
        setAttendance({});
      }
    }

    useEffect(() => {
      if (date) { // Check that date has a value.
        const fetchData = async () => {
          try {
            const result = await axios.get(`http://localhost:3000/attendanceByDate/${date}`);
            const attendanceData = result.data.data;
            
            if (attendanceData.length > 0){
              const attendanceMap = attendanceData.reduce((acc, entry) => {
                acc[entry.emp_id] = entry.attendance_status;
                return acc;
              }, {});
              setAttendance(attendanceMap);
            } else {
              setAttendance({});
            }
          } catch (error) {
            console.error('Error fetching attendance data:', error);
          }
        };
        fetchData();
      }
    }, [date]);
    
  return (
    <>
        <Header />
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-black text-center mb-6">
          Employee Attendance
        </h1>

        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Employee"
            className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="flex justify-center mx-auto space-x-5">
          <select
            className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="max-h-[380px] overflow-scroll">
          <table className="w-full bg-white border border-gray-600 rounded-lg shadow-md ">
            <thead className="bg-gray-500 ">
              <tr className="text-left text-white ">
                <th className="p-3">EmployeeNo</th>
                <th className="p-3">EmployeeID</th>
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
                    <td className="p-3">{emp.eno}</td>
                    <td className="p-3" >{emp.ename}</td>
                    <td className="p-3">{emp.Department}</td>
                    <td className="p-3">
                      <select
                        className="border border-gray-300 rounded-md p-2 w-full bg-gray-200"
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
          <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-blue-300 "
          onClick={handleSubmit}
          disabled={!date}
          >
            Submit Attendance
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Export Report</button>
        </div>
      </div>
    </div>
    
    <ToastContainer autoClose={1000} position="top-right"/>
    </>
  );
};

export default AttendancePage;
