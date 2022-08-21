const fs = require('fs');
const inquirer = require('inquirer');

// Declare links to js files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generateHTML = require('./src/generateHTML');

const teamArray = []; 

// Initial prompt questions generated when running the app 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID #.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter prefered email for this manager.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    // Result from answers in the first section get collected here
    .then(managerInput => {
        const  { name, id, email, oNumber } = managerInput; 
        const manager = new Manager (name, id, email, oNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};
// New function generating questions for new engineers or interns
const addTeamMember = () => {
    console.log(`Adding new team members`);

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
            message: "What is the name of this team member?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email."
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
            message: 'Add another team member?',
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
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have succesfully compiled your team's information!")
        }
    })
}; 


addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err); 
  });