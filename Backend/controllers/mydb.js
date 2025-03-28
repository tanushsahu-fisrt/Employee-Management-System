const Database = require("./db");
const empmethods=require("./empmethods");

const getallemployees = async (req,res) => {

    try{   
        const data= await (await Database).execute("select * from emp")
        res.send({
            succes : "true",
            msg: "succes in geting all emp",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg : "error in getting all employes",
            error,
        })
    }
};

const insertemp = async (req,res) => {
    
    try{
        const data =await (await Database).execute("insert into emp(eno,ename,salary,city,state,gender,dob,email,mobileNo,Address1,Address2,Department,AccountNo,TfAccountNo,BankCode,Designation) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                            [
                                req.body.eno,   req.body.ename,
                                req.body.salary,req.body.city,
                                req.body.state, req.body.gender,
                                req.body.dob,   req.body.email,req.body.mobileNo,
                                req.body.Address1,   req.body.Address2,
                                req.body.Department, req.body.AccountNo,
                                req.body.TfAccountNo,req.body.BankCode,
                                req.body.Designation
                            ]);
        res.send({  
            success : "true",
            msg: "Employee inserted successfully",
            data: data[0],
        })
        
    }
    catch(err){
        res.send({
            success : false,
            msg : "error in inserting an employes",
            err,
        })
    }
};

const getallcity =async (req, res) => {
    try {
      const result = await empmethods.getcity(); 
  
      if (result.succes) {
        res.status(200).send(result);
      } else {
        res.status(500).send({ 
          succes: false, 
          msg: "Failed to fetch cities", 
          error: result.err, 
        });
      }
    } catch (err) {
      console.error("Error in getallcity:", err);
      res.status(500).send({ succes: false, msg: "Internal Server Error", error: err });
    }
};

const getalldesig = async (req,res) =>{

    try{   
        const data= await (await Database).execute("select distinct(designation) from emp") 

        res.send({
            succes : "true",
            msg: "succes in geting all emp",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg : "error in getting all employes",
            error,
        })
    }
};

const getbankcode = async (req,res)=>{
    try{   
        const data= await (await Database).execute("select distinct(BankCode) from emp")
        res.send({
            succes : "true",
            msg: "succes in geting all emp",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg : "error in getting all employes",
            error,
        })
    }
};

const updateemp = async (req,res) => {
    try{
        const data = await (await Database).execute(` UPDATE emp SET 
                                                            ename = '${req.body.ename}', 
                                                            salary = ${req.body.salary}, 
                                                            state = '${req.body.state}', 
                                                            city = '${req.body.city}', 
                                                            gender = '${req.body.gender}', 
                                                            dob = '${req.body.dob}', 
                                                            email = '${req.body.email}', 
                                                            mobileNo = '${req.body.mobileno}',                                                                  
                                                            Address1 = '${req.body.address1}', 
                                                            Address2 = '${req.body.address2}', 
                                                            Department = '${req.body.department}', 
                                                            AccountNo = '${req.body.accountno}', 
                                                            TfAccountNo = '${req.body.tfaccount}', 
                                                            BankCode = '${req.body.bankcode}', 
                                                            Designation = '${req.body.designation}'
                                                            WHERE eno = ${req.body.eno}; `)

        res.send({
            success : "true",
            msg: "succes in updating an emp",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg: "error in updating in employees",
            error,
        })
    }
};

const deleteemp = async (req,res)=>{
        try{
            const data = await (await Database).execute(`delete from emp WHERE eno=${req.body.eno}`);
            res.send({
                success : "true",
                msg: "deleted Succesfully",
                data:data[0],
            })
        }
        catch(error){
            res.send({
                succes : false,
                msg: "error in deleting in employees",
                error,
        })
    }
};

const checklogin = async (email , password , role) => {
    try{
        const [result] = await (await Database).execute("SELECT * FROM user WHERE email = ? AND password = ? AND type = ?",[email, password , role]);
        return result;    
    }
    catch(err){
        return{
            success : false,
            msg : 'failure in geting employee',
            data : err,
        }
    }
}

const changepw = async (req,res) => {
    try{
        const data =await (await Database).execute(`update user SET password = ? where email = ? `,[req.body.confirm_Password, req.body.email]);

        return res.status(200).json({
            success : "true",
            msg: "succes in updating an password",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg: "error in updating in employees password sql",
            error,
        })
    }
}

const generatesalary = async (req, res) => {
    try {

        const [employees] = await (await Database).execute("SELECT * FROM emp");
        const [payparameter] = await (await Database).execute("SELECT * FROM payparameter");

        //console.log("Employees:", employees);
        //console.log("Pay Parameters:", payparameter);

        const results = [];

        for (const employee of employees) {
            const { eno, salary, Designation, Department } = employee;
           
            const parameter = payparameter.find(
                (p) => p.designation === Designation && p.department === Department
            );

            if (!parameter) {
                console.log(`No parameter found for Eno: ${eno}, Designation: ${Designation}, Department: ${Department}`);
                continue; 
            }

            const da = (salary * parameter['DA%']) / 100;
            const ta = (salary * parameter['TA%']) / 100;
            const hra = (salary * parameter['HRA%']) / 100;
            const spall = (salary * parameter['SPALL%']) / 100;

            const gross_salary = salary + da + ta + hra + spall;
            const EPT = 1234; 
            const ESI = 1024; 
            const net_salary = gross_salary - EPT - ESI;

            //console.log(`Eno: ${eno}, Gross data: ${gross_Data}, Net data: ${net_Data}`);

            const [newsalary] = await (await Database).execute(
                `INSERT INTO paymaster (month,year,eno, salary, DA, TA, HRA, EPT,ESI,SPALL , GROSS_NET)
                VALUES (MONTH(CURDATE()), YEAR(CURDATE()),?, ?, ?, ?, ?, ?, ? ,?, ?)`,
                [eno, salary, da, ta, hra, EPT,ESI, spall,net_salary]
            );
            results.push(newsalary);
        }

        res.send({
            success: true,
            msg: "Success in paymaster for employees",
            data: results,
        });
    } catch (err) {
        res.send({
            success: false,
            msg: "Error in paymaster for employees",
            err,
        });
    }
};

const empsalary = async (req,res)=>{

    try{   
        const data= await (await Database).execute("select * from paymaster")
    
        res.send({
            succes : "true",
            msg: "succes in geting all emp salry",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg : "error in getting all employes salry",
            error,
        })
    }
};


const findbyid = async (id) => {
    try {
      const [data] = await (await Database).execute("SELECT * FROM emp WHERE emp.eno = ?", [id]); //Destructure the array.
      return data; 
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };

const findEmpByDepartment = async (departmentName) => {
    try {
        const [data] = await (await Database).execute("SELECT * FROM emp WHERE emp.Department = ?", [departmentName]); //Destructure the array.
        return data; 
    }catch (err) {
        console.error(err);
        throw err; 
    }
}

const ageLimit = async (req,res) => {
    try{   
        const data= await (await Database).execute(`select ROUND (AVG( year(curdate()) - CAST(SUBSTRING(dob, 1, 4)
                                        as unsigned))) AS averageAge from emp`)
        res.send({
            succes : true,
            msg: "succes in geting age",
            data:data[0],
        })
    }
    catch(error){
        res.send({
            succes : false,
            msg : "error in getting all employes",
            error,
        })
    }
}

const getProfile = async (req,res) => {
        const eno = req.query.eno;
        
        // Check if eno is provided
        if (!eno) {
        return res.status(400).json({ error: 'ENO is required' });
        }
        try{   
            const data= await (await Database).execute(`select * from  emp where eno = ?`,[eno])
            res.send({
                succes : true,
                msg: "succes in geting profile",
                data:data[0],
            })
        }
        catch(error){
            res.send({
                succes : false,
                msg : "error in getting profile",
                error,
            })
        }
}


const avgSalaryByDpt = async (req,res) => {
        const department = req.query.department;

        // Check if department is provided
        if (!department) {
             return res.status(400).json({ error: 'department is required .' });
        }
        try{   
            const data= await (await Database).execute(`select ROUND(AVG(salary)) as AvgSalary from emp where Department = ?`,[department])
            res.send({
                succes : true,
                msg: "succes in avg salary by department",
                data : data[0],
            })
        }
        catch(error){
            res.send({
                succes : false,
                msg : "error in getting profile",
                error,
            })
        }
}

const empPerfromance = async (req, res) => {
    const userId = req.params.userId;
    try{
        const result = await (await Database).execute(`SELECT e.ename, e.department, ep.review_date, 
                        ep.rating, ep.feedback, ep.projects_completed, 
                        ep.attendance_percentage, ep.training_completed 
                        FROM emp e
                        JOIN emp_performance ep ON e.eno = ep.emp_id
                        WHERE e.eno = ?;`
                        ,[userId]);
        
        res.send({
            succes : true,
            msg: "succes in employees performance",
            data : result[0],
        })
    }
    catch(err){
        res.send({
            succes : false,
            msg : "error in getting profile",
            err,
        })
    }
}

const AllEmpPerfromance = async (req, res) => {
    try{
        const result = await (await Database).execute(`SELECT * from emp_performance`);
        res.send({
            succes : true,
            msg: "succes in employees performance",
            data : result[0],
        })
    }
    catch(err){
        res.send({
            succes : false,
            msg : "error in getting profile",
            err,
        })
    }
}

const setAttendance = async (req,res) => {
    
    try{
    const apiData = req.body;

    for(const row of apiData){
        const { emp_id,attendance_status,Date} = row;
        (await Database).execute(`INSERT INTO emp_attendance (emp_id,attendance_status,Date) VALUES(?,?,?)`,[emp_id,attendance_status,Date])
    }
        res.send({
            succes : true,
            msg: "succes in attendance",
        })
    }
    catch(err){
        res.send({
            succes : false,
            msg : "error in getting attendance",
        })
    }
}

const getAttendance = async (req,res) => {
    const {date} = req.params;

    try{
        const [result] = await (await Database).execute(`Select * from emp_attendance where Date = ?`,[date])
        
            if (result.length > 0) {
            res.status(200).json({
              success: true,
              msg: 'Attendance retrieved successfully',
              data: result,
            });
          } else {
            res.status(404).json({
              success: false,
              msg: 'Attendance not found for the given date',
            });
          }
    }
    catch(err){
        console.error('Database error:', err);
        res.status(500).json({
            success: false,
            msg: 'Internal server error',
            error: err.message, 
        });
    }
}

const getUserAtd = async (req,res) => {
    const {eno} = req.params;
    
    try{
        const [result] = await (await Database).execute(`select * from emp_attendance where emp_id = ?`,[eno])
        
            if (result.length > 0) {
            res.status(200).json({
              success: true,
              msg: 'Attendance retrieved successfully',
              data: result,
            });
          } 
          else {
            res.status(200).json({
              success: false,
              msg: 'Attendance not found for the given date',
              data : [],
            });
          }
    }
    catch(err){
        console.error('Database error:', err);
        res.status(500).json({
            success: false,
            msg: 'Internal server error',
            error: err.message, 
        });
    }
}

module.exports = { insertemp , avgSalaryByDpt, getProfile,
                    ageLimit, findEmpByDepartment , findbyid , 
                    getallcity, empsalary, changepw , getalldesig,
                    getbankcode, getallemployees , updateemp, 
                    deleteemp , checklogin , generatesalary ,
                    empPerfromance , AllEmpPerfromance,setAttendance,
                    getAttendance , getUserAtd
                }