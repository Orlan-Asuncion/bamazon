CREATE TABLE departments(
    department_id INT (10) NOT NULL,
    department_name VARCHAR (40) NOT NULL,
    over_head_costs INT (10) NOT NULL,
    product_sales INT (10)NOT NULL,
    total_profit INT (10) NOT NULL,
    PRIMARY KEY (department_id)
);
department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |