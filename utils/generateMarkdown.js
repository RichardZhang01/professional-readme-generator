// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {

    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    case 'GNU GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    default:
      return '';

  };

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {

    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU GPLv3':
      return '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';

    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';

    case 'GNU GPLv2':
      return '[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    default:
      return '';
    
  };

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {

    case 'Apache 2.0':
      return '';

    case 'GNU GPLv3':
      return '';

    case 'MIT':
      return '';

    case 'ISC':
      return '';

    case 'GNU GPLv2':
      return '';

    default:
      return '';
    
  };

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Badges

## Description

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [Questioons](#questions)

## Installation

## Usage

## License

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
