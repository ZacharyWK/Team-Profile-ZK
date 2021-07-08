// worked with Matt on assignment on 7-6-21

const inquirer = require("inquirer");

const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const { inherits } = require("util");
const { Console } = require("console");
const NumberPrompt = require("inquirer/lib/prompts/number");

let employees = [];


// on Start
init();

// Manager
function init() {
inquirer.prompt
([
{
name: "m_name",
message: "Enter Managers Name",
validate:(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a Name.");return false}
else{return true};
}
},
{
name: "m_email",
message: "Enter Managers Email",
default:"Email@email.com",
validate:
(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter an Email.");return false}
else{return true};
}
},
{
name: "m_id",
message: "Enter Managers ID",
default:"000",
},
{
name: "officeNumber",
message: "Enter Managers Office Number",
default:"000",
// autocomplete
},
])
.then(answers => {
const manager = new Manager(answers.m_name, answers.m_email, answers.m_id, answers.officeNumber);
employees.push(manager);
nextOrDone();
})    
}


// Intern Engineer or HTML
function nextOrDone() {
inquirer.prompt
([
{
type:"list",
name: "nextOrDone",
message: "What would you like to do next?",
choices: ["Add Intern","Add Engineer","Make HTML","Exit"]
},
])
.then
(answers => {
if(answers.nextOrDone === "Add Intern"){makeIntern()}
else if(answers.nextOrDone === "Add Engineer"){makeEngineer()}
else if(answers.nextOrDone === "Make HTML"){makeHTML()}
else()
})
}


// Intern
function makeIntern() {
inquirer.prompt
([
{
name: "name",
message: "Intern's name?",
validate:(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a Name.");return false}
else{return true};
}
},
{
name: "email",
message: "Intern's email?",
default:"Email@email.com",
validate:
(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter an Email.");return false}
else{return true};
}
},
{
name: "id",
message: "Intern's ID?",
default:"000",
},
{
name: "school",
message: "What is the Interns School Name?",
default:"School Name",
validate:(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a School Name.");return false}
else{return true};
}
},
])
.then(answers => {
const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
employees.push(intern);
nextOrDone();
})  
}


// Engineer
function makeEngineer() {
inquirer.prompt
([
{
name: "name",
message: "Engineers name?",
validate:(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a Name.");return false}
else{return true};
}
},
{
name: "email",
message: "Engineers email?",
default:"Email@email.com",
validate:
(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter an Email.");return false}
else{return true};
}
},
{
name: "id",
message: "Engineers ID?",
default:"000",
},
{
name: "user",
message: "What is the Engineers Github Username?",
default:"userName",
validate:(input) => 
{
if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a School Name.");return false}
else{return true};
}
},
])
.then(answers => {
const engineer = new Engineer(answers.name, answers.email, answers.id, answers.user);
employees.push(engineer);
nextOrDone();
}) 
}


// Make HTML
function makeHTML() {
employees = [Employee]

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body id="cardSlot">

</body>
</html>`;
}
//loop in emp arr if else loop to check role and make card for each in HTML