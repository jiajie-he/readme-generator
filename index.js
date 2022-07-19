// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const choices = require('inquirer/lib/objects/choices'); 


// Create an array of questions for user input
const questions = ['Enter project title:', 'Description:', 'Installations:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Enter your GitHub profile URL:', 'Email address:'];

inquirer
    .prompt([
        {
            message:questions[0],
            type:'input',
            name:'title'
        },
        {
            message:questions[1],
            type:'input',
            name:'description'
        },
        {
            message:questions[2],
            type:'input',
            name:'installation'
        },
        {
            message:questions[3],
            type:'input',
            name:'usage'
        },
        {
            message:questions[4],
            type: 'list',
            choices:['Apache','Boost','BSD','Creative Commons','Eclipse','GNU','The Organization for Ethical Source','IBM','ISC','MIT','Mozilla','Open Data Commons','Perl','SIL','Unlicense','WTFPL','Zlib'],
            name:'license'
        },
        {
            message:questions[5],
            type:'input',
            name:'contributing'
        },
        {
            message:questions[6],
            type:'input',
            name:'tests'
        },
        {
            message:questions[7],
            type:'input',
            name:'githubProfileLink'
        },
        {
            message:questions[8],
            type:'input',
            name:'questions'
        }
])
.then(ans=>{
    console.log(ans)
    
// Create a function to write README file

    const readmeString = `# ${ans.title}
    
![License](https://img.shields.io/badge/License-${ans.license}-brightgreen.svg)

## Description

${ans.description}

## Talbe of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${ans.installation}

## Usage

${ans.usage}

## License

Copyright covered under ${ans.license} license.

## Contributing

${ans.contributing}

## Tests

${ans.tests}

## Questions

${ans.githubProfileLink}
Reach me with additional questions at: ${ans.questions}
`
    fs.writeFile(`./output/README.md`,readmeString,(err,data)=>{
        if(err){
            throw err
        }   
        console.log('success!')
    })
})

