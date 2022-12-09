// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');


// TODO: Create an array of questions for user input
const question = [
    'What is the Title of of the Project?',
    'What is the Description of the Project',
    'Table of Contents Needed?',
    'Installation Needed?',
    'Usage Needed?',
    'License?',
    'Contributors Needed?',
    'Tests',
    'Questions?',
    'Enter the GitHub Repository URL, please!'
];

inquirer.prompt(
    [
        {
            type: 'input',
            message: question[0],
            name: 'title',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'input',
            message: question[1],
            name: 'desc',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'list',
            message: question[2],
            choices: [],
            name: 'toC',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        // if (questions[2] === 'Y') {
        //     console.log('Table of Contents added.')
        // } else {console.log('Table of Contents skipped.')}, 
        {
            type: 'list',
            message: question[3],
            choices: ['Y', 'N'],
            name: 'install',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'list',
            message: question[4],
            choices: ['Y', 'N'],
            name: 'usage',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'list',
            message: question[4],
            choices: ['Apache License 2.0', 'Microsoft Public License', 'MIT', 'N/A'],
            name: 'license',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'list',
            message: question[5],
            choices: ['Y', 'N'],
            name: 'usageSection',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}  
        },
        {
            type: 'input',
            message: question[6],
            name: 'tests',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'input',
            message: question[7],
            name: 'questionsInput',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        },
        {
            type: 'input',
            message: question[8],
            name: 'repo',
            validate: (value) => { if(value){return true;} else {return 'Value needed!'}}
        }
    ]
    .then(({
        title,
        desc,
        toC,
        install,
        usage,
        license,
        usageSection,
        tests,
        questionsInput,
        repo
    }) => {
        const template = 
    }
        
        
        
        
        
        
        
        )
)
        


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// To format JSON, you would use a template literal (Activities 9, 10, 11, 12)
// Useful for formatting the README file