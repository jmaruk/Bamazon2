var inquirer = require('inquirer');
inquirer.prompt([{
    type: "input", 
    name: "Item_ID", 
    message: "What is the ID of the product you want to buy?"}, 

    {type: "input", 
    name: "Quanity", 
    message: "How many units of this product would you like to buy?"}]).then(answers => {
    console.log(answers);
    connection.query('SELECT stock_quantity FROM products WHERE item_id =' + answers.Item_ID, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
      });
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '/',
  password : '',
  database : 'bamazon'
});
 
connection.connect();
 

 
connection.end();

