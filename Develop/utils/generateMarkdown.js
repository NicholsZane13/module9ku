// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

${data.repo}

## Description 

${data.description}


## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.install}

## Usage 

${data.usage}

## Credits

${data.credits}


## License

${data.license}

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges


## Features

${data.feature}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If there is any questions, please feel free to contact me. My name is ${data.fname}, and my email is ${data.email}. 
If you'd like to check out any of my other work, check out my github profile at ${data.github} 

`;
}

module.exports = generateMarkdown;
