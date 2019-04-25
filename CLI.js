var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "ayoitsrich",

    password: "X6142298x",

    database: "bamazon_db"
})

connection.connect(function(err) {
    if (err) throw err; 
    console.log("[mysql error]",err);
    console.log("connected as id " + connection.threadId)
});