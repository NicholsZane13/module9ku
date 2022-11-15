// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { messages } = require('statuses');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt(
        [
            {
                type: 'input',
                name: "name",
                message: 'What is your full name?',
            },
            {
                type: 'input',
                name: "email",
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: "github",
                message: 'What is your github profile name?',
            },
            {
                type: 'input',
                name: "repo",
                message: 'What is your repository name?',
            },
            {
                type: 'input',
                message: 'What is the name of the project?',
                name: "title",
                validate: (value)=> {if(value){return true} else {return "Title is required"}},

            },
            {
                type: 'input',
                name: "description",
                message: 'Provide a short description explaining the what, why, and how of your project.',
                validate: (value)=> {if(value){return true} else {return "Input is required"}},
            },
            {
                type: 'input',
                name: "install",
                message: 'What are the steps to install your app?',
                validate: (value)=> {if(value){return true} else {return "Input is required"}},
            },
            {
                type: 'input',
                name: "usage",
                message: 'Provide instructions and examples for the use of your app.',
                validate: (value)=> {if(value){return true} else {return "Input is required"}},
            },
            {
                type: 'input',
                name: "credits",
                message: 'List any collaborators and their github profiles.',
                validate: (value)=> {if(value){return true} else {return "Input is required"}},
            },
            {
                type: 'list',
                name: "license",
                message: 'Licensing information.',
                choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Alpache License 2.0', 'Boost Software License 2.0', 'The Unilicense'],
                validate: (value)=> {if(value){return true} else {return "Input is required"}},
            },
            {
                type: 'input',
                name: "badges",
                message: 'List of badges. If none, hit enter',
            },
            {
                type: 'input',
                name: "feature",
                message: 'If your project has a lot of features, list them here. If not, hit enter',
            },
            {
                type: 'input',
                name: "contribute",
                message: 'If it is an open source project. How would other developers contribute to this project?',
            },
            {
                type: 'input',
                name: "test",
                message: 'Any tests for the application, and explain how to run them.',
            },
            

        ]
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
