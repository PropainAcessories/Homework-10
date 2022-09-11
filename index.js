const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");

const OutputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(OutputDir, "team.html");

const render = require("./lib/makehtml");


const employees = [];

employeeRole = () => {
    console.log("What is the employee's role?");
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern',
            ],
        }
    ]).then(choice => {
        if(choice.role ==='Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
}

addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's github username?",
            name: "github"
        },
    ]).then((engineerInfo) => {
        engineerInfo.role = "Engineer";
        const {name, id , email, github, role} = engineerInfo;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);
        addEmployee();
    });
};

addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is the intern attending?",
            name: "school"
        },
    ]).then((internInfo) => {
        internInfo.role = "intern";
        const {name, id , email, school, role} = internInfo;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        addEmployee();
    });
};

addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Add another team member?",
            name:"add",
            choices: [
                "yes",
                "no"
            ],
        }
    ]).then(choice => {
        if(choice.add==="yes") {
            employeeRole();
        } else {
            makeHTML();
        };
    });
};

startApp = () => {
    console.log("Hello \n Aswer the questions \n Your results will be in the dist folder titled team.html");
    return inquirer.createPromptModule([
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Manager's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNuimber"
        },
    ]).then((managerInfo) => {
        managerInfo.role = "Manager";
        const {name, id, email, officeNumber, role} = managerInfo;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        employeeRole();
    })
};

makeHTML = () => {
    const buildPage = render(employees);
    fs.writeFile(outputPath, buildPage, (err) => {
        if (err) {
            return console.log(err);
        }else {
            return console.log("Page Sucessfully created!")
        };
    })
};

startApp();
