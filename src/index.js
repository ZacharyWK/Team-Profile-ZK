const inquirer = require("inquirer");

const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const { inherits } = require("util");
const { Console } = require("console");
const NumberPrompt = require("inquirer/lib/prompts/number");

const employees = [];


init();
function init() {
inquirer.prompt([

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
default:"00000",
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

function nextOrDone() {
inquirer.prompt([

{
type:"list",
name: "nextOrDone",
message: "What would you like to do next?",
choices: ["Add Intern","Add Engineer","Make HTML"]
},

])
.then
(answers => {
if(answers.nextOrDone === "Add Intern"){makeIntern()}
else if(answers.nextOrDone === "Add Engineer"){makeEngineer()}
else(makeHTML())
})

}


function makeIntern() {

}

function makeEngineer() {
    
}

function makeHTML() {
    
}
//loop in emp arr if else loop to check role and make card for each in HTML