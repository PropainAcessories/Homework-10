const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
    const testNumber = 100;
    const employee = new Manager("Henry", 1, "3000@blackjets.com", testNumber);
    expect(employee.officeNumber).toBe(testNumber);
});

test ("getRole() should return \"Manager\"", () => {
    const testRole = "Manager";
    const employee = new Manager("Henry", 1, "3000@blackjets.com", 100);
    expect(employee.getRole()).toBe(testRole);
});

test("can get school via getOffice()", () => {
    const testNumber = 100;
    const employee = new Manager("Henry", 1, "3000@blackjets.com", testNumber);
    expect(employee.getOffice()).toBe(testNumber);
});
