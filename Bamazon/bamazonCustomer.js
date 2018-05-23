var itemId = "";
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon'
}); 

var inquirer = require('inquirer');


function questions() {

  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  
  inquirer.prompt([{
    type: "input", 
    name: "Item_ID", 
    message: "What is the ID of the product you want to buy?"}]).then(function(answers) {
      itemId = answers.Item_ID;
      inquirer.prompt([ 

        {type: "input", 
        name: "Quanity", 
        message: "How many units of this product would you like to buy?"}]).then(function(answers) {
        console.log(answers);
        connection.query('SELECT stock_quantity FROM products WHERE item_id =' + itemId, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
          });
          questions();
    });
  });
}



questions();
 
// connection.connect();
 

 
// connection.end();

