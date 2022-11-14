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
                message: 'What is the name of the project?',
                title: "title",

            }
        ]
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
