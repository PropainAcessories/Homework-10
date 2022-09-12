const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");

// const OutputDir = path.resolve(__dirname, "dist");
// const outputPath = path.join(OutputDir, "index.html");

const render = require("./lib/generateHTML");

const employees = [];

const createManager = () => {
    console.log("Hello \n Aswer the questions \n Your results will be in the dist folder titled team.html");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the team's Manager?"
        },
        {
            type: "input",
            message: "What is the Manager's ID number?",
            name: "id"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ]).then((managerInfo) => {
        managerInfo.role = "Manager";
        const {name, id, email, officeNumber, role} = managerInfo;
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "What is the Employee's role?",
                choices: [
                    'Engineer',
                    'Intern',
                ],
            },
            {
                type:"input",
                name: "name",
                message:"What is the employee's name?"
            },
            {
                type:"input",
                name: "id",
                message:"What is the employee's id number?"
            },
            {
                type:"input",
                name: "email",
                message:"What is the employee's email?"
            },
            {
                type:"input",
                name: "github",
                message:"What is the employee's github username?",
                when: (input) => input.role === "Engineer"
            },
            {
                type:"input",
                name: "school",
                message:"What is the intern's school?",
                when: (input) => input.role === "Intern"
            },
            {
                type: "confirm",
                name:"add",
                message: "Add another team member?",
                default: false
            },
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, add } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);

        }

        employees.push(employee);

        if(add) {
            return addEmployee(employees);
        } else {
            return employees;
        }
    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        }else {
            console.log("File Created Succesfully!")
        }
    })
};

createManager()
    .then(addEmployee)
    .then(employees => {
        return render(employees)
    })
    .then(html => {
        return writeFile(html);
    })
    .catch(err => {
        console.log(err);
    });
