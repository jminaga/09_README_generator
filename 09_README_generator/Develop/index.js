// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
// require generate markdown file  const generate 

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', 
    name: 'title',
    message: 'what is the name of your projet?'
    },
    {type: 'input', 
    name: 'email',
    message: 'what is your email address?'
    },
    {type: 'input', 
    name: 'description',
    message: 'Please write a description of your project.'
    },
    {type: 'list', 
    name: 'license',
    message: 'What license does your projet have?',
    choices: [
        'MIT',
        'Apache',
        'GPL',
        'None',
    ]
    },
    {type: 'input', 
    name: 'installation',
    message: 'What command should be run to install depedencies?',
    default: 'npm i'
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data)

}

// TODO: Create a function to initialize app
function init() {
    // use inquirer to ask the user the questions
    inquirer.prompt(questions).then((answers) => {
        // fs.writeFileSync("readMe.md", data)
        //call writeToFile function 
        
        console.log(answers);

        writeToFile("README.md", generateMarkdown(answers));
    })

    // capture user answers to create a readme file

}

// Function call to initialize app
init();
