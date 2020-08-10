# Team Profile Generator

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

A team profile generator that uses NODE.js to take user input and convert it into a page that displays each team member's profile. When the user is prompted for information about their team members, an HTML file is generated that displays a nicely formatted team roster based on user input. When the user clicks on an e-mail address in the HTML, the user's default email program opens and populates the "to" field of the email with the address. When the user clicks on a GitHub username, that GitHub profile opens in a new tab. When the user starts the application, they are prompted to enter the team manager’s name, employee ID, email address, and office number. Once the user enters this information, they are then presented with a menu with the option to add an engineer or an intern or to finish building their team. When the user selects the engineer option, they are prompted to enter the engineer’s name, ID, email, and GitHub username and taken back to the menu. When the user selects the intern option, they are prompted to enter the intern’s name, ID, email, and school and taken back to the menu. When the user decides to finish building their team, then they exit the application and the HTML is generated in the dist folder. 

## Built With
* node.js
* jest

## Installation

In order to use this program, the Inquirer dependency must be installed. 

## Usage 

If Inquirer is installed correctly, the user should first run the four tests in order to ensure that all files in the lib folder are running correctly. Once all tests have passed, the user only needs the command line to run the program. After typing "node index" in to run the command, the user is prompted through a series of questions. The user responses are sent to the pageTemplate.js file to populate the index.html template. This template is then sent to the generatePage.js file which creates an index.html file in the 'dist' folder, displaying the final results. This template is sent to the writeToFile function. The new README file is created and placed in the dist folder as "index.html."

## License
This project is covered by ISC.

## Link to Walkthrough Video

https://drive.google.com/file/d/1jajw5i3KxHTKns8h7k_iX5WGN-cq26Dy/view


## Screenshot
 ![Screenshot of terminal prompts](/img/terminal.png)
 ![Screenshot of generated index](/img/sample.png)
 ![Screenshot of generated index](/img/sample2.png)
 ![Screenshot of generated page](/img/samplepage.png)

## Contribution
Mallory Korpics (https://github.com/mallynnk)


