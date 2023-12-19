// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

generateMarkdown
    console.log('LFG');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How would you install this application?'
      },
      {
        type: 'input',
        name: 'usage', 
        message: 'What are the uses for this application?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'ISC', 'No License'],
      },
      {
        type: 'input',
        name: 'contributing', 
        message: 'How can others contribute to this project?'
      },
      {
        type: 'input',
        name: 'tests', 
        message: 'How can you test this application?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You're README.md file has been successfully created.");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      const fileName = `README_${answers.title}.md`;

        fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log(`The file ${fileName} has been created.`);
        }
        });
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
