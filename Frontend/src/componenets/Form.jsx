import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const Form = () => {
  
  const [id, setid] = useState("");
  const [username, setusername] = useState("");
  const [usergender, setusergender] = useState("Male");
  const [userdob, setuserdob] = useState("");
  const [useremail, setuseremail] = useState("");
  const [usermobileno, setusermobileno] = useState("");
  const [userstate, setuserstate] = useState("");
  const [usercity, setusercity] = useState("");
  const [useraddress1, setuseraddress1] = useState("");
  const [useraddress2, setuseraddress2] = useState("");
  const [usersalary, setusersalary] = useState("");
  const [useraccountno, setuseraccountno] = useState("");
  const [userpfno, setuserepfno] = useState("");
  const [userbank, setuserbank] = useState("BOI");
  const [userdepartment, setuserdepartment] = useState("IT");
  const [userdesignstion, setuserdesignstion] = useState("UI/UX");
  const [bank, setbank] = useState([]);
  const [designation, setdesignation] = useState([]);
  
  const [state, setstate] = useState([]);
  const [heading, setHeading] = useState(false);
  const [headingUpdate, setHeadingUpdate] = useState(false);
  
  const location = useLocation();
  const { show, add } = location.state;
  
  useEffect(() => {
    if (show == true && add == "add") {
      setHeading(true);
    } else {
      setHeadingUpdate(true);
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/getallbank")
      .then((res) => res.json())
      .then((result) => setbank(result.data))
      .catch((err) => console.log("error" + err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/getdesig")
      .then((res) => res.json())
      .then((result) => setdesignation(result.data))
      .catch((err) => console.log("error" + err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/getallcity")
      .then((res) => res.json())
      .then((result) => setstate(result.data))
      .catch((err) => console.log("error" + err));
  }, []);

  const handleinsert = () => {
    axios
      .post("http://localhost:3000/insertanemp", {
        eno: id,
        ename: username,
        salary: usersalary,
        state: userstate,
        city: usercity,
        gender: usergender,
        dob: userdob,
        email: useremail,
        mobileNo: usermobileno,
        Address1: useraddress1,
        Address2: useraddress2,
        Department: userdepartment,
        AccountNo: useraccountno,
        TfAccountNo: userpfno,
        BankCode: userbank,
        Designation: userdesignstion,
      })
      .then((response) => {
        if (response.data.success) {
          console.log("Insert successful");
        } else {
          console.log("Insert failed");
        }
      })
      .catch((error) => console.error("Insert error:", error));
  };

  const handleupdate = () => {
    axios
      .post("http://localhost:3000/updateanemp", {
        eno: id,
        ename: username,
        salary: usersalary,
        state: userstate,
        city: usercity,
        gender: usergender,
        dob: userdob,
        email: useremail,
        mobileNo: usermobileno,
        Address1: useraddress1,
        Address2: useraddress2,
        Department: userdepartment,
        AccountNo: useraccountno,
        TfAccountNo: userpfno,
        BankCode: userbank,
        Designation: userdesignstion,
      })
      .then((response) => {
        if (response.data.success) {
          console.log("update successful");
        } else {
          console.log("update failed");
        }
      })
      .catch((error) => console.error("update error:", error));
  };

  const handledelete = () => {
    axios
      .post("http://localhost:3000/deleteanemp", { eno: id })
      .then((data) => {
        if (data.data.success) {
          console.log("deleted Successfully");
        } else {
          console.log("error in deletion");
        }
      });
  };

  const handleFind = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/findbyid/${id}`); 
      console.log(result.data)
      if(result.data){
      toast.success("employee data found"); 
      setusername(result.data.ename); 
      setusergender(result.data.gender); 
      setuserdob(result.data.dob); 
      setuseremail(result.data.email); 
      setusermobileno(result.data.mobileNo); 
      setuserstate(result.data.state); 
      setusercity(result.data.city); 
      setuseraddress1(result.data.Address1); 
      setuseraddress2(result.data.Address2); 
      setuseraccountno(result.data.AccountNo); 
      setuserepfno(result.data.TfAccountNo); 
      setuserbank(result.data.BankCode); 
      setuserdesignstion(result.data.Designation); 
      setusersalary(result.data.salary)
      setuserdepartment(result.data.Department)
      }
    } 
    catch (error) {
      toast.error("Employee not found");
      console.error('Error fetching employee:', error);
    }
  };
  
  

  return (
    <div>
      <Header />

      <div className="p-10 b-solid-2">
        {heading && (
          <h1 className="text-center p-2 text-xl mt-2 mb-2 font-bold">
            Insert And Delete Employee
          </h1>
        )}
        {headingUpdate && (
          <h1 className="text-center p-2 text-xl mt-2 mb-2 font-bold">
            Find And Update Employee
          </h1>
        )}

        <div className="bg-yellow-200 border-2  drop-shadow-2xl rounded-lg shadow-2xl p-2 ml-[5%] mr-[5%] ">
          <form>
            <fieldset className="p-3 border border-black">
              <legend>EMPLOYEE DETAILS :</legend>
              <div className="flex gap-5 mt-2 ">
                <div className="flex gap-5 mx-auto leading-4 ">
                  <input
                    type="number"
                    name="eno"
                    placeholder="Employee Id"
                    className="rounded-lg"
                    onChange={(e) => setid(e.target.value)}
                    value={id}
                  />
                  <span id="seno" className="hidden text-red-800">
                    eno is must
                  </span>
                  <input
                    type="text"
                    id="ename"
                    name="ename"
                    placeholder="Employee Name"
                    onChange={(e) => setusername(e.target.value)}
                    className="rounded-lg"
                    value={username}
                  />
                  <span id="sename" className="hidden text-red-800">
                    ename is must
                  </span>
                  <br />
                  <br />
                  <label htmlFor="gender">Gender :</label>
                  <select
                    name="gender"
                    value={usergender}
                    onChange={(e) => setusergender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <br />
                  <br />
                  <label htmlFor="dab">DOB:</label>
                  <input
                    type="date"
                    name="dob"
                    max="2005-12-31"
                    placeholder="Employee DOB"
                    onChange={(e) => setuserdob(e.target.value)}
                    value={userdob}
                  />
                  <span id="sdob" className="hidden text-red-800">
                    Date of birth is must
                  </span>
                  <br />
                  <br />
                </div>
              </div>
            </fieldset>
            <fieldset className="p-3 border border-black">
              <legend>CONTACT DETAILS :</legend>
              <div className="flex-row mt-2 ">
                <div className="flex gap-5  leading-4 justify-center ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Employee Email"
                    className="rounded-lg"
                    onChange={(e) => setuseremail(e.target.value)}
                    value={useremail}
                  />
                  <span id="semail" className="hidden text-red-800">
                    Email is must
                  </span>
                  <br />
                  <br />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    pattern="[0-9]{10}"
                    placeholder="Employee M.no"
                    className="rounded-lg"
                    onChange={(e) => setusermobileno(e.target.value)}
                    value={usermobileno}
                  />
                  <span id="smobile" className="hidden text-red-800">
                    Mobile no. is must
                  </span>
                  <br />
                  <br />
                  <label htmlFor="state">State :</label>
                  <select
                    name="state"
                    value={userstate}
                    onChange={(e) => setuserstate(e.target.value)}
                  >
                    {/* <option value="select">--Select--</option> */}
                    {state.map((d) => {
                      return <option key={d.id}>{d.state}</option>;
                    })}
                  </select>
                  <br />
                  <br />
                </div>
                <div className="flex gap-3  mt-2 leading-4 justify-center">
                  <label htmlFor="city">City :</label>
                  <select
                    name="city"
                    value={usercity}
                    onChange={(e) => setusercity(e.target.value)}
                  >
                    {/* <option value="select" >--Select--</option> */}
                    {state.map((d) => {
                      return <option key={d.id}>{d.city}</option>;
                    })}
                  </select>
                  <br />
                  <br />
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    placeholder="Employee Address1"
                    className="rounded-lg"
                    onChange={(e) => setuseraddress1(e.target.value)}
                    value={useraddress1}
                  />
                  <span id="saddress1" className="hidden text-red-800">
                    Address1 is must
                  </span>
                  <br />
                  <br />
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    placeholder="Employee Address2"
                    className="rounded-lg"
                    onChange={(e) => setuseraddress2(e.target.value)}
                    value={useraddress2}
                  />
                  <br />
                  <br />
                </div>
              </div>
            </fieldset>
            <fieldset className="p-3 border border-black">
              <legend>ACCOUNT DETAILS :</legend>
              <div className="flex  gap-5 mt-2">
                <div className="flex gap-5 mx-auto leading-4 ">
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    placeholder="Employee salary"
                    className="rounded-lg"
                    onChange={(e) => setusersalary(e.target.value)}
                    value={usersalary}
                  />
                  <span id="sData" className="hidden text-red-800">
                    salary is must
                  </span>
                  <br />
                  <br />
                  <input
                    type="number"
                    id="accountNo"
                    name="accountNo"
                    placeholder="Employee AccountNo"
                    className="rounded-lg"
                    onChange={(e) => setuseraccountno(e.target.value)}
                    value={useraccountno}
                  />
                  <span id="saccountNo" className="hidden text-red-800">
                    accountNo is must
                  </span>
                  <br />
                  <br />
                  <input
                    type="number"
                    id="TFAccountNo"
                    name="TFAccountNo"
                    placeholder="Employee PFaccountNo"
                    className="rounded-lg"
                    onChange={(e) => setuserepfno(e.target.value)}
                    value={userpfno}
                  />
                  <br />
                  <br />
                  <label htmlFor="bankCode">Bank Code :</label>
                  <select
                    name="bankCode"
                    value={userbank}
                    onChange={(e) => setuserbank(e.target.value)}
                  >
                    {bank.map((d) => {
                      return <option key={d.id}>{d.BankCode}</option>;
                    })}
                  </select>
                  <br />
                  <br />
                </div>
              </div>
            </fieldset>
            <fieldset className="p-3 border border-black">
              <legend>DEPARTMENT DETAILS :</legend>
              <div className="flex  gap-5 mt-2 ">
                <div className="flex gap-5 mx-auto leading-4">
                  <label htmlFor="department">Department :</label>
                  <select
                    name="department"
                    value={userdepartment}
                    onChange={(e) => setuserdepartment(e.target.value)}
                  >
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                  </select>
                  <br />
                  <br />
                  <label htmlFor="designation">Designation :</label>
                  <select
                    name="designation"
                    value={userdesignstion}
                    onChange={(e) => setuserdesignstion(e.target.value)}
                  >
                    {designation.map((d) => {
                      return (
                        <option key={d.designation}>{d.designation}</option>
                      );
                    })}
                  </select>
                  <br />
                  <br />
                </div>
              </div>
            </fieldset>
            <br />

            {heading && (
              <div className="text-center">
                <button
                  type="button"
                  className="b-2 w-[20%] bg-blue-500 text-lg m-5 rounded-md text-white hover:bg-blue-700"
                  onClick={handleinsert}
                >
                  Insert
                </button>
                <button
                  type="button"
                  className="b-2 w-[20%] bg-blue-500 text-lg m-5 rounded-md text-white hover:bg-blue-700"
                  onClick={handledelete}
                >
                  Delete By Employee Id
                </button>
                <button
                  type="button"
                  className="b-2 w-[20%] bg-blue-500 text-lg m-5 rounded-md text-white hover:bg-blue-700"
                  onClick={handleFind}
                >
                  Find By Employee Id
                </button>
              </div>
            )}
            {headingUpdate && (
              <div className="text-center">
                <button
                  type="button"
                  className="b-2 w-[20%] bg-blue-500 text-lg m-5 rounded-md text-white hover:bg-blue-700"
                  onClick={handleFind}
                >
                  Find By Employee Id
                </button>
                <button
                  type="button"
                  className="b-2 w-[20%] bg-blue-500 text-lg m-5 rounded-md text-white hover:bg-blue-700"
                  onClick={handleupdate}
                >
                  Update
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};
export default Form;
