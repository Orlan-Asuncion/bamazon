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
  
  // connection.connect(function(err) {
  //   if (err) throw err;
  //   console.log("connected as id " + connection.threadId);
    
 // });

 connection.connect();
//Display available products
 var display = function(){
   connection.query("SELECT * FROM products", function(err, res){
     if(err) throw err;
     console.log("********************************");
     console.log("       Welcome to Bamazon       ");
     console.log("********************************");
     console.log("");
     console.log("Find Your Product in our Inventory");
     console.log("");
     var table = new Table({
      head: ['Product Id', 'Product Description','Department', 'Cost','Stock Quantity' ],
      colWidths: [10, 20,15,10, 20],
      colAligns: [ "left" ],
      style: {
        head:["aqua"],
        compact: true
      }
    });
    for(var i= 0; i < res.length; i++){
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log(table.toString());
    console.log("");
    shopping();
 });
  

 };

  var shopping = function(){
    inquirer.prompt({
      name: "productToBuy",
      type: "input",
      message: "Please enter the product you wish to buy."
    }).then(function(answer1){
      var selection = answer1.productToBuy;
      Id = selection;
      connection.query("SELECT * FROM  products WHERE item_id=?", selection, function(err,res){
        if(err) throw err;
        if(res.length ===0){
          console.log("That Product doesn't exist, Please enter a Product Id from the list above");

          shopping();
        }else{
          console.log("all is okay");
         inquirer.prompt({
           name: "quantity",
           type: "input",
           message: " How many items would you like to buy?"
         }).then(function(answer2){
           connection.query("SELECT * FROM products WHERE item_id =?", Id, function(err, res){
            var quantity = answer2.quantity;
            if (quantity> res[0].stock_quantity){
              console.log("Our apololgies we only have "+ res[0].stock_quantity + " items of the product selected");
              shopping();
            }else{
              console.log("");
              console.log(res[0].product_name +" purchased");
              console.log(quantity + "qty@$" + res[0].price);
 
              var newQuantity = res[0].stock_quantity - quantity;
              console.log(newQuantity);
              console.log(res[0].item_id);
              connection.query(
                "UPDATE products SET stock_quantity =" + newQuantity + " WHERE item_id = ?",
                res[0].item_id,
                function(err, resUpdate){
                  if(err) throw err;
                  console.log("");
                  console.log("Your order has been processed");
                  console.log(" Thank You for Shopping With Us...!");
                  console.log("");
                  connection.end();
                }
              );
            }


           });
           
         });

        }
      });
    });
  };
 display(); 

  
 