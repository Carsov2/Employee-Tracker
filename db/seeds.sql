INSERT INTO department (name)
VALUES ('Sales'),
       ('Finance'),
       ('Engineering'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 35000, 1),
       ('Salesperson', 21000, 1),
       ('Account Manager', 85000, 2),
       ('Accountant', 35000, 2),
       ('Lead Engineer', 190000, 3),
       ('Software Engineer', 100000, 3),
       ('Legal Team Lead', 310000, 4),
       ('Lawyer', 189000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Penny', 1, NULL ),
       ('Christian', 'Shafer', 2, 1),
       ('Taylor', 'Shuster', 3, NULL),
       ('Jorge', 'Hernandez', 4, 3),
       ('Carter', 'Hammer', 5, NULL),
       ('Julian', 'Clark', 6, 5),
       ('Sophie', 'Loud', 7, NULL),
       ('Josh', 'Newst', 8, 7);
