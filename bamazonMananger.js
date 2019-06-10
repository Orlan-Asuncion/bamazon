//require MySQL and inquirer
var mysql = require ("mysql");

var inquirer = require ("inquirer");

var Table = require("cli-table2");

var Id;

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
 connection.connect();