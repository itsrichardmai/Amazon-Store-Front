var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "ayoitsrich",

    password: "X6142298x",

    database: "amazon_db"
})

var userAnswer = {};

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

        // application that uses inquirer to ask the user for requested ID and requested quantity. will return a  
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
            userAnswer = {
            itemID: parseInt(inquirerResponse.itemID),
            quantity: parseInt(inquirerResponse.quantity)
        }
        if (inquirerResponse.confirm && userAnswer.itemID >= 1 && userAnswer.quantity >= 1) {
            // console.log(typeof userAnswer.quantity)
            // return userAnswer;
            checkStore(userAnswer);
        }
        
        else 

        console.log("Error! You did not enter a valid number!")
        return;
        
        // if (inquirerResponse.confirm && inquirerResponse.quantity.parseInt() >= 0 && inquirerResponse.itemID.parseInt() >= 0) {
        
        // var itemID = inquirerResponse.itemID.parseInt()
        // console.log(itemID);
        // console.log(inquirerResponse);
        // }           
        // // if not, return.
        // return;
    })
    }


    function checkStore() {
        
            var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id=";
            connection.query( "" + query + userAnswer.itemID, function (err, result,) {
                if (err) throw err;
                    // result is an array   
                    console.log(result[0].item_id)
                    // var response = {
                    //     department_name: result.department_name,
                    //     price: result.price,
                    //     stock: result.stock_quantity,
                    //     name: result.product_name
                    // }
                            console.log("Your item is: " + result[0].product_name)
                            console.log("Your item is in the " + result[0].department_name + " category!")
                            console.log("The price of this item is: " + result[0].price);
                            console.log("There are " + result[0].stock_quantity + " of this item left in stock.")
                            console.log("-------------------------------------------------------");
                            console.log("You wanted to purchase " + userAnswer.quantity + " of this item");

                if (userAnswer.quantity >= result[0].stock_quantity) {
                    console.log("Sorry, we do not have enough of this item in stock to sell you! Please try again later!");
                    return;
                }

                            
                    
                console.log("Excellent! We have the stock to meet your order's requirements!");
                console.log("Your order total will be: $" + (result[0].price * userAnswer.quantity));

                var remainingQuantity = result[0].stock_quantity;
                remainingQuantity -= userAnswer.quantity;
                // console.log(remainingQuantity);
                var sql = "UPDATE products SET stock_quantity =" + remainingQuantity + " WHERE item_id=" + userAnswer.itemID;
                connection.query("" + sql, function(err, result){
                    if (err) throw err;
                    // console.log(result)
                    console.log("There are only " + remainingQuantity + " of this item left.");
                    connection.end();
                });
        
    })
}
    