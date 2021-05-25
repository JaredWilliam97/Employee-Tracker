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
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of employee do you want to update?",
        name: "employeeOne",
      },
      {
        type: "input",
        message: "What is the last name of employee do you want to update?",
        name: "employeeTwo",
      },
      {
        type: "input",
        message: "what role ID do you want to change the employee to?",
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

// // this function will always be the first thing that will load when called so client will see the options when prompted.
// function menuPrompt() {
//   inquirer
//     .prompt({
//       type: "list",
//       name: "userChoice",
//       message: "Choose a selection",
//       choices: [
//         "View Departments",
//         "View All Employees",
//         "View Roles",
//         "Add Employee",
//         "Add New Role",
//         "Add New Department",
//         "Update Employee Role",
//         "Exit",
//       ],
//     })
//     .then((res) => {
//       console.log(res.userChoice);
//       switch (res.userChoice) {
//         case "View Departments":
//           viewDepartments();
//           break;
//         case "View All Employees":
//           viewEmployees();
//           break;
//         case "View Roles":
//           viewRoles();
//           break;
//         case "Add Employee":
//           addEmployee();
//           break;
//         case "Add New Role":
//           addRole();
//           break;
//         case "Add New Department":
//           addDepartment();
//           break;
//         case "Update Employee Role":
//           updateEmployeeRoles();
//           break;
//         case "Exit":
//           connectToSQL.end();
//           break;
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const viewRoles = () => {
//   let insertSQL = "SELECT * FROM role";
//   connectToSQL.query(insertSQL, function (err, res) {
//     res.forEach((role) => {
//       console.log(
//         `ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.departmentID}`
//       );
//     });
//     menuPrompt();
//   });
// };

// const viewEmployees = () => {
//   let insertSQL = "SELECT * FROM employee";
//   connectToSQL.query(insertSQL, function (err, res) {
//     res.forEach((employee) => {
//       console.log(
//         `ID: ${employee.id} | Name: ${employee.firstName} ${employee.lastName} | Role ID: ${employee.roleID} | Manager ID: ${employee.managerID}`
//       );
//     });
//     menuPrompt();
//   });
// };

// const addEmployee = () => {
//   connectToSQL.query("SELECT * FROM role", (err, res) => {
//     if (err) throw err;
//     inquirer
//       .prompt([
//         {
//           name: "firstName",
//           type: "input",
//           message: "Insert First Name",
//         },
//         {
//           name: "lastName",
//           type: "input",
//           message: "Insert Last Name",
//         },
//         {
//           name: "roleName",
//           type: "list",
//           message: "Insert Role",
//           choices: function () {
//             // using forEach to create a new array for each title in role
//             getRoleList = [];
//             res.forEach((res) => {
//               getRoleList.push(res.title);
//             });
//             return getRoleList;
//           },
//         },
//       ])
//       .then((answer) => {
//         const role = answer.roleName;
//         // res.filter will get rid of other unwanted titles.
//         connectToSQL.query("SELECT * FROM role", function (err, res) {
//           if (err) throw err;
//           let filterRole = res.filter((res) => {
//             return res.title == role;
//           });
//           let roleID = filterRole[0].id;
//           connectToSQL.query("SELECT * FROM employee", function (err, res) {
//             inquirer
//               .prompt([
//                 {
//                   name: "manager",
//                   type: "list",
//                   message: "Insert Manager",
//                   choices: function () {
//                     getManagerList = [];
//                     res.forEach((res) => {
//                       getManagerList.push(res.lastName);
//                     });
//                     return getManagerList;
//                   },
//                 },
//               ])
//               .then((managerAnswer) => {
//                 const manager = managerAnswer.manager;
//                 connectToSQL.query(
//                   "SELECT * FROM employee",
//                   function (err, res) {
//                     if (err) throw err;
//                     let filterManager = res.filter((res) => {
//                       return res.lastName == manager;
//                     });
//                     let managerID = filterManager[0].id;
//                     let insertSQL =
//                       "INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES (?, ?, ?, ?)";
//                     let values = [
//                       answer.firstName,
//                       answer.lastName,
//                       roleID,
//                       managerID,
//                     ];
//                     connectToSQL.query(
//                       insertSQL,
//                       values,
//                       function (err, res, fields) {
//                         console.log("Added");
//                       }
//                     );
//                     viewEmployees();
//                   }
//                 );
//               });
//           });
//         });
//       });
//   });
// };

// const addRole = () => {
//   connectToSQL.query("SELECT * FROM department", (err, res) => {
//     if (err) throw err;
//     inquirer
//       .prompt([
//         {
//           name: "title",
//           type: "input",
//           message: "Insert Title",
//         },
//         {
//           name: "salary",
//           type: "input",
//           message: "Insert Salary",
//         },
//         {
//           name: "departmentName",
//           type: "list",
//           message: "Insert Department Name",
//           choices: function () {
//             let getDepartmentList = [];
//             res.forEach((res) => {
//               getDepartmentList.push(res.name);
//             });
//             return getDepartmentList;
//           },
//         },
//       ])
//       .then((answer) => {
//         const department = answer.departmentName;
//         connectToSQL.query("SELECT * FROM department", function (err, res) {
//           if (err) throw err;
//           let filterDepartment = res.filter(function (res) {
//             return res.name == department;
//           });
//           let id = filterDepartment[0].id;
//           let insertSQL =
//             "INSERT INTO role (title, salary, departmentID) VALUES (?, ?, ?)";
//           let values = [answer.title, parseInt(answer.salary), id];

//           console.log(values);
//           connectToSQL.query(insertSQL, values, function (err, res, fields) {
//             console.log(`Added`);
//           });
//           viewRoles();
//         });
//       });
//   });
// };

// const addDepartment = () => {
//   inquirer
//     .prompt({
//       name: "department",
//       type: "input",
//       message: "Insert New Department",
//     })
//     .then((answer) => {
//       let insertSQL = "INSERT INTO department (name) VALUES ( ? )";
//       connectToSQL.query(insertSQL, answer.department, (err, res) => {});
//       menuPrompt();
//     });
// };

// const idPrompt = () => {
//   return [
//     {
//       name: "name",
//       type: "input",
//       message: "Insert Employee ID",
//     },
//   ];
// };
// const updateEmployeeRoles = async () => {
//   // using await and async to get employee id first
//   const employeeID = await inquirer.prompt(idPrompt());
//   connectToSQL.query(
//     "SELECT role.id, role.title FROM role ORDER BY role.id;",
//     async (err, res) => {
//       if (err) throw err;
//       const { role } = await inquirer.prompt([
//         {
//           name: "role",
//           type: "list",
//           choices: () => res.map((res) => res.title),
//           message: "Insert New Role",
//         },
//       ]);

//       let roleID;
//       for (const row of res) {
//         if (row.title === role) {
//           roleID = row.id;
//           continue;
//         }
//       }
//       connectToSQL.query(
//         `UPDATE employee SET roleID = ${roleID} WHERE employee.id = ${employeeID.name}`,
//         async (err, res) => {
//           if (err) throw err;
//           console.log("Role Updated");
//         }
//       );
//       menuPrompt();
//     }
//   );
// };
