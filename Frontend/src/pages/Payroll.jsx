import { useEffect, useState } from "react";
import Header from "../componenets/Header";
import axios from "axios";

const Payroll = () => {

    const [department, setDepartment] = useState({
        IT: null,
        HR: null,
        Finance: null,
        Sales: null,
        Marketing: null
    });
    const [avgSalary , setAvgSalary] = useState(null);
    const token = sessionStorage.getItem("token");
    let arrSalary = [];
    useEffect( () => {
        const departments = ["HR", "IT", "Finance", "Marketing", "Sales"];
        departments.forEach(dept => getAvgByDepartmnet(dept));
    }, [])

    useEffect(() => {
        const getData = async () => {
            fetch("http://localhost:3000/employees", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => data.data.forEach( ele =>{arrSalary.push(ele.salary)})
            )
            .then( () => salFunction(arrSalary))
            .catch((err) => console.log("error" + err));
          }
          getData();
        }, []);
    

    const getAvgByDepartmnet = async (depart) => {
        const result = await axios.get(`http://localhost:3000/avgSalaryByDpt?department=${depart}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        setDepartment( prev => ({ ...prev , [depart] : result.data.data[0].AvgSalary}) )
    }

    const salFunction = (arrSalary) => {
        const len = arrSalary.length;
        const sum = arrSalary.reduce((s,t) => t=s+t,0);
        const division = sum/len;
        setAvgSalary(division);
    }


  return (
    <>
      <Header />

      <div className="flex justify-center mb-4">
        <h1 className="text-center font-bold text-black py-3 rounded-lg text-2xl px-3 ">
          Salary & Compensation
        </h1>
      </div>

      <div className="p-4 mt-5 mx-2">
        {/* Salary Distribution */}
        
        <div className="h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-purple-700 rounded-lg"></div>
        <div className= "">
          <div className=" p-3 border-2 shadow-2xl space-y-4">
            <h2 className="text-xl font-semibold">Salary Distribution</h2>
            <div className="bg-blue-100 p-2 rounded-md  text-lg  text-left flex space-x-2 mt-4 justify-around ">
              <h3 className="font-medium text-gray-700 mb-2">
                Average salary by department(avg) :
              </h3>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">
                IT : ₹ {department.IT}
              </p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">
                Marketing : ₹ {department.Marketing}
              </p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">
                Sales : ₹ {department.Sales}
              </p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">
                HR : ₹ {department.HR}
              </p>
              <p className="text-black border-2 border-white bg-green-300 px-5 rounded-md">
                Finance : ₹ {department.Finance}
              </p>
            </div>
            <div className="bg-blue-100 p-2 rounded-md  text-lg shadow-md text-left flex  mt-4 justify-around ">
              <h3 className="font-medium text-gray-700 mb-2 flex">
              Average Salary Distribution  :  {avgSalary ? <p className="mx-2">₹ {avgSalary}</p>: <p>not available</p>}
              </h3>
            </div>
            <p></p>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-500 rounded-lg mt-8"></div>
        <div className="p-6 bg-white border-2 shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Performance & Compensation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Performance Metrics */}
          <div className="bg-yellow-100 p-3 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Performance Metrics</h2>
            <p>Department-wise performance averages</p>
            <p>Top and bottom performers</p>
          </div>

          {/* Compensation Analysis */}
          <div className="bg-yellow-100 p-3 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Compensation Analysis</h2>
            <p>Bonus & incentives distribution</p>
            <p>Equity & benefits comparison</p>
          </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Payroll;
