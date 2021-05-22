const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');

const managerQuestion = [
    {
        type: "input",
        message: "Enter the Team manager's Name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Team manager's employee ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Team manager's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Team manager's office number",
        name: "number",
    },
];

const addMemberQuestion = [
    {
        type: "list",
        message: "Do you want to add a team member?",
        choices: ['Engineer', 'Intern', 'Finish'],
        name: "memberType",
    },
]

const addEngineerQuestion = [
    {
        type: "input",
        message: "Enter the Engineer's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Engineer's ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Engineer's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Engineer's github username",
        name: "github",
    },
]

const addInternQuestion = [
    {
        type: "input",
        message: "Enter the Intern's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Intern's ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Intern's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Intern's school name",
        name: "school",
    },
]

const iconClass = {
    manager: `<i class="fas fa-mug-hot"></i>`,
    engineer: `<i class="fa fa-glasses"></i>`,
    intern: `<i class="fa fa-user-graduate"></i>`,
}

let cardsInfo = ``;
let cardCounter = 0;

const addCards = (newCard) => {
    let currentIcon;
    switch (newCard.getRole()) {
        case 'Manager':
            currentIcon = iconClass.manager;
            break;
        case 'Engineer':
            currentIcon = iconClass.engineer;
            break;
        case 'Intern':
            currentIcon = iconClass.intern;
            break;
        default:
            currentIcon = 'Something went wrong';
            break;
    }
    if (cardCounter % 3 === 0) {
        cardsInfo +=
            `
    <div class="row d-flex align-items-center justify-content-center mt-3">
`;
    }

    if (newCard.getRole() === 'Manager') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                        ${currentIcon}
                        ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                        <li class="list-group-item">ID: ${newCard.getID()}</li>
                        <li class="list-group-item">Email: 
                            <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                        </li>
                        <li class="list-group-item">Office number: ${newCard.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>

`;
    }

    if (newCard.getRole() === 'Engineer') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                        ${currentIcon}
                        ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                        <li class="list-group-item">ID: ${newCard.getID()}</li>
                        <li class="list-group-item">Email: 
                            <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                        </li>
                        <li class="list-group-item">GitHub: 
                            <a href="https://github.com/${newCard.getGithub()}" target="_blank">${newCard.getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    `;
    }

    if (newCard.getRole() === 'Intern') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                    ${currentIcon}
                    ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                    <li class="list-group-item">ID: ${newCard.getID()}</li>
                    <li class="list-group-item">Email: 
                        <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                    </li>
                        <li class="list-group-item">School: ${newCard.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    
    `;
    }

    if (cardCounter % 3 === 2) {
        cardsInfo +=
            `
    </div>
`;
    }

    cardCounter++;
}

function writeToFile(data) {
    fs.writeFile(path.join(__dirname, './dist/index.html'), data, (err) => {
        if (err) throw err;
        console.log("index.html File created succesfully");
    });
}


const buildFile = () => {
    if (cardCounter % 3 != 0) {
        cardsInfo += `</div>`
    }

    const htmlBody =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!-- Icons -->
    <script src="https://kit.fontawesome.com/e4017d6db4.js" crossorigin="anonymous"></script>
    <!-- Our styles -->
    <link href="../dist/css/style.css" rel="stylesheet"">

    <title>Document</title>
</head>

<body>
    <div class=" row">
    <div class="d-flex align-items-center justify-content-center header-container">
        <h1 class="header-text">My Team</h1>
    </div>
    </div>

    <div class="container">
        
        ${cardsInfo}

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
    </body>

</html>
`

    writeToFile(htmlBody);
}

const addEngineer = (myCallback) => {
    inquirer.prompt(addEngineerQuestion).then((engineerResponse) => {
        addCards(new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github));
        myCallback();
    });
}

const addIntern = (myCallback) => {
    inquirer.prompt(addInternQuestion).then((internResponse) => {
        addCards(new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school));
        myCallback();
    });
}

const addTeamMember = () => {
    inquirer.prompt(addMemberQuestion).then((memberResponse) => {
        if (memberResponse.memberType != 'Finish') {
            if (memberResponse.memberType === 'Engineer') {
                addEngineer(addTeamMember);
            } else {
                addIntern(addTeamMember);
            }
        }
        else {
            buildFile();
        }
    });
}

const addManager = (myCallback) => {
    inquirer.prompt(managerQuestion).then((managerResponse) => {
        addCards(new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.number));
        myCallback();
    });
}

const init = () => {
    addManager(addTeamMember);

}

init();