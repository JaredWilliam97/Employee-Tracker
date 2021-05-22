DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
    id INT AUTOiNCREMENNT PRIMARY KEY,
    title VARCAHR(30),
    slary DECIMAL,
    department_id INT
)

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title, VARCAHR(30),
    slary DECIMAL,
    department_id INT
)

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL
);