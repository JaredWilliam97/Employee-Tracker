USE employeeDB;
INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");




INSERT INTO role (id, title, salary, departmentID) VALUES
("Front-End Developer", 70000, 1),
("Salesperson", 40000, 1),
("WebX Design", 80000, 2),
("Software Engineer", 90000, 2),
("Accountant", 50000, 3),
("President of Bank", 100000, 4),
("Hardware Engineer", 65000, 4);



INSERT INTO employee (id, firstName, lastName, roleID manager_id) VALUES 
("Jared", "Smith", 1, 3),
("Jayme", "Olson", 2, 1),
("Bill", "Johnson", 3, NULL),
("Andrew", "Dault", 4, 3),
("Ben", "Gordon", 5, NULL),
("Josh", "Meyers", 6, NULL),
("Kristin", "Menkie", 7, 6),
("Rachel", "Veeder", 4, 4);

