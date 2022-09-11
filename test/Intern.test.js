const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testSchool = "Auburn";
    const employee = new Intern("Henry", 1, "3000@blackjets.com", testSchool);
    expect(employee.school).toBe(testSchool);
});

test ("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const employee = new Intern("Henry", 1, "3000@blackjets.com", "Auburn");
    expect(employee.getRole()).toBe(testRole);
});

test("can get school via getSchool()", () => {
    const testSchool = "Auburn";
    const employee = new Intern("Henry", 1, "3000@blackjets.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});
