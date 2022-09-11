const Employee=require("../lib/Employee");

describe("Employee", () => {
    it("Can initiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
    
    it("Can set name via constructor arguments", () => {
        const name = "Henry";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    
    it("Can set name via constructor argument", () => {
        const testvalue = 100;
        const employee = new Employee("Henry", testvalue);
        expect(employee.id).toBe(testvalue);
    });
    
    it("Can set email via constructor argument", () => {
        const testEmail = "3000@blackjets.com";
        const employee= new Employee("Henry", 1, testEmail);
        expect(employee.email).toBe(testEmail);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const TestName = "Henry";
            const employee = new Employee(TestName);
            expect(employee.getName()).toBe(TestName);
        });
    });
    
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testvalue = 100;
            const employee = new Employee("Henry", testvalue);
            expect(employee.getId()).toBe(testvalue);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testEmail = "3000@blackjets.com";
            const employee = new Employee("Henry", 1, testEmail);
            expect(employee.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testRole = "Employee";
            const employee = new Employee("Henry", 1, "3000@blackjets.com");
            expect(employee.getRole()).toBe(testRole);
        });
    });

});
