// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GPL 3.0") {
    return "[GPL 3.0 License on Opensource.org.](https://opensource.org/license/agpl-v3/)"
  }
  else if (license === "MIT") {
    return "[MIT License on Opensource.org.](https://opensource.org/license/mit/)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ${renderLicenseBadge(response.license)}
## Description

${response.describe}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${response.license !== 'none' ? `* [License](#license)` : ''}
* [Contribution Guidelines](#contributing)
* [Tests](#tests)
* [Questions](#questions) 

## Installation

${response.install}

## Usage

${response.usage}


${response.license !== 'none' ? `## License` : ''}
${response.license !== 'none' ? `This project uses the ${response.license} license.` : ''}

${renderLicenseLink(response.license)}


## Contributing

${response.contribute}

## Tests

${response.test}

## Questions

https://github.com/phillymg${response.github}

Please email me at ${response.email} with anyquestions.
 `;
};

module.exports = { generateMarkdown };
