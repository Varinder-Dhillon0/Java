var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dhillon",
  database : "taskads",
  insecureAuth : true
});

con.connect((err) =>{
    if(err) throw err;
    console.log("connected");
});

module.exports = con;
