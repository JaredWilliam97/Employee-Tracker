Employee Tracker


Please visit this link to view video:





https://drive.google.com/file/d/1JPtOjsG410ysqtnL2LxnxcrPLLyKq0yC/view?usp=sharing






In this project I built a solution for managing a company's employees using node, inquirer, and MySQL.

I designed the following database schema containing three tables:

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

You are able to view and manage the departments, roles, and employees in my company
so you can organize and plan my business.

I used MySQL npm package to connect to the MySQL database and perform queries.

I used the Inquirer package to interact with the user via command-line.

I used console.table to print MySQL row to the console.

I provided a seed.sql to pre-populate the database.

Credits:
Chip Long
Josh Lee
Alex Jurgs
Lacey Pape
Lauren Gabaldon
Tarik Maggio

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
