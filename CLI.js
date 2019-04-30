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
    console.log("Here is a list of currently trending items!")
    console.log("---------------------- < On Sale > ----------------------")

    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        // result is an array
        console.log(result);
        
        startApplication();
  
    })
});

function startApplication() {
    inquirer
    .prompt([
        {
        name: "itemID",
        message: "What is the ID of the item you wish to purchase?",
        type: "input",
        },
        {
        name: "quantity",
        type: "input",
        message: "How much of this item would you like?"
        },
        {
        name: "confirm",
        type: "confirm",
        message: "Are you sure?"
        }
    ]).then(function(inquirerResponse) {

        if (inquirerResponse.confirm) {
            var userAnswer = {
                itemID: parseInt(inquirerResponse.itemID),
                quantity: parseInt(inquirerResponse.quantity)
            }
            // console.log(typeof userAnswer.quantity)
            return userAnswer;
            
            

        }
        
        // if (inquirerResponse.confirm && inquirerResponse.quantity.parseInt() >= 0 && inquirerResponse.itemID.parseInt() >= 0) {
        
        // var itemID = inquirerResponse.itemID.parseInt()
        // console.log(itemID);
        // console.log(inquirerResponse);
        // }           
        // // if not, return.
        // return;
    })
    }
