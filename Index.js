const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generatePage.js')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamInfo = []; 

const generateTeam 

const generateManager = () => {
    console.log ( `
    ===========================================
    Welcome to your team page builder! 
    Follow the prompts to build your team!")
    ===========================================
    `);

    return inquirer.prompt([
        {   
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerName => {
              if (managerName) {
                return true;
              } else {
                console.log("Please enter the team manager's name!");
                return false;
              }
            }
        },
        {   
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID Number?",
            validate: managerId => {
              if (managerId > 0) {
                return true;
              } else {
                console.log("Please enter the manager's ID Number!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's e-mail address?",
            validate: managerEmail => {
              if (managerEmail) {
                return true;
              } else {
                console.log("Please enter the team manager's email!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's offie number?",
            validate: managerOffice => {
              if (managerOffice) {
                return true;
              } else {
                console.log("Please enter the team manager's office number!");
                return false;
              }
            }
        }
    ]);
};

const addTeamMember = () => {
    console.log ( `
    ===========================================
    Add More Team Members
    ===========================================
    `);

    return inquirer.prompt([
        {   
            type: 'list',
            name: 'memberChoice',
            message: "Which team member would you like to add?",
            choices: ['Intern', 'Engineer']
        }
    ])
    .then(addMember => { 
        if (addMember.memberChoice=== 'Intern') { 
        console.log (
            ` Follow the prompts to add Intern data `
        );
    return inquirer.prompt([
        {   
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: internName => {
              if (managerName) {
                return true;
              } else {
                console.log("Please enter the intern's name!");
                return false;
              }
            }
        },
        {   
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID Number?",
            validate: managerId => {
              if (managerId > 0) {
                return true;
              } else {
                console.log("Please enter the intern's Number!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's e-mail address?",
            validate: managerEmail => {
              if (managerEmail) {
                return true;
              } else {
                console.log("Please enter the intern's email!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'internSchool',
            message: "Where does the intern go to school?",
            validate: internSchool => {
              if (internSchool) {
                return true;
              } else {
                console.log("Please enter where the intern goes to school!");
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmMember',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool);
        teamInfo.push(intern);

        if(answers.confirmMember) {
            return addTeamMember();
        } else {
            return;
        }
    });
} 

else if (addMember.memberChoice=== 'Engineer') { 
    console.log (
        ` Follow the prompts to add Engineer data `
    );

    return inquirer.prompt([
        {   
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: engineerName => {
              if (engineerName) {
                return true;
              } else {
                console.log("Please enter the engineer's name!");
                return false;
              }
            }
        },
        {   
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID Number?",
            validate: engineerId => {
              if (engineerId > 0) {
                return true;
              } else {
                console.log("Please enter the engineer's Number!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'engineerEmail',
            message: "What is the intern's e-mail address?",
            validate: engineerEmail => {
              if (engineerEmail) {
                return true;
              } else {
                console.log("Please enter the intern's email!");
                return false;
              }
            },
        },
        {   
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's profile on GitHub?",
            validate: engineerGithub => {
              if (engineerGitHub) {
                return true;
              } else {
                console.log("Please enter the engineer's name on GitHub!");
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmMember',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ])
    .then(answers => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub);

            teamInfo.push(engineer);
        if (answers.confirmMember) {
            return addTeamMember();
        } else {
            console.log(teamInfo);
            return;
        }
    });
  }
});
};

generateManager()
.then()
.then(answers => {
    const manager = new Manager (
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice);

        teamInfo.push(manager);
        addTeamMember()
    })
    .then(generatePage(teamInfo));
