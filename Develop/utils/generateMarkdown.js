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
  if (License === "GPL 3.0") {
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

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description\n
  ${response.title}
  ## Table of Contents
  ${response.contents}
  ## Installation Instructions
  ${response.install}
  ## Usage Information
  ${response.usage}
  ## License
  renderLicenseLink()
  ## Contribution Guidelines
  ${response.contribute}
  ## Test Instructions
  ${response.test}
  ## Questions
  ${response.github}
  ${response.email}
`;
}

module.exports = generateMarkdown;