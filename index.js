const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

const createReadMe = (answer) =>
`# ${answer.title}

## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#install)
3. [ Usage. ](#usage)
4. [ Contributors. ](#contribute)
5. [ License & Badges. ](#streetcred)
6. [ Contact. ](#contact)


<a name="description"></a>
## Project description

* ${answer.desc}

<a name="install"></a>
## Installation

* ${answer.install}

<a name="usage"></a>
## Usage

* ${answer.usage}

<a name="contribute"></a>
## Contributors
[![saythanks !](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)
* ${answer.contribute}

<a name="streetcred"></a>
## License & Badges

* ${answer.badge}

<a name="contact"></a>
## Questions?
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
* Github username: ${answer.name}

* Email: ${answer.email}`

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'How would you briefly describe your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Are there any installation/dependency requirements?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage guidelines for this project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to this project?',
    },
    {
        type: 'checkbox',
        name: 'badge',
        message: 'What frameworks & languages were used in this project?',
        choices: [
            {name: 'HTML5',
            value: `[![HTML5 badge !](https://img.shields.io/badge/Made%20with-HTML5-red)](https://shields.io/)\n`},
            {name: 'JavaScript',
            value: `[![JavaScript badge !](https://img.shields.io/badge/Powered%20by-JavaScript-green)](https://shields.io/)\n`},
            {name: 'Node.js',
            value: `[![Node.js badge !](https://img.shields.io/badge/Commanded%20with-Nodejs-blueviolet)](https://shields.io/)\n`}
        ],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username?',
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address?',
    },
])



.then((answer) => {

    const readMe = createReadMe(answer);

    fs.writeFile('readME.md', readMe, (err) =>
      err ? console.log(err) : console.log('200; readMe is ready.')
    );
});
