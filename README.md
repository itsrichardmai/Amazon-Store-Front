What the project does: 

This is a amazon storefront project built using packages ("inquirer") and ("mysql")

Overview: 

"In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage." 

The focus of this project is to built familiarity working with databases while creating a cute, amazon-like store-front in your own command prompt. 
After we established a connection to mySQL, 

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

We SELECT *(all) from our "products" table and display it to the screen with this console.log ^. 
After displaying the items to the user, we use inquirer to prompt and guide the user based on responses. 
We ask for values "item_id" and "quantity",
which we will store in a variable "userAnswers". 
We will rereference these to know:

1) which item we are searching for (itemID); 
2) how much we wish to purchase(quantity);

In our database, all of the items were created with an identifer / primary key. 
Our checkStore() {} function will send this query to the database: 
("SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id=") 
connection.query( "" + query + userAnswer.itemID, function (err, result,) {
    We want to SELECT (values we want, values we want 2) FROM products table 
    and we need to tell the selector: 
    WHERE item_id=" + userAnswer.itemID; << the value of this should be whatever the user put>> 

('https://i.imgur.com/58qIDiG.png') running "node server.js"
('https://i.imgur.com/auAAmHz.png') item_id: 4, quantity: 2, confirm -> checkStore()

if store has quantity, we complete order and deplete quantity from database stock and update database. 

('https://i.imgur.com/Uai27uu.png') 
if not, the client will send the message to the user "Sorry, we do not have enough of this item in stock to sell you! Please try again later!" unfortunately, no matter how many times the user actually tries, this probably will not change unless database is updated. 

Finally, we use one last mySQL query to wrap up the assignment and update our database accordingly! 
('https://i.imgur.com/3kLFis2.png')


connection.end();


How users can get started with the project:
Simply clone this repository to your desired directory.  
Change directory in terminal to this directory and run the command 
"node server.js"
Follow instructions accordingly.

Where users can get help with your project:
('https://github.com/itsrichardmai')

Who maintains and contributes to the project:
('https://github.com/itsrichardmai')