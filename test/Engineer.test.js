const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testvalue = "GitHubName";
    const employee = new Engineer("Henry", 1, "3000@blackjets.com", testvalue);
    expect(employee.github).toBe(testvalue);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const employee = new Engineer("Henry", 1, "3000@blackjets.com", "GitHubName");
    expect(employee.getRole()).toBe(testRole);
});

test("can get GitHub username via getGithub()", () => {
    const testvalue = "GitHubName";
    const employee = new Engineer("Henry", 1, "3000@blackjets.com", testvalue);
    expect(employee.getGithub()).toBe(testvalue);
});
