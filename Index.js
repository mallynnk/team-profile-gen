const fs = require("fs")
const inquirer = require('inquirer');
const generatePage = require('./src/pageTemplate.js');
const writeFile = require('./utils/generatePage.js')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

let teamInfo = []; 
const idArray = []

function appMenu() {

function createManager () {
    console.log ("please build your team");

        inquirer.prompt([
        {   
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              } 
                return "Please enter at least one character.";
              }
            },
        {   
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID Number?",
            validate: answer => {
                if (answer > 0 ) {
                  return true;
                } 
                  return "Please enter a number.";
                }
              },
        {   
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's e-mail address?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter the manager's e-mail address.";
                }
              },
        {   
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            validate: answer => {
                if (answer > 0) {
                  return true;
                } 
                  return "Please enter at least one character.";
                }
              },
    ]);
};

function addTeamMember() {
    console.log ( `
    ===========================================
    Add More Team Members
    ===========================================
    `);

    return inquirer.prompt([
        {   
            type: 'list',
            name: 'memberChoice',
            message: "Which type of team member would you like to add?",
            choices: ["Intern", "Engineer", "I don't want to add any more members"]
        }
    ]).then(userChoice => {
        switch(userChoice.addTeamMember) {
            case "Engineer":
                addEngineer(); 
                break;
            case "Intern":
                addIntern(); 
                break;
            default: 
                buildTeam();
        }
    })

}

function addEngineer() {

    inquirer.prompt([
        {   
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter at least one character.";
                }
        },
        {   
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID Number?",
            validate: answer => {
                if (answer > 0) {
                  return true;
                } 
                  return "Please enter a number.";
                }
        },
        {   
            type: 'input',
            name: 'engineerEmail',
            message: "What is the intern's e-mail address?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter an e-mail address.";
            }
        },
        {   
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's profile on GitHub?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter the engineer's GitHub name.";
                }
        },
    ])
    .then(answers => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub);

            teamInfo.push(engineer);
            idArray.push(answers.engineerId)
            createTeam();
    });
}

function addIntern() {
    return inquirer.prompt([
        {   
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter the intern's name.";
                }
        },
        {   
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID Number?",
            validate: answer => {
                if (answer > 0) {
                  return true;
                } 
                  return "Please enter a number.";
                }
        },
        {   
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's e-mail address?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter the intern's e-mail address.";
                }
        },
        {   
            type: 'input',
            name: 'internSchool',
            message: "Where does the intern go to school?",
            validate: answer => {
                if (answer !== "") {
                  return true;
                } 
                  return "Please enter what school the intern attends.";
                }
        },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool);
        teamInfo.push(intern);
        idArray.push(answers.internId);
        createTeam();
    });
} 
function buildTeam() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(teamInfo), "utf-8")

}

createManager();

};

appMenu()


