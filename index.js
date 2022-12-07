// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('./utils');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What is the Title of of the Project?',
    'What is the Description of the Project',
    'Table of Contents Needed?',
    'Installation Needed?',
    'Usage Needed?',
    'License?',
    'Contributors Needed?',
    'Tests Needed?',
    'Questions?'
];

inquirer
    .createPromptModule([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

