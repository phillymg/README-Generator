// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (License === "GPL 3.0") {
    return "(https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  else if (license === "MIT") {
    return "(https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GPL 3.0") {
    return "(https://opensource.org/license/agpl-v3/)"
  }
  else if (license === "MIT") {
    return "(https://opensource.org/license/mit/)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" || license === "GPL 3.0") {
    return
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description

${response.describe}

## Table of Contents
* [Description](##-Description)
* [Installation](##-Installation)
* [Usage](##-Usage)
* [License](##-License)
* [Contribution Guidelines](##-Contributing)
* [Tests](##-Tests)
* [Questions](##-Questions) 

## Installation

${response.install}

## Usage

${response.usage}

## License



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
