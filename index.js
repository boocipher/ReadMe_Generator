// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// REQUIREMENTS:
// WHEN I enter a description, installation instructions, usage information, 
// contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled 
// Description, Installation, Usage, Contributing, Tests, and Questions
// a badge for that license is added near the top of the README and a notice 
// is added to the section of the README entitled License 
// that explains which license the application is covered under
// GitHub username to be added to the section entitled Questions, 
// with a link to my GitHub profile
// email address is added to the section entitled Questions, 
// with instructions on how to reach me with additional questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project or app?'
    },
    {
        type: 'input',
        name: 'about',
        message: 'What is your project about? You will be asked to describe your motivation at the next step, do not add it here. Start your statement with: [Project Title] is a'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you create your project? What problem were you trying to solve?'
    },
    {
        type: 'confirm',
        name: 'preparation',
        message: 'What is required to instal your app? Any packages?'
    },
    {
        type: 'input',
        name: 'packageName',
        message: 'What is the name of the package that has to be installed?',
        when: (answers) => answers.preparation === true,
    },
    {
        type: 'input',
        name: 'packageLink',
        message: 'Please provide the link (URL) for the package',
        when: (answers) => answers.preparation === true,
    },
    {
        type: 'input',
        name: 'packageCode',
        message: 'What code is needed to install the package?',
        when: (answers) => answers.preparation === true,
    },
    {
        type: 'input',
        name: 'invokeCode',
        message: 'What code is required to invoke your app?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['Creative Commons Attribution 4.0', 'MIT', 'No license']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide instructions for those who would like to contribute to your project:'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please specify test instructions:'
    },
    {
        type: 'checkbox',
        name: 'contact',
        message: 'Select how you prefer to be contacted',
        choices: ['GitHub', 'Email']
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub username',
        when: (answers) => answers.contact.includes('GitHub'),
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        when: (answers) => answers.contact.includes('Email'),
    },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    if (!fs.existsSync("generatedFiles")){
        fs.mkdirSync("generatedFiles");
    }
    fs.writeFile('./generatedFiles/README.md', generateMarkdown(answers), (err) => {
        err ? console.log(err) : console.log('README.md has been generated!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
}

// Function call to initialize app
init();
