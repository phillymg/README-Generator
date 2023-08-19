// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'describe',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: ["GPL 3.0", "MIT", "none"],
        default: "MIT",
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]

inquirer
    .prompt(questions)

    // TODO: Create a function to write README file
    .then((data) => {
        let allData = markdown.generateMarkdown(data);
        fs.writeFile('./README.md', allData, (err) =>
            err ? console.error(err) : console.log('File Created')
        )
    });


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
