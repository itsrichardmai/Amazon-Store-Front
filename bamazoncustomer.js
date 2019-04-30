var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "ayoitsrich",

    password: "X6142298x",

    database: "amazon_db"
})

connection.connect(function(err) {
    if (err) throw err; 
    
    console.log("connected as id " + connection.threadId);
    console.log("Welcome to bAmazon! We have a large variety of items! Please feel free to browse around!")
    console.log("---------------------- < On Sale > ----------------------")
    console.log(result);
});