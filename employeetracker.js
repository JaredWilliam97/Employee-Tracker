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

const viewRoles = () => {
  let insertSQL = "SELECT * FROM role";
  connectToSQL.query(insertSQL, function (err, res) {
    res.forEach((role) => {
      console.log(
        `ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.departmentID}`
      );
    });
    menuPrompt();
  });
};

const viewEmployees = () => {
  let insertSQL = "SELECT * FROM employee";
  connectToSQL.query(insertSQL, function (err, res) {
    res.forEach((employee) => {
      console.log(
        `ID: ${employee.id} | Name: ${employee.firstName} ${employee.lastName} | Role ID: ${employee.roleID} | Manager ID: ${employee.managerID}`
      );
    });
    menuPrompt();
  });
};

const addEmployee = () => {
  connectToSQL.query("SELECT * FROM role", ((err, res) => {
      if(err) throw (err);
      inquirer.prompt([
          {
              name: "firstName",
              type: "input",
              message: "Insert First Name",
          },
          {
              name: "lastName",
              type: "input",
              message: "Insert Last Name",
          },
          {
              name: "roleName",
              type: "list",
              message: "Insert Role",
              choices: function() {
                  // using forEach to create a new array for each title in role
                  getRoleList = [];
                  res.forEach(res => {
                      getRoleList.push(res.title);
                  });
                  return getRoleList;
              }
          }
      ])
      .then((answer)   => {

connectToSQL.query("SELECT * FROM role", function(err, res)  {
if (err) throw (err);
let filterRole = res.filter((res)  => {
  return res.title == role;



}




)


})



      })