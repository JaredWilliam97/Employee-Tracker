USE employeeDB;
INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO department (name) VALUES ("Services");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO role (title, salary, departmentID) VALUES ("Barista", 1000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Product Manager", 3000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Software Engineer", 4000, 1);