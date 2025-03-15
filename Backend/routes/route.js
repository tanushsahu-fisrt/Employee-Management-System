const express = require("express");
const db = require("../controllers/mydb");
const routes = express.Router();
const session = require("express-session");
const jwt = require("jsonwebtoken");

const secret_key = "12345";

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

routes.get("/employees", db.getallemployees);

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
      secret_key, 
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

module.exports = routes;
