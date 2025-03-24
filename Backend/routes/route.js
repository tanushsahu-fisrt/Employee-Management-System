const express = require("express");
const db = require("../controllers/mydb");
const routes = express.Router();
const session = require("express-session");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");
const multer = require("multer");

const upload = multer();

routes.use(
  session({
    secret: "abc",
    resave: true,
    saveUninitialized: true,
  })
);

routes.get("/getdesig", db.getalldesig);

routes.get("/getallcity", db.getallcity);

routes.get("/getallbank", db.getbankcode);

routes.get("/employees", verifyToken, db.getallemployees);

routes.post("/insertanemp", db.insertemp);

routes.post("/updateanemp", db.updateemp);

routes.post("/deleteanemp", db.deleteemp);

routes.post("/changepw", db.changepw);

routes.post("/checklogin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  try {
    const result = await db.checklogin(email, password,role);

    if(result.length === 0) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const user = result[0];
    const token = jwt.sign(
      { id: user.eno, email: user.email, type: user.type }, 
      process.env.secret_key, 
      { expiresIn: '1h' }
    );

    console.log(token);

    return res.json({
      msg: "success",
      jwtoken : token,
      data:  {  
              eno: user.eno,
              email: user.email,
              type: user.type,
            }
    });
  } 
  catch (err) {
    console.log(err);
    res.send("login failed");
  }
});

routes.get("/generatesalary", db.generatesalary);

routes.get("/empsalary", db.empsalary);

routes.get("/findbyid/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.findbyid(id); 
    if (result && result.length > 0) {
      res.json(result[0]); 
    } 
    else {
      res.status(404).json({ success: false, message: "Employee not found" }); 
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

routes.get("/department/:departmentName", verifyToken , async (req,res) => {
  const departmentName = req.params.departmentName;
  try{
    const result = await db.findEmpByDepartment(departmentName); 
    if( result && result.length > 0){
      res.json(result);
    }
  }catch(err){
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
})

routes.get("/ageLimit",verifyToken, db.ageLimit);

routes.get("/profile",verifyToken,db.getProfile);

routes.get("/avgSalaryByDpt",verifyToken, db.avgSalaryByDpt);

routes.get("/employee/:userId/performance", verifyToken,db.empPerfromance );

routes.get("/employees/performance", verifyToken,db.AllEmpPerfromance );


module.exports = routes;
