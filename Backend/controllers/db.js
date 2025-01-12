const mysql = require("mysql2/promise")

const conn = mysql.createConnection({
    host: "localhost",
    password : "1234",
    database : "classwork",
    user : "root",
})

module.exports = conn;