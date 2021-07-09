const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
    type: 'input',
    message: 'what is the title of your project?',
    name: 'title'
    },
    {
    type: 'input',
    message: 'Please describe your app',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Please type installation instructions of your project',
    name: 'instructions',
    },
    {
    type: 'input',
    message: 'Please type usage information of your app',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Please type contributor(s) of your project',
    name: 'contributor',
    },
    {
    type: 'list',
    message: 'What kind of license do you want for your project?',
    name: 'license',
    choices: ['MIT','ISC','GPL v3','No license']
    },
    {
    type: 'input',
    message: "what's your github name?",
    name: 'githubname',
    },
    {
    type: 'input',
    message: "what's your email address?",
    name: 'email',
    },
];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(answers);
        const readme = writeToFile(answers);
        fs.writeFile('output/README.md', readme, (err) => {
        err ? console.error(err) : console.log('New outputreadme.file is just made. Check your working directory!')
        });
        if (answers) {
            console.log('Success!');
        } else {
            console.log('You something went wrong');
        }
    })

function writeToFile(answers) {
return `${generateMarkdown(answers)}

## Table of Contents
- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Contributor](#contributor)
- [Contact](#contact)



## Description: 
- ${answers.description}

## Install:
    - ${answers.instructions}

## Usage: 
    - ${answers.usage}

## Contributor:  
- ${answers.contributor} 

## Contact:
- Contact me with any questions
- My github repository page: [githubpage](https://github.com/${answers.githubname}/readme-generator)

- My email: ${answers.email}
`
}


// function init() {}


// init();