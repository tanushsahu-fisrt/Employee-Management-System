require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser  = require("body-parser");


const app = express();
const route = require("./routes/route");

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin : "http://localhost:5173" , credentials : true }));
app.use(express.json());
app.use(route);

app.listen(3000, () => {
  console.log("server started at 3000");
});
