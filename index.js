const fs = require('fs');
const inquirer = require('inquirer');

// Declare links to js files
const Manager = require('./Develop/lib/Manager');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern'); 
const generateHTML = require('./Develop/src/generateHTML');

const teamArray = []; 

// Initial prompt questions generated when running "node index.js" in the terminal 
const addManager = async() => {
    return (await inquirer.prompt) ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: userInput => {
                if(userInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID #.",
            validate: userInput => {
                if(isNaN(userInput)) {
                    return true;
                } else {
                    console.log("Please enter a valid ID.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter prefered email for this manager.",
            validate: userInput => {
                if(userInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'oNumber',
            message: "Please enter the manager's office number",
            validate: userInput => {
                if(isNaN(userInput)) {
                    return true;
                } else {
                    console.log("Please enter a valid office number.")
                    return false;
                }
            }
        }
    ])
    // Result from answers in the first section get collected here
    .then(managerInput => {
        const  { name, id, email, oNumber } = managerInput; 
        const manager = new Manager (name, id, email, oNumber);

        teamArray.push(manager); 
        console.log(`Looks good so far!`); 
    })
};
// New function generating questions for new engineers or interns
const addTeamMember = () => {
    console.log(`You can now add more team members.`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of this team member?",
            validate: userInput => {
                if(userInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name.")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email.",
            validate: userInput => {
                if(userInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email.")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter their github username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    // Pass through answers from prompt into teamArray to later generate onto new index.html
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddTeamMember } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddTeamMember) {
            return addTeamMember(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// Creat the new file pushing the answers from the teamArray into the newly created file
const writeFile = data => {
    fs.writeFile('./Develop/dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have succesfully compiled your team's information!")
        }
    })
}; 

addManager()
  .then(addTeamMember)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err); 
  });