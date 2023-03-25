const Employee = require("../src/lib/Employee");

const testEmployee = new Employee("Johhny", 12, "john@email.com");

// describes/names the suite of tests
describe("Testing employee properties", () => {
  it("Checking if the employee has a name", () => {
    expect(testEmployee.name).toEqual(expect.any(String));
  });

  it("Is the name at least 2 letters long?", () => {
    expect(testEmployee.name.length).toBeGreaterThanOrEqual(2);
  });

  it("Checking if the employee has an id", () => {
    expect(testEmployee.id).toEqual(expect.any(Number));
  });

  it("Checking if the employee has an email", () => {
    expect(testEmployee.email).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Checking if the employee role matches", () => {
    expect(testEmployee.getRole()).toMatch("Employee");
  });
});
