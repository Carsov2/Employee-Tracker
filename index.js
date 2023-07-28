// Instead of using require, use dynamic import
import('inquirer')
  .then(({ default:inquirer}) => {
    const mysql = require('mysql2');
    const questions = require('./utils/questions');

    const dbConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_db'
    });

    const initializeApp = () => {
      console.log("***********************************");
      console.log("*                                 *");
      console.log("*        EMPLOYEE MANAGER         *");
      console.log("*                                 *");
      console.log("***********************************");

      showMainMenu();
    };

    const showMainMenu = async () => {
      try {
        const userChoice = await inquirer.prompt(questions.startMenu);

        switch (userChoice.selection) {
          case "View all Departments":
            viewDepartments();
            break;
          case "View all Roles":
            viewRoles();
            break;
          case "View all Employees":
            viewEmployees();
            break;
          case "Add a Department":
            addDepartment();
            break;
          case "Add a Role":
            addRole();
            break;
          case "Add an Employee":
            addEmployee();
            break;
          case "Update an Employee Role":
            updateEmployeeRole();
            break;
          case "Quit":
            console.log("Thanks for using the employee database!");
            process.exit();
            break;
          default:
            console.log("Invalid choice. Please try again.");
            showMainMenu();
        }
      } catch (err) {
        console.log(err);
      }
    };

    const viewDepartments = () => {
      dbConnection.query('SELECT id, name AS Department FROM department;', (err, result) => {
        if (err) console.log(err);
        console.table(result);
        showMainMenu();
      });
    };

    const viewRoles = () => {
      dbConnection.query(
        `SELECT role.title AS Role, role.id, department.name AS Department, role.salary
        FROM role 
        LEFT JOIN department ON role.department_id = department.id`,
        (err, result) => {
          if (err) console.log(err);
          console.table(result);
          showMainMenu();
        }
      );
    };

    // Implement other functions (addDepartment, addRole, addEmployee, updateEmployeeRole, viewEmployees) similarly

    // Start the application
    initializeApp();
  })
  .catch(err => {
    console.error('Error loading inquirer:', err);
  });
