const inquirer = require("inquirer");
const mysql = require("mysql");

// create mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jerrsnuf!0",
  database: "employeeDB",
});

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View Departments",
          "View All Employees",
          "Add Employee",
          "Remove Employee",
          "Update Employee Manager",
          "Update Employee Role",
          "Exit program",
        ],
        name: "choice",
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "View All Employees":
          break;
        case "View All Employees By Department":
          break;
        case "View All Employees By Manager":
          break;
        case "Add Employee":
          break;
        case "Remove Employee":
          break;
        case "Update Employee Role":
          break;
        case "Update Employee Manager":
          break;
        default:
          connection.end();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        throw new Error(
          "Prompt couldn't be rendered in the current environment."
        );
      } else {
        throw error;
      }
    });
}

const viewDepartments = () => {
  let insertSQL = "SELECT * FROM department";
  connectToSQL.query(insertSQL, function (err, res) {
    res.forEach((department) => {
      console.log(`ID: ${department.id} | ${department.name}`);
    });
    menuPrompt();
  });
};
