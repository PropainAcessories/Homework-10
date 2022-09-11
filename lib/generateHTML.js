const path = require("path");
const fs = require("fs");

const sources = path.resolve(__dirname, "../src");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))    
    );

    return renderPage(html.join(""));

};

const renderManager = manager => {
    let source = fs.readFileSync(path.resolve(sources, "manager.html"), "utf8");
    source = replacePlaceholders(source, "name", manager.getName());
    source = replacePlaceholders(source, "role", manager.getRole());
    source = replacePlaceholders(source, "email", manager.getEmail());
    source = replacePlaceholders(source, "id", manager.getId());
    source = replacePlaceholders(source, "officeNumber", manager.getOffice());
    return source;
};

const renderEngineer = engineer => {
    let source = fs.readFileSync(path.resolve(sources, "engineer.html"), "utf8");
    source = replacePlaceholders(source, "name", engineer.getName());
    source = replacePlaceholders(source, "role", engineer.getRole());
    source = replacePlaceholders(source, "email", engineer.getEmail());
    source = replacePlaceholders(source, "id", engineer.getId());
    source = replacePlaceholders(source, "github", engineer.getGithub());
    return source;
};

const renderIntern = intern => {
    let source = fs.readFileSync(path.resolve(sources, "intern.html"), "utf8");
    source = replacePlaceholders(source, "name", intern.getName());
    source = replacePlaceholders(source, "role", intern.getRole());
    source = replacePlaceholders(source, "email", intern.getEmail());
    source = replacePlaceholders(source, "id", intern.getId());
    source = replacePlaceholders(source, "school", intern.getSchool());
    return source;
};

const renderPage = html => {
    const source = fs.readFileSync(path.resolve(sources, "main.html"), "utf8");
    return replacePlaceholders(source, "team", html);
};

const replacePlaceholders = (source, placeholder, value) => {
    const layout = new RegExp("{{ " + placeholder +" }}", "gm");
    return source.replace(layout, value);
}

module.exports = render;
