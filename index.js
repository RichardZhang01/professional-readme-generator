// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'fileName',
        type: 'input',
        message: 'Enter a file name for your markdown document.'
    },

    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },

    {
        name: 'descriptionMotivation',
        type: 'input',
        message: 'What was your motivation behind your project?'
    },

    {
        name: 'descriptionBuild',
        type: 'input',
        message: 'Why did you build this project?'
    },

    {
        name: 'descriptionProblem',
        type: 'input',
        message: 'What problem does your project solve?'
    },

    {
        name: 'descriptionLearn',
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
        name: 'licenseList',
        type: 'list',
        message: 'Which license would you like your project to be covered under?',
        choices: [
            'Apache 2.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'MIT',
            'ISC',            
        ],
        default: 'MIT',
    },

    {
        name: 'licenseName',
        type: 'input',
        message: 'What is your name?',
        when: (answers) => answers.licenseList === 'MIT' || answers.licenseList === 'ISC'
    },

    {
        name: 'licenseYear',
        type: 'input',
        message: 'What is the current year?',
        when: (answers) => answers.licenseList === 'MIT' || answers.licenseList === 'ISC'
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
        name: 'questionsUsername',
        type: 'input',
        message: 'What is your GitHub username?'
    },

    {
        name: 'questionsEmail',
        type: 'input',
        message: 'What is your email address?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File successfully created!'));

}

// TODO: Create a function to initialize app
function init() {

    console.log('Hello. Welcome to this markdown generator application. You will be presented with a series of questions regarding your project. Once you have answered all of them, a markdown document will be generated for you in the generated-markdowns folder.');

    inquirer
        .prompt(questions)
        .then(function (answers) {

            console.log(answers);

            const fileName = `./generated-markdowns/${answers.fileName}.md`;
            const data = markdown.generateMarkdown(answers);

            console.log(data);

            writeToFile(fileName, data);
        })

}

// Function call to initialize app
init();
