function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

// function renderLicenseLink(license) {

// }

function renderLicenseSection(license) {
  if (license) {
  return `This project is licensed under the ${license} license.`;
  } else {
    return `This project is not licensed.`;
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}
  
  ## License
  
  ${renderLicenseSection(answers.license)}
  
  `;
}

module.exports = generateMarkdown;
