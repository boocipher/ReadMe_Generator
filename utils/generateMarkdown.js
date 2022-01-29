// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const { title } = require("process");

// License badges and links thanks to https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  let badge
  switch (license) {
    case 'Creative Commons Attribution 4.0':
      badge = '![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)';
      break;
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    default:
      badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    let link
    switch (license) {
      case 'Creative Commons Attribution 4.0':
        link = 'https://creativecommons.org/licenses/by/4.0/';
        break;
      case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
      default:
        link = ""
    }
    return link;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'No License') {
    return `## License

This project is licensed under ${license} license.`
  }
  return ``;
}

function renderLicenseContent(license) {
  if(license !== 'No License') {
    return `* [License](#license)`
  }
  return ``;
}

// TODO: Create a function to render the installation section



// TODO: Create a function to generate markdown for README
// THEN this information is added to the sections of the README entitled 
// Description, Installation, Usage, Contributing, Tests, and Questions
// a badge for that license is added near the top of the README and a notice 
// is added to the section of the README entitled License 
// that explains which license the application is covered under
// GitHub username to be added to the section entitled Questions, 
// with a link to my GitHub profile
// email address is added to the section entitled Questions, 
// with instructions on how to reach me with additional questions

function generateMarkdown(data) {
  return `# ${data.title}

[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseContent(data.license)}
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.about} <br>
${data.motivation}

## Installation
In order to run **${data.title}** you must have ${data.packageName} installed.
You can download it from [${data.packageLink}](${data.packageLink})<br>
Run this code to install the package <br> \`\`\`${data.packageCode}\`\`\`

## Usage
To invoke the application, enter the following command in your terminal or command prompt <br>
\`\`\`${data.invokeCode}\`\`\`

## Contributing
Please follow these guidelines if you want to contribute to this project. <br>
${data.contribution}

${renderLicenseSection(data.license)}

## Tests
Below are the instructions for application testing. <br>
${data.testing}

## Questions
Any questions? You can reach me at
GitHub: [${data.gitHub}](https://github.com/${data.gitHub})<br>
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
