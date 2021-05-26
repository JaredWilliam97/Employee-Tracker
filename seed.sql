
INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");




INSERT INTO role (title, salary, department_ID) VALUES
("Front-End Developer", 70000, 1),
("Salesperson", 40000, 1),
("WebX Design", 80000, 2),
("Software Engineer", 90000, 2),
("Accountant", 50000, 3),
("President of Bank", 100000, 4),
("Hardware Engineer", 65000, 4);




INSERT INTO employee (first_Name, last_Name, role_ID, manager_id) VALUES 
("Jared", "Smith", 1, null),
("Jayme", "Olson", 2, null),
("Bill", "Johnson", 3, 6),
("Andrew", "Dault", 4, 3),
("Ben", "Gordon", 5, 4),
("Josh", "Meyers", 6, 8),
("Kristin", "Menkie", 7, 9),
("Rachel", "Veeder", 4, 7);
