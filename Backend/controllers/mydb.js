const Database = require("./db");
const empmethods=require("./empmethods");

const secret_key = "12345";


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
        const data= await (await Database).execute("select * from designation") 

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
        const data= await (await Database).execute("select * from bank")
       

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

const checklogin = async (email , password) => {
    try{
        const [result] = await (await Database).execute("SELECT * FROM user WHERE email = ? AND password = ?",[email, password]);
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

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer token

    if (!token) {
        return res.status(403).json({ msg: "Token required" });
    }

    try {
        const decoded = jwt.verify(token, secret_key);
        console.log("Decoded Token:", decoded);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid or expired token" });
    }
};




module.exports = { insertemp , getallcity, empsalary, changepw , getalldesig,getbankcode, getallemployees , updateemp, deleteemp , checklogin , generatesalary , verifyToken}