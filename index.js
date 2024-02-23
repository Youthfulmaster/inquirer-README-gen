const inquirer = require('inquirer');
const fs = require('fs');

// Define questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
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

// Function to generate README content
const generateReadme = (answers) => {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Usage](#usage)
- [License](#license)




## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.






    `;
};

// Function to write README file
const writeReadme = (content) => {
  fs.writeFile('README.md', content, (err) => {
    if (err) throw err;
    console.log('README.md generated!');
  });
};

// Main function
const main = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateReadme(answers);
    writeReadme(readmeContent);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
