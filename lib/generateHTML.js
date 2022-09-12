//HTML Creator.
const generateManager = (manager) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title">${manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${manager.id}</li>
                <li class="list=group-item">Email:<a href="mailto:${manager.email}"></a></li>
                <li class="list=group-item">Office number:${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
`
}

const generateEngineer = (engineer) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title">${engineer.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${engineer.id}</li>
                <li class="list=group-item">Email:<a href="mailto:${engineer.email}"></a></li>
                <li class="list=group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
`
}

const generateIntern = (intern) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title">${intern.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${intern.id}</li>
                <li class="list=group-item">Email:<a href="mailto:${intern.email}"></a></li>
                <li class="list=group-item">School:${intern.school}</li>
            </ul>
        </div>
    </div>
`
}

const render = (data) => {
    cardArray = [];

    for(let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === "Manager") {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
    }

    const teamDisplay = cardArray.join("")

    const renderTeam = renderTeamDisplay(teamDisplay);
    return renderTeam
};

const renderTeamDisplay = (teamDisplay) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="vieport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-2">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${teamDisplay}
                </div>
            </div>
        </main>
    </body>
    </html>
`
}

module.exports = render;
