import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import SalaryTable from "./SalaryTable";

const Allsalary = () => {
  const [salArr, setsalArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/empsalary")
      .then((result) => setsalArr(result.data.data))
      .catch((e) => console.error(e));
  }, []);
 
  return (
    <>
    
      <Header />
      <h2 className="text-2xl text-bold text-center mt-2">Summary of Employees Salary</h2>
      <SalaryTable salArr={salArr} />
    </>

  );
};

export default Allsalary;
