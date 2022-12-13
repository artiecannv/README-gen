// Packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

// Array of questions for user input
const question = [
  "What is the Title of of the Project?",
  "What is the Description of the Project",
  "Table of Contents",
  "What are the steps required to install the project?",
  "Provide Examples or Instructions for Use.",
  "Which license was used?",
  "Please include the any contributors on the project.",
  "Please list any tests that were done.",
  "Are there still any questions?",
  "Enter the GitHub Repository URL, please!",
];
// Questions for README chapters

const readme = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: question[0],
      name: "title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[1],
      name: "desc",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "confirm",
      message: question[2],
      name: "toC",
      default: true,
    },
    {
      type: "input",
      message: question[3],
      name: "install",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[4],
      name: "usage",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "list",
      message: question[5],
      choices: ["Apache License 2.0", "Microsoft Public License", "MIT", "N/A"],
      name: "license",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[6],
      name: "contributors",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[7],
      name: "tests",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[8],
      name: "questionsInput",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
    {
      type: "input",
      message: question[9],
      name: "repo",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Value needed!";
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile("README.md", data, (err) =>
    err ? console.log(err) : console.log("README Generation Successful!")
  );
}
readme()
  .then(
    ({
      title,
      desc,
      toC,
      install,
      usage,
      license,
      contributors,
      tests,
      questionsInput,
      repo,
    }) => {
      // Template of the formatting to be used
      const formatting = `
# ${title}
        
## Description
        
${desc}
        
## ${toC}
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [Repository](#repository)
     
        
## Installation

${install}
        
        
## Usage
 
${usage}
        
Remember to add your screenshot!
        
## Credits

${contributors}
        
Remember to link github profiles of any collaborators
Remember to link tutorials as well
        
## License
        
${license}
        
## Tests

${tests}
        
## Questions?

${questionsInput}

## Repository
        
${repo}`;
      return { formatting, title };
    }
  )
  .then((markUp) => {
    writeFile(markUp.title, markUp.formatting);
  })
  .catch((err) => console.log(err));

// Function call to initialize app
