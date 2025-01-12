const express = require("express");
const cors = require("cors");

const route = require("./routes/route");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3000, () => {
  console.log("server started at 3000");
});
