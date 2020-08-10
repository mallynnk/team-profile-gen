const fs = require("fs")
const inquirer = require('inquirer');
const htmlTemplate = require('./src/pageTemplate.js');
const writeFile = require('./utils/generatePage.js')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamInfo = []; 
const idArray = []

//function to build team
function createTeam() {

//function to prompt Manager input
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
    ])
    .then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOffice);

            teamInfo.push(manager);
            idArray.push(answers.managerId)
           addTeamMember();
    });
}

//function to add team members
function addTeamMember() {
    console.log ("add more team members!");

    return inquirer.prompt([
        {   
            type: 'list',
            name: 'memberChoice',
            message: "Which type of team member would you like to add?",
            choices: ["Intern", "Engineer", "I don't want to add any more members"]
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
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

//function to add an engineer to the team
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
            addTeamMember();
    });
}

//function to add intern to the team
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
        addTeamMember();
    });
} 

//function to send input info to pageTemplate in order to generatePage
function buildTeam() {
    const teamPage = htmlTemplate(teamInfo);
    console.log(teamPage);
    writeFile(teamPage)
}

createManager();

};

//call to build the team
createTeam()



