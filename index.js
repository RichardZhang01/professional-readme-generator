// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },

    {
        name: 'description-motivation',
        type: 'input',
        message: 'What was your motivation behind your project?'
    },

    {
        name: 'description-build',
        type: 'input',
        message: 'Why did you build this project?'
    },

    {
        name: 'description-problem',
        type: 'input',
        message: 'What problem does your project solve?'
    },

    {
        name: 'description-learn',
        type: 'input',
        message: 'What did you learn from your project?'
    },

    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },

    {
        name: 'usage',
        type: 'input',
        message: 'Please provide instructions and examples on how to use your project.'
    },

    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },

    {
        name: 'license-list',
        type: 'input',
        message: 'Which license would you like your project to be covered under?',
        choices: [
            "MIT",

        ]
    },

    {
        name: 'contribution',
        type: 'input',
        message: 'Please provice guidelines on how others can contribute to your project.'
    },

    {
        name: 'test',
        type: 'input',
        message: 'Please provide instructions on how to run tests for your project.'
    },

    {
        name: 'questions-username',
        type: 'input',
        message: 'What is your GitHub username?'
    },

    {
        name: 'questions-email',
        type: 'input',
        message: 'What is your email address?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
