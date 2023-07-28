let departmentArray = [];
let roleArray = [];
let employeeArray = [];

// initial question

const startMenu = [
    {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Quit"]
    }
];

// prompt for getting new department info
const addDepartment = [
    {
        type: "input",
        name: "departmentName",
        message: "What is the department name?"
    }
];

// prompt for adding new role
const addRole = [
    {
        type: "input",
        name: "roleName",
        message: "What is the role called?"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary for the role?"
    },
    {
        type: "input",
        name: "roleDepartment",
        message: "Input the ID of the department the role belongs to."
    }
];

// prompt for new employee add
const newEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the employee's First Name."
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter the employee's Last Name."
    },
    {
        type: "input",
        name: "employeeRole",
        message: "What is the ID associated with the employees role?",
    },
    {
        type: "input",
        name: "employeeManager",
        message: "What is the employee's manager ID?",
        
    }
];

// prompts for updating employees role
const updateRole = [
    {
        type: "input",
        name: "employee",
        message: "Enter the ID of the employee you wish to update."
    },
    {
        type: "input",
        name: "role",
        message: "Enter the employee's new role ID."
    }
];

module.exports = {departmentArray, roleArray, employeeArray, startMenu, addDepartment, addRole, newEmployee, updateRole };