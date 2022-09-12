//Manager Template literal
const generateManager = (manager) => {
    return `
    <div class="card bg-success text-white">
        <div class="card-header">
            <h2 class="card-title text-lg-center">${manager.name}</h2>
            <h3 class="card-title text-lg-center">${manager.role}</h3><i class="material-icons">contacts</i>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${manager.id}</li>
                <li class="list=group-item"><a href="mailto:${manager.email}"></a>Email:${manager.email}</li>
                <li class="list=group-item">Office number:${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
`
}
//Engineer Template literal
const generateEngineer = (engineer) => {
    return `
    <div class="card bg-info text-white">
        <div class="card-header">
            <h2 class="card-title text-lg-center">${engineer.name}</h2>
            <h3 class="card-title text-lg-center">${engineer.role}</h3><i class="material-icons">computer</i>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${engineer.id}</li>
                <li class="list=group-item">Email:<a href="mailto:${engineer.email}"></a>${engineer.email}</li>
                <li class="list=group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
`
}
// Intern Template literal
const generateIntern = (intern) => {
    return `
    <div class="card bg-secondary text-white">
        <div class="card-header">
            <h2 class="card-title text-lg-center">${intern.name}</h2>
            <h3 class="card-title text-lg-center">${intern.role}</h3><i class="material-icons">free_breakfast</i>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list=group-item">ID:${intern.id}</li>
                <li class="list=group-item">Email:<a href="mailto:${intern.email}"></a>${intern.email}</li>
                <li class="list=group-item">School:${intern.school}</li>
            </ul>
        </div>
    </div>
`
}
// Final page compiler.
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
// Basic Template literal for the html page
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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <header class="container text-center bg-dark mw-100 p-3">
                    <span class="text-center text-xl h1 text-white">My Team</span>
        </header>
        <main>
            <div class="container p-2">    
                <div class="card-columns justify-content-center">
                    ${teamDisplay}
                </div>
            </div>
        </main>
    </body>
    </html>
`
}

module.exports = render;
