const inquirer = require("inquirer");
const mysql = require("mysql");
const conTable = require("console.table");
const express = require("express");

// create mysql connection

const app = express();
const PORT = process.env.PORT || 3306;

// connectToSQL.connect((err) => {
//   if (err) throw err;
//   menuPrompt();
// });

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jerrsnuf!0",
  database: "employeeDB",
});
// initiated the prompt
init();
function init() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all employees":
          viewAllEmployees();
          break;

        case "View all departments":
          viewAllDepartments();
          break;

        case "View all roles":
          viewAllEmployeesByRole();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
      }
    });
}
// created a function so you can view all employees
function viewAllEmployeesByRole() {
  let query = "SELECT * FROM role";

  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}
//Created a function for view all departments
function viewAllDepartments() {
  let query = "SELECT * FROM department";

  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}
/// created a function for view all employees
function viewAllEmployees() {
  let query = "SELECT * FROM employee";

  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  });
}
// created a function for add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "First Name?",
        name: "AddFirstName",
      },
      {
        type: "input",
        message: "Last Name?",
        name: "AddLastName",
      },
      {
        type: "input",
        message: "Role ID?",
        name: "AddRoleID",
      },
      {
        type: "input",
        message: "Manager ID?",
        name: "AddManagerID",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answer.AddFirstName,
          answer.AddLastName,
          answer.AddRoleID,
          answer.AddManagerID,
        ],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
}
// created a function to add a department
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "Name of Department to add in?",
      name: "DepartmentName",
    })
    .then(function (answer) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [answer.DepartmentName],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
}
//created a function to add an role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Role title?",
        name: "title",
      },
      {
        type: "input",
        message: "Salary?",
        name: "salary",
      },
      {
        type: "input",
        message: "Department ID?",
        name: "deptID",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?)",
        [answer.title, answer.salary, answer.deptID],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
}
// Created function to update employee role
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of employee do you want to change?",
        name: "employeeOne",
      },
      {
        type: "input",
        message: "What is the last name of employee do you want to change?",
        name: "employeeTwo",
      },
      {
        type: "input",
        message: "What role ID do you want to change the employee to?",
        name: "roleid",
      },
    ])
    .then(function (answer) {
      connection.query(
        "UPDATE employee SET role_id=? WHERE first_name=? AND last_name=?",
        [answer.employeeOne, answer.employeeTwo, answer.roleid],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
}

// connectToSQL.connect((err) => {
//   if (err) throw err;
//   menuPrompt();
// });
