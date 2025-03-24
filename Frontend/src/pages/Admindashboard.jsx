import { useState, useEffect } from "react";
import Header from "../componenets/Header";

const AdminDashboard = () => {

  const[employees,setEmloyees] = useState([]);
  const [empLength, setEmpLength] = useState(null);
  const [genderWise,setGenderWise] = useState({ male : null , female : null})
  const [avgAge,setAvgAge] = useState({})
  const [department,setDepartment] = useState({ IT : null , HR : null , Finance : null , Sales : null , Marketing : null })

  const token = sessionStorage.getItem("token");

  const [performance,setPerformance] = useState([]);
  const [avgAttendance,setAvgAttendance] = useState([]);
  const [avgPerformance,setAvgPerformance] = useState([]);

  useEffect(() => {
    const getData = async () => {

        fetch("http://localhost:3000/employees", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          
          setEmloyees(data.data);
          setEmpLength(data.data.length);
          gender(data.data);
          departmentWise(data.data)
          ageLimit();
        })
         .catch((err) => console.log("error" + err));
      }

      getData();

    }, []);

    useEffect(() => {
    const getData = async () => {
        fetch("http://localhost:3000/employees/performance", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPerformance(data.data)
          calculatePerformace(data.data);
          calculateAttendance(data.data);
        })
         .catch((err) => console.log("error" + err));
      }

      getData();

    }, []);


    const gender = (employees) => {
        const MaleLength = employees.filter( ele => ele.gender == 'Male').length ;
        const femaleLength = employees.filter( ele => ele.gender == 'Female').length ;
        setGenderWise({ ...genderWise, male : MaleLength,female : femaleLength})
    }
    
    const departmentWise = (employees) => {
        const IT = employees.filter( ele => ele.Department == 'IT').length ;
        const HR = employees.filter( ele => ele.Department == 'HR').length ;
        const Finance = employees.filter( ele => ele.Department == 'Finance').length ;
        const Marketing = employees.filter( ele => ele.Department == 'Marketing').length;
        const Sales = employees.filter( ele => ele.Department == 'Sales').length ;
        setDepartment({ ...department, IT : IT  , HR : HR , Finance : Finance , Sales : Sales , Marketing : Marketing});
    }
    
    const calculateAttendance = (attendance) => {
        const Size = attendance.length ;
        const attendanceSum = attendance.reduce( (total,item) => total = total + item.attendance_percentage , 0)
        const result = attendanceSum / Size;
        setAvgAttendance(result)
    }
    const calculatePerformace = (performance) => {
        const size = performance.length ;
        const perfromanceSum = performance.reduce( (total,item) => total = total + item.rating , 0)
        const result = Math.round(perfromanceSum * 10 / size) / 10;
        setAvgPerformance(result)
    }


    const ageLimit =  async () => {
      try {
            const response = await fetch("http://localhost:3000/ageLimit", {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }).then ( data => data.json() )
          .then( ele => setAvgAge(ele.data[0]) )

      } catch (error) {
          console.error("Error fetching average age:", error);
      }
  };

  return (
    <>
      <Header />
      <div className="px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h1>

        {/* Employee Demographics */}
        <div className="h-2 bg-gradient-to-r from-blue-200 via-blue-500 to-purple-500 rounded-lg"></div>
        <div className="p-6 bg-white  mb-6 border-2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Employee Demographics & Distribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Overall Employee Count
              </h3>
              <p className="text-gray-600 text-xl">Total : {empLength}</p>
            </div>

            <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Age Distribution
              </h3>
              <p className="text-gray-600 text-sm">Age(average) : {avgAge.averageAge}</p>
              <p className="text-gray-600 text-center">{avgAge.averageAge ? <p>25-30</p> : <p>30-35</p>}</p>
            </div>

            <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Gender Ratio
              </h3>
              <p className="text-gray-600 text-md">Male : {genderWise.male}</p>
              <p className="text-gray-600 text-md">Female : {genderWise.female}</p>
            </div>

            <div className="bg-blue-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Location Graphic
              </h3>
              <p className="text-gray-600 text-md">Female : {genderWise.female}</p>
            </div>
         </div>
            
            <div className="bg-blue-100 p-2 rounded-md  text-lg shadow-md text-left flex space-x-2 mt-4 justify-around ">
              <h3 className="font-medium text-gray-700 mb-2">
                Department-wise Distribution(employee) : 
              </h3>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">IT : {department.IT}</p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">Marketing : {department.Marketing}</p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">Sales : {department.Sales}</p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">HR : {department.HR}</p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">Finance : {department.Finance}</p>
            </div>


        </div>

        {/* Performance & Attendance */}
        <div className="h-2 bg-gradient-to-r from-green-200 via-green-500 to-yellow-500 rounded-lg"></div>
        <div className="p-6 bg-white mb-6 border-2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Performance & Attendance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className="bg-green-100 p-4 rounded-md shadow-md text-center"
                >
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Leave Reports
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Insights coming soon...
                  </p>
                </div><div
                  className="bg-green-100 p-4 rounded-md shadow-md text-center"
                >
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Attendance Trends
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Average : { avgAttendance} %
                  </p>
                </div><div
                  className="bg-green-100 p-4 rounded-md shadow-md text-center"
                >
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Overall Performance Rating
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Out of 5 : {avgPerformance}
                  </p>
                </div>
          </div>
        </div>

        {/* Recruitment & Onboarding */}
        <div className="h-2 bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-500 rounded-lg"></div>
        <div className="p-6 bg-white border-2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Recruitment & Onboarding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Recruitment Reports", "Onboarding Reports"].map(
              (title, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 p-4 rounded-md shadow-md text-center"
                >
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Metrics will be displayed
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
