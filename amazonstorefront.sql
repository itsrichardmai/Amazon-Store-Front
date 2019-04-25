DROP DATABASE IF EXISTS amazon_db;

-- Creates the "amazon_db" database 
CREATE DATABASE amazon_db;

-- use 
USE amazon_db;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NULL,
    PRIMARY KEY (item_id)
);

-- Different cases 
-- (products_name, department_name, price, stock_quantity)

-- 1 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dat Good Ganja", "Pharmaceuticals/Medicine", 16.50, 20);
-- 2
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Watch Series 4 44mm", "Electronics", 429.99, 15);
-- 3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Airpod", "Electronics", 159.99, 10);
-- 4 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("EVGA RTX2080", "Video Graphics Cards(GPU)", 849.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MSI RTX2080", "Video Graphics Cards(GPU)", 900.0, 16);
-- 5 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LOL Riot Points", "Gift Card", 0, 100);
-- 6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hatchimals Limited Edition","Toys and Games", 69.99, 0)