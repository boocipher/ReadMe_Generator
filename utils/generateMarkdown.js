// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  let section

}

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

  # ${data.description}

  # ${data.installation}

  # ${data.usage}

  # ${data.contributing}

  # ${data.tests}

  # ${data.questions}

`;
}

module.exports = generateMarkdown;
