// worked with Matt on assignment on 7-6-21

const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const fs = require("fs");

let employees = [];


//choices
const ask  = [
{
type:"list",
name: "next",
message: "What would you like to do next?",
choices: ["Add Intern","Add Engineer","Add Manager","Make HTML","Exit"]
}]


//manager
const askManager = [
{
    name: "name",
    message: "Enter Managers Name",
    validate:(input) => 
    {
        if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a Name.");return false}
        else{return true};
    }
},
{
    name: "email",
    message: "Enter Managers Email",
    default:"Email@email.com",
    validate:(input) => 
    {
        if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter an Email.");return false}
        else{return true};
    }
},
{
    name: "id",
    message: "Enter Managers ID",
    default:"000",
},
{
    name: "officeNumber",
    message: "Enter Managers Office Number",
    default:"000",
}]


//intern
const askIntern = [
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
    }
]


//engineer
const askEngineer = [
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
        name: "gitHub",
        message: "What is the Engineers Github Username?",
        default:"userName",
        validate:(input) => 
        {
            if(input === ""){console.log("I'm afraid I cant let you do that. Please Enter a School Name.");return false}
            else{return true};
        }
    }
]


// ask about manager on start of app
function go() {
    inquirer.prompt(askManager)
    .then(answers => {
        const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
        employees.push(manager);more()})
}


//ask and push answers to array
function more() {
    inquirer.prompt(ask).then(function(answer) {
        console.log("CHOICE>>>",answer)
        if (answer.next === "Add Manager") 
        {
            inquirer.prompt(askManager)
            .then(answers => {
                const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
                employees.push(manager);more()})
        } 
        else if (answer.next === "Add Intern")
        {
        inquirer.prompt(askIntern)
            .then(answers => {
                const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
                employees.push(intern);more()})   
        }
        else if (answer.next === "Add Engineer")
        {
        inquirer.prompt(askEngineer)
            .then(answers => {
                const engineer = new Engineer(answers.name, answers.email, answers.id, answers.gitHub);
                employees.push(engineer);more()})
        
        }
        else if (answer.next === "Make HTML")
        {
            build(employees);        
        }
        else
        {
            // process.exit();
        }
    })
}


//build HTML
function build(employee) {
let templateArray = []

let templateStart = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Builder</title>
</head>
<body>
    <div class="jumbotron"><h1 class="display-4">Business Place CO.</h1></div>
    <main>
    <hr class="my-4">
    <h2>Our Team!</h2>
    <hr class="my-4">
    <div class="container row">`
templateArray.push(templateStart);

for (let index = 0; index < employee.length; index++) {
    let templateCard = 
    `<div class="card card-body"  style="width: 18rem;">
        <h3 class="h3 card-title">Employee: ${employee[index].name}</h3>
        <h3 class="h3 card-text">Employee ID: ${employee[index].id}</h3>
        <h3 class="h3 card-text">Position: ${employee[index].getRole()}</h3>
        <h3 class="h3 card-text">Email: ${employee[index].email}</h3>`
        if (employee[index].getRole() === "Manager"){templateCard+=`<h3 class="h3 card-text">Office Number: ${employee[index].officeNumber}</h3>`}
        else if (employee[index].getRole() === "Intern"){templateCard+=`<h3 class="h3 card-text">School: ${employee[index].school}</h3>`}
        else {templateCard+=`<h3 class="h3 card-text">GitHub Account: ${employee[index].gitHub}</h3>`}
    templateCard+=`</div>`
    templateArray.push(templateCard);    
}

let templateEnd =
`</div>
</main>
</body>
</html>`
templateArray.push(templateEnd);


const makeHtml = templateArray.join("");
fs.writeFile("./result/result.html", makeHtml, err=>{err?console.log(err):console.log('Much Success!!!')}) 
}

go();