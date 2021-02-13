const inquirer = require('inquirer');
const fs = require('fs');

const createReadMe = (answer) =>
`# ${answer.title}

## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#install)
3. [ Usage. ](#usage)
4. [ Contributors. ](#contribute)
5. [ The other stuff: License & Badges. ](#streetcred)
6. [ Contact. ](#contact)


<a name="description"></a>
## Project description

* ${answer.desc}

* text

<a name="install"></a>
## Installation

* text

<a name="usage"></a>
## Usage

* text

* text

<a name="contribute"></a>
## Contributors

* text

* text

<a name="streetcred"></a>
## The other stuff: License & Badges

* text

<a name="contact"></a>
## Questions?

* Github username: ${answer.name}

* Email:${answer.email}`

inquirer
  .prompt([
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
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'How would you describe your project?',
    },
    // {
    //     type: 'input',
    //     name: 'install',
    //     message: 'Are there any installation requirements?',
    // },
     // {
    //     type: 'input',
    //     name: 'depend',
    //     message: 'Are there any dependencies?',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'What are the usage guidelines for this project?',
    // },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'What is your GitHub username?',
    // },
])

.then((answer) => {

    const readMe = createReadMe(answer);

    fs.writeFile('readME.md', readMe, (err) =>
      err ? console.log(err) : console.log('200; readMe is ready.')
    );
});
