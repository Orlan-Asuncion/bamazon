--Drops the BamazonDB if it already exists --
DROP DATABASE IF EXISTS BamazonDB;

--Create a database called BamazonDB.--


CREATE DATABASE BamazonDB;

USE BamazonDB;

--Create table called products with the following columns (unique id for each item, name of product, department name, price,stock quantity)

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (100) NOT NULL,
    deparment_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    primary key (item_id)
);



SELECT * FROM products;

INSERT INTO products(product_name, deparment_name, price, stock_quantity)
VALUES ("Nike golf shoes", "Shoes", 65.00, 10),
        ("watch", "Jewelry", 23.99, 15),
        ("Sweaters", "Clothing", 25.30, 50),
        (" Baseball Caps", "Accessories", 15.00, 31),
        ("Mouse", "Computer",18.40, 70),
        ("Router", "Computer", 65.00, 100),
        ("Puma Shoes", "shoes", 78.99, 8),
        ("Samsung Galaxy Watch","Jewelry" 215.99, 6),
        ("Bicycle", "Sports", 255.98, 3),
        ("ViewSonic Monitor", "Electronics", 99.99, 10);
