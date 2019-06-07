//require MySQL and inquirer
 var mysql = require ("mysql");

 var inquirer = require ("inquirer");
//create connection to db

 var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Odnalro329^",
    database: "BamazonDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });